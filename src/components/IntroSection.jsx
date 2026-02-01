const IntroSection = () => {
    return (
        <section className="container flex lg:gap-5 md:gap-2.5 gap-1">

            {/*//! SideProgress */}
            <div
                className="md:min-w-10 min-w-8 lg:pt-8 md:pt-5 pt-3 flex flex-col items-center lg:gap-4 gap-2"
            >
                <div className="border-2 border-c-purple-2/60 rounded-full p-1.5"></div>
                {/* <div className="h-full w-1 rounded-full bg-gradient-to-b from-transparent to-25% to-c-purple-1"></div> */}
                <div className="h-full w-1 rounded-full bg-gradient-to-b from-transparent via-c-purple-1 via-60% to-transparent"></div>
            </div>

            {/*//! Content */}
            <div className="w-full md:pb-36 pb-24">

                <h3
                    className="mb-3 lg:font-light xl:text-[3.2rem] lg:text-[2.8rem] md:text-4xl text-2xl lg:leading-[4.3rem] md:leading-[3.5rem] leading-[2.3rem] text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3"
                >
                    Digital solutions that help develop your company for the future.
                </h3>
                <p
                    className="text-white/75 xl:text-base md:text-super-sm text-super-xs tracking-wide max-md:leading-6 font-extralight"
                >
                    At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses
                    like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are
                    committed to delivering results that exceed expectations.
                </p>
            </div>

        </section>
    );
}

export default IntroSection;