import { InstagramIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full pb-10 bg-c-black-1/20 border-t-2 border-c-purple-1/20">
            <div className="container h-full w-full">

                <div
                    className="grid grid-cols-12 2xl:gap-20 xl:gap-14 md:gap-8 gap-6 md:py-12 py-8"
                >

                    <div className="lg:col-span-4 col-span-full">

                        <div className="flex items-center gap-4 mb-7">
                            <Image src="/images/logo.png" width={64} height={55} className="md:w-16 w-14" alt="logo" />
                            <h3 className="text-white md:text-2xl text-1.5xl font-medium tracking-wide">Digitex</h3>
                        </div>

                        <p className="text-white/85 xl:text-super-sm text-sm font-extralight tracking-wide leading-6">
                            Your trusted partner in web development, design, and SEO. Together, we create digital experiences that make a lasting impact.
                        </p>

                    </div>

                    <div className="lg:col-span-8 col-span-full flex flex-wrap justify-between xl:gap-6 gap-x-14 gap-y-6">
                        <div className="pt-3 flex-1">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Quick Links</h5>

                            <ul
                                className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3"
                            >
                                <Link href="/"><li>Home</li></Link>
                                <Link href="/"><li>About Us</li></Link>
                                <Link href="/"><li>Services</li></Link>
                                <Link href="/"><li>Portfolio</li></Link>
                                <Link href="/"><li>Contact</li></Link>
                            </ul>
                        </div>

                        <div className="pt-3 flex-1">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Services</h5>

                            <ul className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3">
                                <li>Web Development</li>
                                <li>Mobile Development</li>
                                <li>SEO Services</li>
                                <li>UI/UX Design</li>
                            </ul>

                        </div>

                        <div className="pt-3 flex-1">

                            <h5 className="text-white text-xl font-medium tracking-wide mb-5">Contact</h5>

                            <ul
                                className="text-white/85 text-super-sm font-extralight tracking-wide pl-1 flex flex-col gap-3"
                            >
                                <li>Address: 1234 Street Name, City Name, United States</li>
                                <li>Phone: +123 456 7890</li>
                                <li>Email: example@gmail.com</li>
                            </ul>

                        </div>
                    </div>

                </div>

                {/*//! Bottom Footer */}
                <div
                    className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 gap-3 text-white/80 lg:text-super-sm md:text-super-xs text-xs tracking-wide xl:mt-8 md:mt-5 mt-2"
                >

                    <div>
                        <p>@{new Date().getFullYear()} Digitex. All Rights Reserved.</p>
                    </div>

                    <ul className="flex gap-7font-light">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <button className="focus:outline-none"><InstagramIcon /></button>
                        <button className="focus:outline-none"><WhatsAppIcon /></button>
                        <button className="focus:outline-none"><LinkedInIcon /></button>
                        <button className="focus:outline-none"><TwitterIcon /></button>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;