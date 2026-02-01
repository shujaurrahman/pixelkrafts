import { ArrowIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";

const ChooseUsItem = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-c-black-2 backdrop-blur-md rounded-3xl relative border border-[#191919]">
            <Image width={784} height={706} src="/images/star-pattern.png" alt="stars pattern" className="absolute top z-[1]" />

            <div
                className="w-full h-full flex flex-col items-center lg:px-10 px-6 2xl:py-16 lg:py-10 md:py-7 py-9"
            >
                <div
                    className="lg:w-[4.5rem] lg:h-[4.5rem] w-16 h-16 flex items-center justify-center rounded-full border border-c-purple-2/40 bg-c-black-2 z-[2]"
                >
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-c-purple-2/80 bg-c-black-2 z-[2]"
                    >
                        <Icon className="lg:w-6 lg:h-6 w-5 h-5" />
                    </div>
                </div>

                <h4 className="text-white text-center 2xl:text-xl lg:text-lg text-base lg:mt-5 mt-3">
                    {title}
                </h4>

                <p className="text-white/80 text-center 2xl:text-sm lg:text-super-xs text-xs font-light lg:leading-6 leading-5 lg:mt-5 mt-4">
                    {description}
                </p>

                <Link href="/" className="underline underline-offset-4 text-white font-light lg:text-super-xs text-xs mt-5">
                    Learn More <ArrowIcon className="fill-white inline" />
                </Link>
            </div>

        </div>
    );
}

export default ChooseUsItem;