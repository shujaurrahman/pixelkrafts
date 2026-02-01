import { CircleArrowIcon, GithubIcon, MenuIcon } from "@/assets/Icons";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div
                className="container lg:grid lg:grid-cols-12 flex items-center justify-between md:py-5 py-6"
            >

                <Image width={64} height={55} src="/images/logo.png" alt="digitex logo" className="md:w-16 w-14 col-span-2" />

                <ul
                    className="lg:flex hidden items-center justify-center gap-10 xl:col-span-8 col-span-7 text-white"
                >
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
                <div className="xl:col-span-2 col-span-3 lg:flex hidden items-center gap-4">
                    <a href="https://github.com/amirrezaRst/digitex-agency" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="inline w-6 h-6" />
                    </a>
                    <button className="bg-gradient-to-br from-c-blue-1 to-[#480090] p-0.5 rounded-full float-right">
                        <div className="bg-c-black-1 py-3 px-6 rounded-full text-white text-sm">
                            <span>Get Started</span> <CircleArrowIcon className="ml-2 inline" />
                        </div>
                    </button>
                </div>

                <button
                    className="focus:outline-none lg:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <MenuIcon />
                </button>

                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            </div>
        </nav>
    );
}

export default Navbar;