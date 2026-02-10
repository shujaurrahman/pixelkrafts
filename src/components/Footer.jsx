"use client"
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSiteSettings, urlFor } from "../../lib/sanity.client";

const Footer = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        async function fetchSettings() {
            try {
                const data = await getSiteSettings();
                setSettings(data);
            } catch (error) {
                console.error('Error fetching site settings:', error);
            }
        }
        fetchSettings();
    }, []);

    const socialLinks = settings?.socialLinks || {};

    return (
        <footer className="w-full pb-10 bg-c-black-1/20 border-t-2 border-c-purple-1/20">
            <div className="container h-full w-full">

                <div
                    className="grid grid-cols-12 2xl:gap-20 xl:gap-14 md:gap-8 gap-6 md:py-12 py-8"
                >

                    <div className="lg:col-span-4 col-span-full">

                        <div className="mb-7">
                            {settings?.logo ? (
                                <Image 
                                    src={urlFor(settings.logo).width(160).height(140).url()} 
                                    width={160} 
                                    height={140} 
                                    className="md:w-40 w-32" 
                                    alt={settings?.companyName || "Company logo"} 
                                />
                            ) : (
                                <Image src="/images/logopk.png" width={160} height={140} className="md:w-40 w-32" alt="PixelKrafts logo" />
                            )}
                        </div>

                        <p className="text-white/85 xl:text-super-sm text-sm font-extralight tracking-wide leading-6">
                            {settings?.description}
                        </p>

                        {/* MSME Certification Badge */}
                        <div className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-4 py-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-green-400 text-xs font-semibold">MSME Certified</p>
                                <p className="text-green-400/70 text-[10px]">UDYAM-UP-60-0038284</p>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-8 col-span-full flex flex-wrap justify-between xl:gap-6 gap-x-14 gap-y-6">
                        <div className="pt-3 flex-1 min-w-[200px]">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Quick Links</h5>

                            <ul
                                className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3"
                            >
                                <Link href="/services"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Services</li></Link>
                                <Link href="/portfolio"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Portfolio</li></Link>
                                <Link href="/catalogue"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Catalogue</li></Link>
                                <a href="https://careers.pixelkrafts.in" target="_blank" rel="noopener noreferrer"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Careers</li></a>
                                <Link href="/blogs"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Blogs</li></Link>
                            </ul>
                        </div>

                        <div className="pt-3 flex-1 min-w-[200px]">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Useful Links</h5>

                            <ul className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3">
                                <Link href="/terms"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Terms & Conditions</li></Link>
                                <Link href="/privacy"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Privacy Policies</li></Link>
                                <Link href="/refund"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Refund Policies</li></Link>
                                <Link href="/security"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">Security Policies</li></Link>
                                <Link href="/nda"><li className="hover:text-c-purple-1 transition-colors cursor-pointer">NDA Policies</li></Link>
                            </ul>

                        </div>

                        <div className="pt-3 flex-1 min-w-[200px]">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Contact Us</h5>

                            <ul
                                className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3"
                            >
                                {settings?.address && <li style={{whiteSpace: 'pre-line'}}>{settings.address}</li>}
                                {settings?.workingHours && <li>{settings.workingHours}</li>}
                                {settings?.phone && <li>Phone: {settings.phone}</li>}
                                {settings?.email && <li>Email: {settings.email}</li>}
                            </ul>

                        </div>
                    </div>

                </div>

                {/*//! Bottom Footer */}
                <div
                    className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 gap-3 text-white/80 lg:text-super-sm md:text-super-xs text-xs tracking-wide xl:mt-8 md:mt-5 mt-2"
                >

                    <div>
                        <p>@{new Date().getFullYear()} {settings?.copyrightText || (settings?.companyName ? `${settings.companyName}. All Rights Reserved.` : '')}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.instagram && (
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:scale-110 transition-transform">
                                <InstagramIcon />
                            </a>
                        )}
                        {socialLinks.whatsapp && (
                            <a href={`https://wa.me/${socialLinks.whatsapp}`} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:scale-110 transition-transform">
                                <WhatsAppIcon />
                            </a>
                        )}
                        {socialLinks.linkedin && (
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:scale-110 transition-transform">
                                <LinkedInIcon />
                            </a>
                        )}
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;