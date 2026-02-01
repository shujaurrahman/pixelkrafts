import { ArrowIcon, BrandingIcon, CircleArrowIcon, GlobalIcon, RocketIcon, CursorIcon } from "@/assets/Icons";
import Link from "next/link";
import SectionLayout from "./SectionLayout";

const ServicesSection = () => {
    return (
        <SectionLayout
            icon={<RocketIcon className="stroke-c-purple-1 md:w-7 md:h-7 w-6 h-6" />}
            lineStyles="bg-gradient-to-b from-c-purple-1 to-c-blue-1"
        >
            {({ inView }) => (
                <div className="w-full md:pb-36 pb-32">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                        <div className="flex-1">
                            <h3 className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]">
                                Transforming Ideas into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-purple-1 from-35% to-c-purple-1/50">Digital Excellence</span>
                            </h3>
                            <p className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight max-w-2xl">
                                At PixelKrafts, we specialize in crafting custom digital solutions — from stunning websites to intelligent AI systems — tailored services that drive growth and deliver results.
                            </p>
                        </div>
                        <Link href="/contact">
                            <button className="focus:outline-none bg-white text-c-purple-1 rounded-full font-semibold px-6 xl:py-3 md:py-2.5 py-2 md:text-super-sm text-super-xs hover:bg-c-purple-1 hover:text-white transition-all duration-300">
                                Get Free Quote
                                <CircleArrowIcon className="ml-1.5 inline xl:w-6 xl:h-6 max-md:w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    {/* Bento Grid Services */}
                    <div className={`grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 transition-all duration-850 ${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
                        
                        {/* Website Dev - Large Card */}
                        <div className="lg:col-span-7 group relative bg-c-blue-1 rounded-2xl p-8 md:p-10 overflow-hidden min-h-[320px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6">
                                    <GlobalIcon className="w-6 h-6 stroke-white" />
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Website Development</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">E-commerce</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Informational</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Dynamic</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Startup</span>
                                </div>
                                <p className="text-white/80 text-sm leading-relaxed max-w-sm mb-6">
                                    Crafting user-centric websites with seamless navigation and clean design, tailored to meet your business goals
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
                                    <span className="underline underline-offset-4">Start with us</span>
                                    <ArrowIcon className="fill-white w-5 h-5 ml-1" />
                                </Link>
                            </div>
                            {/* Decorative Browser Window */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] opacity-80">
                                <div className="bg-c-purple-1/40 rounded-xl p-3 backdrop-blur-sm border border-white/20">
                                    <div className="flex gap-1.5 mb-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                                        <div className="h-16 bg-white/10 rounded mt-3"></div>
                                        <div className="grid grid-cols-4 gap-1 mt-2">
                                            <div className="h-3 bg-white/15 rounded"></div>
                                            <div className="h-3 bg-white/15 rounded"></div>
                                            <div className="h-3 bg-white/15 rounded"></div>
                                            <div className="h-3 bg-white/15 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branding, SEO & SMM - Small Card */}
                        <div className="lg:col-span-5 group relative bg-c-black-2 rounded-2xl p-8 overflow-hidden min-h-[320px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6">
                                    <BrandingIcon className="w-6 h-6 stroke-white" />
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Branding, SEO & SMM</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">Branding</span>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">SEO</span>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">SMM</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
                                    Creating a powerful brand identity with strategic SEO and social media marketing to boost your online presence
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                                    <span className="underline underline-offset-4">Start with us</span>
                                    <ArrowIcon className="fill-white w-5 h-5 ml-1" />
                                </Link>
                            </div>
                            {/* Decorative Arc */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-30">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="100" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" />
                                    <circle cx="100" cy="50" r="35" fill="none" stroke="white" strokeWidth="1.5" />
                                    <circle cx="100" cy="50" r="25" fill="none" stroke="white" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>

                        {/* App Development - Small Card */}
                        <div className="lg:col-span-5 group relative bg-c-black-2 rounded-2xl p-8 overflow-hidden min-h-[320px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6">
                                    <BrandingIcon className="w-6 h-6 stroke-white" />
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-3">App Development</h4>
                                <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
                                    High-performance mobile apps with Flutter, React Native, and native iOS/Android development for seamless user experiences
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                                    <span className="underline underline-offset-4">Start with us</span>
                                    <ArrowIcon className="fill-white w-5 h-5 ml-1" />
                                </Link>
                            </div>
                            {/* Decorative Phone Shapes */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
                                <div className="flex gap-2">
                                    <div className="w-16 h-28 rounded-xl border-2 border-white"></div>
                                    <div className="w-12 h-20 rounded-lg border-2 border-white mt-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design - Large Card with Purple */}
                        <div className="lg:col-span-7 group relative bg-c-purple-1 rounded-2xl p-8 md:p-10 overflow-hidden min-h-[320px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6">
                                    <CursorIcon className="w-6 h-6 stroke-white" />
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-3">UI/UX Design</h4>
                                <p className="text-white/80 text-sm leading-relaxed max-w-sm mb-6">
                                    Designing intuitive and engaging user interfaces that provide seamless experiences, ensuring satisfaction and retention for your users
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
                                    <span className="underline underline-offset-4">Start with us</span>
                                    <ArrowIcon className="fill-white w-5 h-5 ml-1" />
                                </Link>
                            </div>
                            {/* Decorative UI Mockup */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] opacity-60">
                                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 rounded-full bg-white/30"></div>
                                        <div className="flex-1 space-y-1">
                                            <div className="h-2 bg-white/30 rounded w-2/3"></div>
                                            <div className="h-1.5 bg-white/20 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="h-12 bg-white/15 rounded mb-3"></div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-8 bg-white/20 rounded"></div>
                                        <div className="h-8 bg-white/20 rounded"></div>
                                        <div className="h-8 bg-white/20 rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mt-2">
                                        <div className="h-8 bg-white/20 rounded"></div>
                                        <div className="h-8 bg-white/20 rounded"></div>
                                        <div className="h-8 bg-white/20 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* View All Services CTA */}
                    <div className="mt-12 text-center">
                        <Link href="/services">
                            <button className="bg-white/5 border border-white/20 text-white rounded-full font-medium px-8 py-3 hover:bg-c-purple-1 hover:border-c-purple-1 hover:shadow-lg hover:shadow-c-purple-1/20 transition-all duration-300">
                                View All Services
                                <ArrowIcon className="fill-white inline w-6 h-6 ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </SectionLayout>
    );
}

export default ServicesSection;