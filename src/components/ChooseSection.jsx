import { CollaborationIcon } from "@/assets/Icons";
import SectionLayout from "./SectionLayout";
import { ChooseUsVariant } from "@/constant/ChooseUsVaraint";
import ChooseUsItem from "./ChooseUsItem";


const ChooseSection = () => {
    return (

        <SectionLayout
            icon={<CollaborationIcon className="fill-c-blue-1 md:w-7 md:h-7 w-6 h-6" />}
            lineStyles="bg-gradient-to-b from-c-blue-1 to-c-purple-3"
        >
            {({ inView }) => (
                <div className="w-full md:pb-36 pb-32">

                    <h3
                        className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]"
                    >
                        Why Choose DigitX for Your  <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-blue-1 from-35% to-c-blue-1/50">
                            Digital Transformation
                        </span>
                    </h3>
                    <div className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4">
                        <p
                            className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight flex-1"
                        >
                            At DigitX, we combine innovation, expertise, and a client-first approach to deliver results that drive growth. From enhanced brand visibility to higher ROI,
                            our tailored solutions meet your specific business needs. Partner with us to unlock your full digital potential and stay ahead in today&apos;s competitive market.
                        </p>
                    </div>

                    <div
                        className={`grid xl:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-6 gap-7 lg:mt-16 mt-12 transition-all duration-850
                      ${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
                    >

                        {ChooseUsVariant.map((item, index) => (
                            <ChooseUsItem key={index} title={item.title} description={item.description} icon={item.icon} />
                        ))}

                    </div>

                </div>

            )}
        </SectionLayout >
    );
}

export default ChooseSection;