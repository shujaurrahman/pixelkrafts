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
                    <Image width={80} height={70} src="/images/logopk.png" alt="PixelKrafts logo" className="w-16" />

                    <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <XmarkIcon className="stroke-white w-7 h-7" />
                    </button>
                </div>

                <ul className="flex flex-col gap-5 text-white/85 tracking-wider px-3">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                    <li><Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                </ul>

            </div>
        </aside>
    );
}

export default MobileMenu;