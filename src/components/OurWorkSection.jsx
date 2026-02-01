import { CircleArrowIcon, GlobalToolsIcon } from "@/assets/Icons";
import SectionLayout from "./SectionLayout";
import { PortfolioVariant } from "@/constant/PortfolioVariant";
import PortfolioCard from "./PortfolioCard";

const OurWorkSection = () => {
    return (
        <SectionLayout
            icon={<GlobalToolsIcon className="stroke-[#ac8ef2] md:w-8 md:h-8 w-7 h-7" />}
            lineStyles="bg-gradient-to-b from-c-purple-1 to-c-blue-1"
        >
            {({ inView }) => (

                <div className="w-full md:pb-36 pb-32">

                    <h3
                        className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]"
                    >
                        Our Work of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ac8ef2] from-35% to-[#ac8ef2]/50">Digital Creations</span>
                    </h3>
                    <div className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4">
                        <p
                            className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight flex-1"
                        >
                            From concept to completion, our projects reflect the expertise and creativity of our team. Each project is a testament
                            to our commitment to delivering innovative solutions tailored to meet the unique needs of our clients.
                        </p>
                        <button
                            className="focus:outline-none bg-white text-black rounded-full font-medium px-6 xl:py-3 md:py-2.5 py-2 md:text-super-sm text-super-xs"
                        >
                            All Portfolio
                            <CircleArrowIcon className="ml-1.5 inline xl:w-6 xl:h-6 max-md:w-5 h-5 fill-white" fillColor="black" strokeColor="black" />
                        </button>
                    </div>

                    <div
                        className={`grid 2xl:grid-cols-2 gap-x-10 2xl:gap-y-12 gap-16 mt-16 transition-all duration-850
                         ${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
                    >

                        {PortfolioVariant.map((item, index) => (
                            <PortfolioCard key={index} {...item} />
                        ))}

                    </div>

                </div>

            )}
        </SectionLayout >
    );
}

export default OurWorkSection;