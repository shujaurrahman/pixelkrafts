"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getSiteSettings } from "../../lib/sanity.client";

const IntroSection = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            const data = await getSiteSettings();
            setSettings(data);
        };
        fetchSettings();
    }, []);

    return (
        <section className="container flex lg:gap-5 md:gap-2.5 gap-1">

            {/*//! SideProgress */}
            <div
                className="md:min-w-10 min-w-8 lg:pt-8 md:pt-5 pt-3 flex flex-col items-center lg:gap-4 gap-2"
            >
                <div className="border-2 border-c-purple-2/60 rounded-full p-1.5"></div>
                <div className="h-full w-1 rounded-full bg-gradient-to-b from-transparent via-c-purple-1 via-60% to-transparent"></div>
            </div>

            {/*//! Content */}
            <div className="w-full md:pb-36 pb-24">

                <h3
                    className="mb-3 lg:font-light xl:text-[3.2rem] lg:text-[2.8rem] md:text-4xl text-2xl lg:leading-[4.3rem] md:leading-[3.5rem] leading-[2.3rem] text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3"
                >
                    {settings?.introSection?.title}
                </h3>
                {settings?.introSection?.description && (
                    <p
                        className="text-white/75 xl:text-base md:text-super-sm text-super-xs tracking-wide max-md:leading-6 font-extralight mb-6"
                    >
                        {settings.introSection.description}
                    </p>
                )}

                {/* Stats */}
                <div className="flex flex-wrap gap-8 md:gap-12 mt-8">
                    {settings?.stats?.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-c-purple-1 to-c-blue-1">{stat.value}</div>
                            <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <Link href="/about" className="inline-flex items-center mt-8 text-c-purple-1 hover:text-white transition-colors group">
                    <span className="underline underline-offset-4">Learn more about us</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

        </section>
    );
}

export default IntroSection;