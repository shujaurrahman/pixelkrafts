"use client"
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { getPortfolioBySlug, urlFor } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

/* ─────────────────────────────────────────────
   Image Carousel
   ───────────────────────────────────────────── */
function ImageCarousel({ images }) {
    const [cur, setCur] = useState(0);
    const [auto, setAuto] = useState(true);

    useEffect(() => {
        if (!auto || images.length <= 1) return;
        const id = setInterval(() => setCur(p => (p + 1) % images.length), 4500);
        return () => clearInterval(id);
    }, [auto, images.length]);

    const go  = useCallback((i) => { setCur(i); setAuto(false); }, []);
    const nxt = useCallback(() => { setCur(p => (p + 1) % images.length); setAuto(false); }, [images.length]);
    const prv = useCallback(() => { setCur(p => (p - 1 + images.length) % images.length); setAuto(false); }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="relative group">
            {/* Main image — object-contain so nothing gets cropped */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <Image
                        src={urlFor(images[cur]).width(1400).height(788).url()}
                        fill
                        alt={`Project screenshot ${cur + 1}`}
                        className="object-contain"
                        priority={cur === 0}
                    />
                </div>

                {images.length > 1 && (
                    <>
                        <button onClick={prv}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-c-purple-1 hover:border-c-purple-1">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nxt}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-c-purple-1 hover:border-c-purple-1">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </>
                )}

                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-semibold text-xs border border-white/10">
                    {cur + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 justify-center">
                    {images.map((img, i) => (
                        <button key={i} onClick={() => go(i)}
                            className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                i === cur
                                    ? "border-c-purple-1 shadow-lg shadow-c-purple-1/20"
                                    : "border-white/10 opacity-40 hover:opacity-80 hover:border-white/30"
                            }`}>
                            <Image src={urlFor(img).width(120).height(80).url()} width={120} height={80} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────── */
const categoryLabels = {
    website: "Website", app: "Mobile App", ecommerce: "E-Commerce",
    design: "UI/UX Design", ai: "AI / Automation", fullstack: "Full Stack",
};

function ytUrl(u) { if(!u) return null; const m=u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/); return m?`https://www.youtube.com/embed/${m[1]}`:null; }
function vmUrl(u) { if(!u) return null; const m=u.match(/vimeo\.com\/(\d+)/); return m?`https://player.vimeo.com/video/${m[1]}`:null; }

/* ─── Reusable section wrapper ─── */
function Section({ children, alt = false }) {
    return (
        <section className={alt ? "bg-white/[0.02]" : ""}>
            <div className="container py-20">
                <div className="max-w-5xl mx-auto">{children}</div>
            </div>
        </section>
    );
}

function Heading({ children, sub }) {
    return (
        <div className="mb-12 text-center">
            {sub && <p className="text-c-purple-1 font-semibold text-xs uppercase tracking-[0.2em] mb-3">{sub}</p>}
            <h2 className="text-4xl md:text-5xl font-bold text-white">{children}</h2>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────── */
export default function PortfolioDetailPage() {
    const params = useParams();
    const slug = params?.slug;
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) { setError("No slug"); setLoading(false); return; }
        (async () => {
            try {
                const d = await getPortfolioBySlug(slug);
                d?._id ? setProject(d) : setError("Project not found");
            } catch (e) { setError(e.message || "Failed to load"); }
            finally { setLoading(false); }
        })();
    }, [slug]);

    /* ── Loading ── */
    if (loading) return (
        <div className="w-full min-h-screen bg-c-black-1">
            <Navbar />
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="flex flex-col items-center gap-5">
                    <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-c-purple-1 border-t-transparent" />
                    <p className="text-white/40 text-sm tracking-wide">Loading project…</p>
                </div>
            </div>
        </div>
    );

    /* ── Error ── */
    if (error || !project) return (
        <div className="w-full min-h-screen bg-c-black-1">
            <Navbar />
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="text-center px-6">
                    <div className="text-7xl mb-6 opacity-20">🔍</div>
                    <h1 className="text-4xl font-bold text-white mb-3">Project Not Found</h1>
                    <p className="text-white/40 mb-8 text-lg">{error || "This project doesn't exist."}</p>
                    <Link href="/portfolio">
                        <button className="px-8 py-3.5 bg-c-purple-1 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-c-purple-1/25 transition-all">
                            ← Back to Portfolio
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );

    const videoEmbed = ytUrl(project.video?.videoUrl) || vmUrl(project.video?.videoUrl);
    const hasVideo = videoEmbed || project.videoFileUrl;
    const allImages = [...(project.mainImage ? [project.mainImage] : []), ...(project.gallery || [])];

    return (
        <div className="w-full min-h-screen bg-c-black-1">
            <Navbar />

            <main className="pt-28">

                {/* ── Breadcrumb ── */}
                <div className="container py-5">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-white/30 hover:text-c-purple-1 transition-colors">Home</Link>
                        <span className="text-white/15">/</span>
                        <Link href="/portfolio" className="text-white/30 hover:text-c-purple-1 transition-colors">Portfolio</Link>
                        <span className="text-white/15">/</span>
                        <span className="text-c-purple-1 font-medium truncate max-w-[220px]">{project.title}</span>
                    </nav>
                </div>

                {/* ── Hero ── */}
                <section className="pb-16">
                    <div className="container">
                        <div className="max-w-5xl mx-auto text-center">
                            <span className="inline-block px-5 py-2 rounded-full bg-c-purple-1/15 text-c-purple-1 font-semibold text-sm mb-8 border border-c-purple-1/20">
                                {categoryLabels[project.category] || project.category}
                            </span>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
                                {project.title}
                            </h1>

                            <p className="text-white text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                                {project.shortDescription}
                            </p>

                            {/* Meta pills */}
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                <div className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-2xl">
                                    <span className="text-white/30 text-xs uppercase tracking-wider block mb-0.5">Client</span>
                                    <span className="text-white font-semibold">{project.client}</span>
                                </div>
                                {project.overview?.duration && (
                                    <div className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-2xl">
                                        <span className="text-white/30 text-xs uppercase tracking-wider block mb-0.5">Duration</span>
                                        <span className="text-white font-semibold">{project.overview.duration}</span>
                                    </div>
                                )}
                                {project.overview?.completedDate && (
                                    <div className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-2xl">
                                        <span className="text-white/30 text-xs uppercase tracking-wider block mb-0.5">Completed</span>
                                        <span className="text-white font-semibold">{new Date(project.overview.completedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                                    </div>
                                )}
                            </div>

                            {project.overview?.projectUrl && (
                                <a href={project.overview.projectUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-c-purple-1 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-c-purple-1/30 hover:scale-[1.03] transition-all">
                                    View Live Project
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── Gallery Carousel ── */}
                {allImages.length > 0 && (
                    <Section alt>
                        <Heading sub="Showcase">Project Gallery</Heading>
                        <ImageCarousel images={allImages} />
                    </Section>
                )}

                {/* ── Technologies ── */}
                {project.overview?.technologies?.length > 0 && (
                    <Section>
                        <Heading sub="Tech Stack">Technologies Used</Heading>
                        <div className="flex flex-wrap justify-center gap-3">
                            {project.overview.technologies.map((t, i) => (
                                <span key={i} className="px-5 py-2.5 bg-c-purple-1/10 border border-c-purple-1/20 text-c-purple-1 rounded-full text-sm font-semibold hover:bg-c-purple-1 hover:text-white hover:border-c-purple-1 transition-all duration-300 cursor-default">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Overview ── */}
                {project.overview?.description && (
                    <Section alt>
                        <Heading sub="About">Project Overview</Heading>
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-14">
                            <p className="text-white text-lg leading-[1.9] whitespace-pre-line font-light">
                                {project.overview.description}
                            </p>
                        </div>
                    </Section>
                )}

                {/* ── Challenge & Solution ── */}
                {(project.challenge?.description || project.solution?.description) && (
                    <Section>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.challenge?.description && (
                                <div className="bg-red-500/[0.06] border border-red-500/15 rounded-2xl p-9">
                                    <div className="w-11 h-11 rounded-xl bg-red-500/15 flex items-center justify-center mb-5">
                                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.challenge.title || "The Challenge"}</h3>
                                    <div className="text-white leading-relaxed prose prose-invert max-w-none prose-p:text-white prose-strong:text-white prose-li:marker:text-red-400">
                                        <PortableText value={project.challenge.description} />
                                    </div>
                                </div>
                            )}
                            {project.solution?.description && (
                                <div className="bg-emerald-500/[0.06] border border-emerald-500/15 rounded-2xl p-9">
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-5">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.solution.title || "Our Solution"}</h3>
                                    <div className="text-white leading-relaxed prose prose-invert max-w-none prose-p:text-white prose-strong:text-white prose-li:marker:text-emerald-400">
                                        <PortableText value={project.solution.description} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Section>
                )}

                {/* ── Results ── */}
                {(project.results?.metrics?.length > 0 || project.results?.description) && (
                    <Section alt>
                        <Heading sub="Impact">Results &amp; Metrics</Heading>

                        {project.results.metrics?.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                                {project.results.metrics.map((m, i) => (
                                    <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center hover:border-c-purple-1/30 hover:-translate-y-1 transition-all duration-300">
                                        {m.icon && <div className="text-4xl mb-3">{m.icon}</div>}
                                        <div className="text-3xl font-extrabold text-c-purple-1 mb-1">{m.value}</div>
                                        <div className="text-white text-sm font-medium">{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {project.results.description && (
                            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-10">
                                <div className="text-white text-lg leading-relaxed prose prose-invert prose-lg max-w-none prose-p:text-white prose-strong:text-white">
                                    <PortableText value={project.results.description} />
                                </div>
                            </div>
                        )}
                    </Section>
                )}

                {/* ── Process ── */}
                {project.process?.length > 0 && (
                    <Section>
                        <Heading sub="How We Did It">Our Process</Heading>
                        <div className="space-y-4">
                            {project.process.map((s, i) => (
                                <div key={i} className="flex gap-6 items-start bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-c-purple-1/20 transition-all">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-c-purple-1 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-c-purple-1/20">
                                        {s.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1.5">{s.title}</h3>
                                        <p className="text-white leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Case Study ── */}
                {project.caseStudy && (
                    <Section alt>
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-xl bg-c-purple-1 flex items-center justify-center shadow-lg shadow-c-purple-1/20">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Full Case Study</h2>
                            </div>
                            <div className="text-white [&_*]:text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-white [&_li]:text-white [&_strong]:text-white [&_a]:text-c-purple-1 [&_a]:font-semibold space-y-6 text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:marker:text-c-purple-1">
                                <PortableText value={project.caseStudy} />
                            </div>
                        </div>
                    </Section>
                )}

                {/* ── Video ── */}
                {hasVideo && (
                    <Section>
                        <Heading sub="Watch">Project Walkthrough</Heading>
                        <div className="rounded-2xl overflow-hidden border border-white/10">
                            {videoEmbed ? (
                                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                                    <iframe src={videoEmbed} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                            ) : project.videoFileUrl && (
                                <video controls className="w-full"><source src={project.videoFileUrl} type="video/mp4" /></video>
                            )}
                        </div>
                    </Section>
                )}

                {/* ── Testimonial ── */}
                {project.testimonial?.quote && (
                    <Section alt>
                        <Heading sub="What Our Client Says">Testimonial</Heading>
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
                            <svg className="w-14 h-14 text-c-purple-1/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                            <p className="text-white/85 text-2xl md:text-3xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                                &ldquo;{project.testimonial.quote}&rdquo;
                            </p>
                            {(project.testimonial.clientName || project.testimonial.clientPosition) && (
                                <div className="flex items-center justify-center gap-5 pt-8 border-t border-white/10">
                                    {project.testimonial.clientPhoto && (
                                        <Image
                                            src={urlFor(project.testimonial.clientPhoto).width(80).height(80).url()}
                                            width={80} height={80}
                                            alt={project.testimonial.clientName || "Client"}
                                            className="rounded-full border-[3px] border-c-purple-1/30 shadow-lg shadow-c-purple-1/10"
                                        />
                                    )}
                                    <div className="text-left">
                                        {project.testimonial.clientName && (
                                            <p className="text-white font-bold text-lg">{project.testimonial.clientName}</p>
                                        )}
                                        {project.testimonial.clientPosition && (
                                            <p className="text-c-purple-1 font-medium text-sm">{project.testimonial.clientPosition}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Section>
                )}

                {/* ── CTA ── */}
                <section className="py-24">
                    <div className="container">
                        <div className="max-w-4xl mx-auto bg-gradient-to-br from-c-purple-1 to-c-purple-1/70 rounded-2xl p-14 md:p-20 text-center relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Ready to Start Your Project?</h2>
                                <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                                    Let&apos;s discuss how we can bring your vision to life with the same quality and dedication.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/contact">
                                        <button className="px-10 py-4 bg-white text-c-purple-1 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3">
                                            Get in Touch
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </button>
                                    </Link>
                                    <Link href="/portfolio">
                                        <button className="px-10 py-4 border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white hover:text-c-purple-1 transition-all hover:scale-105">
                                            More Projects
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}