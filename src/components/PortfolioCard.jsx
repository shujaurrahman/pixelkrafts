import { ArrowIcon } from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ title, category, description, image, tags, path }) => {
    return (
        <div className="">
            <div
                className="bg-gradient-to-r from-[#E6DBFF] via-[#F6F6F6] via-45% to-[#D8D7FF] rounded-3xl md:px-9 px-5
                             2xl:pt-11 md:pt-14 pt-7 flex md:flex-row flex-col md:gap-4 gap-7 relative overflow-hidden"
            >

                <div className="md:pb-11 flex-1">

                    <span className="border border-c-purple-1 md:text-super-xs text-xs rounded-full py-2 px-4">{category}</span>

                    <h3 className="font-medium 2xl:text-2xl text-2.5xl md:my-4 mt-3.5">{title}</h3>

                    <p className="font-light md:text-base text-super-sm line-clamp-3">{description}</p>

                </div>

                <div className="pb-0 mb-0 flex flex-col justify-end">
                    <Image width={279} height={176} src={image} alt={`${title} web project`} className="2xl:w-[312px] lg:w-[380px] md:w-[300px] w-full" />
                </div>

                <Link href={`/portfolio/${path}`}>
                    <button
                        className="2xl:w-10 2xl:h-10 md:w-11 md:h-11 w-10 h-10 rounded-full flex items-center justify-center
                                 border border-white bg-white/40 absolute right-7 top-7 hover:bg-white/60 transition-all"
                    >
                        <ArrowIcon className="fill-black 2xl:w-6 2xl:h-6 w-7 h-7" />
                    </button>
                </Link>

            </div>

            <p className="mt-4 text-white/85 font-extralight md:leading-7 leading-6 md:text-base text-sm line-clamp-3">{description}</p>

            <div className="flex flex-wrap gap-2.5 text-white font-light mt-3.5 text-xs tracking-wide">
                {tags.map((tag, index) => (
                    <div key={index} className="border border-c-purple-1/80 rounded-full py-1.5 px-4">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioCard;