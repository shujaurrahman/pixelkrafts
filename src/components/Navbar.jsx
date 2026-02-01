"use client"
import { CircleArrowIcon, MenuIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div
                className="container lg:grid lg:grid-cols-12 flex items-center justify-between md:py-5 py-6"
            >

                <Link href="/" className="col-span-2">
                    <Image width={140} height={120} src="/images/logopk.png" alt="PixelKrafts logo" className="md:w-36 w-28" />
                </Link>

                <ul
                    className="lg:flex hidden items-center justify-center gap-10 xl:col-span-8 col-span-7 text-white"
                >
                    <Link href="/about"><li className="cursor-pointer hover:text-c-purple-1 transition-colors">About</li></Link>
                    <Link href="/services"><li className="cursor-pointer hover:text-c-purple-1 transition-colors">Services</li></Link>
                    <Link href="/portfolio"><li className="cursor-pointer hover:text-c-purple-1 transition-colors">Portfolio</li></Link>
                    <Link href="/blogs"><li className="cursor-pointer hover:text-c-purple-1 transition-colors">Blogs</li></Link>
                    <Link href="/contact"><li className="cursor-pointer hover:text-c-purple-1 transition-colors">Contact Us</li></Link>
                </ul>
                <div className="xl:col-span-2 col-span-3 lg:flex hidden items-center gap-4">
                    <Link href="/contact">
                        <button className="bg-gradient-to-br from-c-blue-1 to-[#480090] p-0.5 rounded-full">
                            <div className="bg-c-black-1 py-3 px-6 rounded-full text-white text-sm hover:bg-transparent transition-all">
                                <span>Get a Free Quote</span> <CircleArrowIcon className="ml-2 inline" />
                            </div>
                        </button>
                    </Link>
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