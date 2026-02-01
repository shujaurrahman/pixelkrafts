"use client";
import { InstagramIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon, GithubIcon } from "@/assets/Icons";
import { useState, useEffect } from "react";
import { getSiteSettings } from "../../lib/sanity.client";

const HeroSocial = () => {
    const [socialLinks, setSocialLinks] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            const settings = await getSiteSettings();
            if (settings?.socialLinks) {
                setSocialLinks(settings.socialLinks);
            }
        };
        fetchSettings();
    }, []);

    return (
        <div className="flex items-center justify-center md:gap-5 gap-4">
            {socialLinks?.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:opacity-80 transition-opacity">
                    <InstagramIcon className="max-md:w-5 h-5" />
                </a>
            )}
            {socialLinks?.whatsapp && (
                <a href={`https://wa.me/${socialLinks.whatsapp}`} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:opacity-80 transition-opacity">
                    <WhatsAppIcon className="max-md:w-5 h-5" />
                </a>
            )}
            {socialLinks?.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:opacity-80 transition-opacity">
                    <LinkedInIcon className="max-md:w-5 h-5" />
                </a>
            )}
            {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:opacity-80 transition-opacity">
                    <TwitterIcon className="max-md:w-5 h-5" />
                </a>
            )}
            {socialLinks?.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:opacity-80 transition-opacity">
                    <GithubIcon className="max-md:w-5 h-5" />
                </a>
            )}
        </div>
    );
}

export default HeroSocial;