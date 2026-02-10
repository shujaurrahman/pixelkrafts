import { useEffect, useRef, useState } from "react";

const SectionLayout = ({ icon: Icon, lineStyles, duration, children }) => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const offset = 250;

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const currentScrollY = window.scrollY;
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
            const sectionBottom = sectionTop + sectionRef.current.offsetHeight + offset;

            if (currentScrollY > sectionBottom) {
                setInView(true);
            } else if (currentScrollY < sectionTop) {
                setInView(false);
            } else {
                setInView(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="container flex lg:gap-5 md:gap-2.5 gap-1">
            {/*//! SideProgress */}
            <div
                className="md:min-w-10 min-w-8 md:pt-5 pt-3 flex flex-col items-center lg:gap-4 gap-2"
            >
                {Icon && Icon}
                <div
                    className={`w-1 rounded-full ${lineStyles} transition-all
                         ease-custom-line ${duration ? duration : "duration-[1300ms]"} ${inView ? 'h-full' : 'h-0'}`}
                />
            </div>

            {/*//! Content */}
            {children({ inView })}

        </section>

    );
}

export default SectionLayout;