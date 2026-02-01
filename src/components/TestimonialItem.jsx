import { SmallQuoteIcon } from "@/assets/Icons";
import Image from "next/image";

const TestimonialItem = ({ fullName, position, comment, image }) => {
    return (
        <li>
            <div className="md:w-96 w-80 bg-[#39393A]/40 border border-[#39393A]/65 backdrop-blur-xl rounded-3xl md:px-7 px-4 md:py-8 py-5">

                <div className="flex items-center text-white tracking-wide">
                    <div className="flex-1 flex gap-2.5">

                        <Image width={48} height={48} src={image} className="w-12 h-12" alt="" />
                        <div className="flex flex-col justify-between">
                            <h5 className="capitalize md:text-base text-super-sm">{fullName}</h5>
                            <p className="text-super-xs font-extralight text-white/8">{position}</p>
                        </div>
                    </div>
                    <SmallQuoteIcon className="max-md:w-9 max-md:h-7" />
                </div>

                <p className="mt-5 text-white/85 md:text-sm text-xs max-md:leading-5 font-extralight tracking-wide line-clamp-3">
                    {comment}
                </p>

            </div>
        </li>
    );
}

export default TestimonialItem;