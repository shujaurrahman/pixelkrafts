import { XmarkIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    return (
        <aside
            className={`w-full h-full fixed top-0 left-0 backdrop-blur-md bg-c-black-1/10 transition-all 
                duration-[400ms] ease-custom-line ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="container py-6">

                <div className="flex items-center justify-between mb-12">
                    <Image width={64} height={55} src="/images/logo.png" alt="digitex logo" className="w-14" />

                    <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <XmarkIcon className="stroke-white w-7 h-7" />
                    </button>
                </div>

                <ul className="flex flex-col gap-5 text-white/85 tracking-wider px-3">
                    <li><Link href="/about-us">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>

            </div>
        </aside>
    );
}

export default MobileMenu;