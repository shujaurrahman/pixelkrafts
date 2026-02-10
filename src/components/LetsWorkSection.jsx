"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowIcon } from "@/assets/Icons";
import { getSiteSettings } from "../../lib/sanity.client";

const LetsWorkSection = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            const data = await getSiteSettings();
            setSettings(data);
        };
        fetchSettings();
    }, []);

    return (
        <section className="container flex lg:gap-5 md:gap-2.5 gap-3">

            {/*//! SideProgress */}
            <div className="md:min-w-10 min-w-8 pt-5 flex flex-col items-center lg:gap-4 gap-2">
                <div className="border-2 border-c-purple-2/60 rounded-full p-1.5"></div>
            </div>

            {/*//! Content */}
            <div className="w-full md:pb-36 pb-32">

                <div
                    className="flex lg:flex-row flex-col lg:items-center items-start justify-between xl:gap-40 lg:gap-24 md:gap-9 gap-7"
                >
                    <div className="flex-1">
                        <h3
                            className="lg:text-5xl md:text-[2.85rem] text-[2rem] leading-[3.6rem] text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 from-20% via-white to-c-purple-3 to-80%"
                        >
                            {settings?.ctaSection?.title}
                        </h3>
                        {settings?.ctaSection?.description && (
                            <p
                                className="text-white/85 font-extralight lg:text-base md:text-super-sm text-sm tracking-wide md:leading-7 leading-6 md:mt-3 mt-1"
                            >
                                {settings.ctaSection.description}
                            </p>
                        )}
                    </div>

                    <Link href="/contact">
                        <button
                            className="bg-white rounded-full text-black md:py-3 py-2 px-7 md:text-base text-sm font-medium hover:bg-c-purple-1 hover:text-white transition-all duration-300"
                        >
                            {settings?.ctaSection?.buttonText || 'Contact Us'}{' '}<ArrowIcon className="md:w-7 md:h-7 w-6 h-6 fill-black inline" />
                        </button>
                    </Link>
                </div>

            </div>

        </section>
    );
}

export default LetsWorkSection;