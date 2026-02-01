import { CircleArrowIcon, ScrollTriggerIcon } from "@/assets/Icons";
import HeroSocial from "./HeroSocial";

const HeaderHero = () => {
    return (
        <section className="w-full h-screen overflow-hidden relative">

            {/*//! Overlay */}
            <div className="bg-red-400">
                <svg viewBox="0 0 200 200"
                    className="md:w-[600px] md:h-[600px] w-[520px] h-[520px] z-10 absolute md:-right-28 md:top-16 top-20 -right-36"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="#854CFF" d="M40.6,-60.6C48.4,-50.1,47.7,-32.7,52.5,-17.2C57.3,-1.7,67.6,11.8,62.5,18.1C57.5,24.4,37,23.5,24,33.6C11,43.7,5.5,64.8,-2.3,68C-10.1,71.1,-20.2,56.4,-31.2,45.7C-42.3,35,-54.3,28.3,-53.5,19.9C-52.7,11.6,-39.1,1.7,-33.7,-9.8C-28.4,-21.2,-31.3,-34.2,-27.1,-45.9C-22.9,-57.6,-11.4,-68,2.5,-71.4C16.4,-74.8,32.7,-71.2,40.6,-60.6Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200"
                    className="md:w-[600px] md:h-[600px] w-[520px] h-[520px] z-10 absolute md:-bottom-52 md:-left-32 -bottom-52 -left-40"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="#504CFF" d="M38.3,-58.2C45.9,-47.2,45.7,-31,53.7,-15.3C61.8,0.4,78.1,15.5,76.6,26.4C75.1,37.2,55.8,43.7,40,50.8C24.3,57.9,12.1,65.6,-3.7,70.8C-19.6,75.9,-39.2,78.4,-54.2,71C-69.2,63.6,-79.6,46.5,-74.7,31.4C-69.7,16.4,-49.3,3.5,-42,-12C-34.8,-27.6,-40.6,-45.8,-35.8,-57.7C-31,-69.6,-15.5,-75.3,-0.1,-75.2C15.3,-75.1,30.7,-69.2,38.3,-58.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/*//! Content */}
            <div
                className="absolute z-20 w-full h-full bg-c-black-1/45 bg-[url('/images/mask.png')] backdrop-blur-[100px] pt-[20vh]"
            >
                <div className="container">

                    <HeroSocial />
                    <h2
                        className="md:mt-9 mt-5 leading-[7rem] text-8xl lg:text-[5.4rem] md:text-[4.8rem] md:leading-[5.9rem] max-md:text-[2.7rem] 
                        max-md:leading-[3.45rem] text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 from-20% via-white
                         to-c-purple-3 to-80%"
                    >
                        Amazing website creation with Digitex
                    </h2>

                    <p
                        className="text-center lg:text-super-base md:text-base text-super-xs leading-6 text-white/85 md:mt-7 mt-3.5 md:font-light font-extralight tracking-wide"
                    >
                        help you to build website company that is modern, user friendly, good CEO, and Clean design
                    </p>

                    <button
                        className="focus:outline-none bg-white text-black md:text-base text-sm rounded-full font-medium px-8 md:py-3 py-2.5 md:mt-10 mt-9 mx-auto block"
                    >
                        Get Started
                        <CircleArrowIcon className="md:ml-2.5 ml-2 inline md:w-7 md:h-7 fill-white" fillColor="black" strokeColor="black" />
                    </button>

                    <div
                        className="flex flex-col items-center mt-20 absolute bottom-4 left-[50%] translate-x-[-50%]"
                    >
                        <ScrollTriggerIcon className="w-4 h-6 animate-bounce" />
                        <span className="text-white/85 font-light md:text-super-xs text-xs tracking-wide mt-1.5">
                            Scroll down for work Together
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeaderHero;