import { SpeechBubbleIcon } from "@/assets/Icons";
import SectionLayout from "./SectionLayout";
import { TestimonialVariant } from "@/constant/TestimonialVariant";
import TestimonialItem from "./TestimonialItem";

const TestimonialSection = () => {
    return (
        <SectionLayout
            icon={<SpeechBubbleIcon className="fill-c-purple-1 md:w-8 md:h-8 w-7 h-7" />}
            lineStyles="bg-gradient-to-b from-c-purple-1 to-c-blue-1"
            duration={"duration-[900ms]"}
        >
            {({ inView }) => (
                <div className="w-full md:pb-36 pb-32">

                    <h3
                        className="md:mb-16 mb-10 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]"
                    >
                        What Our Clients <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-purple-1 from-35% to-c-purple-1/50">Are Saying</span>
                    </h3>

                    <div
                        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
                    >
                        <ul className="flex items-center justify-center md:justify-start xl:[&_li]:mx-8 [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
                            {TestimonialVariant.map((item, index) => (
                                <TestimonialItem key={index} {...item} />
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start xl:[&_li]:mx-8 [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {TestimonialVariant.map((item, index) => (
                                <TestimonialItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>

                </div>
            )}
        </SectionLayout>
    );
}

export default TestimonialSection;