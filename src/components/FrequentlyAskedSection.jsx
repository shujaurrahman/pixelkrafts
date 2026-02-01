import { SupportIcon } from "@/assets/Icons";
import { FrequentlyAskedVariant } from "@/constant/FrequentlyAskedVariant";
import FrequentlyAskedItem from "./FrequentlyAskedItem";
import SectionLayout from "./SectionLayout";

const FrequentlyAskedSection = () => {
    return (
        <SectionLayout
            icon={<SupportIcon className="fill-c-blue-1 md:w-8 md:h-8 w-7 h-7" />}
            lineStyles="bg-gradient-to-b from-c-blue-1 via-c-blue-1/50 via-85% to-transparent"
            duration={"duration-[900ms]"}
        >
            {({ inView }) => (

                <div className="w-full md:pb-40 pb-28">

                    <h3
                        className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]"
                    >
                        Frequently Asked <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-blue-1 from-35% to-c-blue-1/50">Question</span>
                    </h3>

                    <div className={`grid md:grid-cols-2 lg:gap-x-10 gap-x-6 lg:gap-y-7 gap-5 md:mt-14 mt-10 transition-all duration-850 ${inView ? "opacity-100": "opacity-0"}`}>

                        {FrequentlyAskedVariant.map((item, index) => (
                            <FrequentlyAskedItem key={index} {...item} />
                        ))}

                    </div>

                </div>

            )}
        </SectionLayout>
    );
}

export default FrequentlyAskedSection;