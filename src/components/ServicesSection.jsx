import { ArrowIcon, BrandingIcon, CircleArrowIcon, GlobalIcon, RocketIcon, ToolsIcon } from "@/assets/Icons";
import Link from "next/link";
import SectionLayout from "./SectionLayout";
import Image from "next/image";

const ServicesSection = () => {
    return (
        <SectionLayout
            icon={<RocketIcon className="stroke-c-purple-1 md:w-7 md:h-7 w-6 h-6" />}
            lineStyles="bg-gradient-to-b from-c-purple-1 to-c-blue-1"
        >
            {({ inView }) => (
                <div className="w-full md:pb-36 pb-32">
                    <h3
                        className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]"
                    >
                        Transforming Ideas into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-purple-1 from-35% to-c-purple-1/50">Digital Excellence</span>
                    </h3>
                    <div
                        className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4"
                    >
                        <p
                            className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight flex-1"
                        >
                            Unlock your business&apos;s potential with our expert digital solutions. From cutting-edge web design to innovative app
                            development, we provide tailored services that drive growth and deliver results.
                        </p>
                        <button
                            className="focus:outline-none bg-white text-black rounded-full font-medium px-6 xl:py-3 md:py-2.5 py-2 md:text-super-sm text-super-xs"
                        >
                            Get Started
                            <CircleArrowIcon className="ml-1.5 inline xl:w-6 xl:h-6 max-md:w-5 h-5 fill-white" fillColor="black" strokeColor="black" />
                        </button>
                    </div>
                    <div
                        className={`grid 3xl:grid-cols-5 2xl:grid-cols-5 xl:grid-cols-6 max-xl:grid-cols-6 md:gap-7 gap-8 mt-14 transition-all duration-850 ${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
                        {/* //! START WebDev Card */}
                        <div
                            className="relative bg-c-blue-1 rounded-3xl py-9 xl:py-14 max-xl:py-14 md:py-10 max-md:py-7 
                       md:px-8 px-5 3xl:col-span-3 2xl:col-span-3 xl:col-span-full max-xl:col-span-6 grid lg:grid-cols-2 grid-cols-5 overflow-hidden"
                        >
                            <div className="relative max-lg:z-[3] flex flex-col justify-between lg:col-span-1 md:col-span-3 col-span-full">
                                <div>
                                    <div
                                        className="md:w-[3.25rem] md:h-[3.25rem] w-12 h-12 bg-white/40 border border-white/80 rounded-full flex items-center justify-center md:mb-6 mb-3"
                                    >
                                        <GlobalIcon className="max-md:w-[26px] max-md:h-[26px]" />
                                    </div>
                                    <h2 className="md:text-2.5xl text-2xl text-white tracking-wide md:mb-4 mb-2.5">Website Dev</h2>
                                    <p className="text-white font-extralight md:text-base text-sm tracking-wide md:mb-9 mb-6">
                                        Crafting user-centric websites with seamless navigation and clean design, tailored to meet your business goals
                                    </p>
                                </div>
                                <Link href="/" className="flex">
                                    <span className="underline underline-offset-4 text-white font-light md:text-super-base">Start with us</span>
                                    <ArrowIcon className="fill-white *:inline w-7 h-7" />
                                </Link>
                            </div>
                            <Image width={300} height={270} src="/images/web-develop-vector.png" alt=""
                                className="absolute right-0 bottom-0 max-lg:w-[300px] max-lg:h-[270px] max-md:w-[230px] max-md:h-[200px]
                            max-lg:opacity-85 max-md:opacity-60"
                            />
                        </div>
                        {/* //? END WebDev Card */}
                        {/* //! START Branding Card */}
                        <div
                            className="bg-c-black-2 rounded-3xl 3xl:col-span-2 2xl:col-span-2 xl:col-span-3 lg:col-span-3 max-lg:col-span-full flex gap-1.5 overflow-hidden relative"
                        >
                            <div className="py-9 xl:py-14 max-xl:py-14 md:py-10 max-md:py-7 md:px-8 px-5 flex flex-col justify-between relative z-[3]">
                                <div>
                                    <div className="md:w-[3.25rem] md:h-[3.25rem] w-12 h-12 bg-white/40 border border-white/80 rounded-full flex items-center justify-center mb-6">
                                        <BrandingIcon className="max-md:w-[30px] max-md:h-[30px]" />
                                    </div>
                                    <h2 className="md:text-2.5xl text-2xl text-white tracking-wide md:mb-4 mb-2.5">Branding</h2>
                                    <p className="text-white font-extralight md:text-base text-sm tracking-wide md:mb-9 mb-6">
                                        Creating a powerful and memorable brand identity that resonates with your audience, helping you stand out in a crowded market
                                    </p>
                                </div>
                                <Link href="/" className="flex">
                                    <span className="underline underline-offset-4 text-white font-light md:text-super-base">Start with us</span>
                                    <ArrowIcon className="fill-white *:inline w-7 h-7" />
                                </Link>
                            </div>
                            <Image width={300} height={270} src="/images/branding-vector2.png" alt=""
                                className="pt-9 absolute bottom-0 md:right-0 -right-6 2xl:w-[215px] 2xl:h-[280px] max-md:w-[160px] opacity-85"
                            />
                        </div>
                        {/* //? END Branding Card */}
                        {/* //! START Branding Card */}
                        <div
                            className="bg-c-black-2 rounded-3xl 3xl:col-span-2 2xl:col-span-2 xl:col-span-3 lg:col-span-3 max-lg:col-span-full flex gap-1.5 overflow-hidden relative"
                        >
                            <div className="py-9 xl:py-14 max-xl:py-14 md:py-10 max-md:py-7 md:px-8 px-5 flex flex-col justify-between relative z-[3]">
                                <div>
                                    <div className="md:w-[3.25rem] md:h-[3.25rem] w-12 h-12 bg-white/40 border border-white/80 rounded-full flex items-center justify-center mb-6">
                                        <BrandingIcon className="max-md:w-[30px] max-md:h-[30px]" />
                                    </div>
                                    <h2 className="md:text-2.5xl text-2xl text-white tracking-wide md:mb-4 mb-2.5">Branding</h2>
                                    <p className="text-white font-extralight md:text-base text-sm tracking-wide md:mb-9 mb-6">
                                        Creating a powerful and memorable brand identity that resonates with your audience, helping you stand out in a crowded market
                                    </p>
                                </div>
                                <Link href="/" className="flex">
                                    <span className="underline underline-offset-4 text-white font-light md:text-super-base">Start with us</span>
                                    <ArrowIcon className="fill-white *:inline w-7 h-7" />
                                </Link>
                            </div>
                            <Image width={300} height={270} src="/images/branding-vector2.png" alt=""
                                className="pt-9 absolute bottom-0 md:right-0 -right-6 2xl:w-[215px] 2xl:h-[280px] max-md:w-[160px] opacity-85"
                            />
                        </div>
                        {/* //? END Branding Card */}
                        {/* //! START UI Card */}
                        <div
                            className="relative bg-c-purple-1 rounded-3xl 3xl:col-span-3 2xl:col-span-3 xl:col-span-full max-xl:col-span-full flex gap-1.5 overflow-hidden"
                        >
                            <div
                                className="relative max-lg:z-[3] py-9 xl:py-14 max-xl:py-14 md:py-10 max-md:py-7 md:px-8 px-5 flex flex-col justify-between"
                            >
                                <div>
                                    <div
                                        className="md:w-[3.25rem] md:h-[3.25rem] w-12 h-12 bg-white/40 border border-white/80 rounded-full flex
                                    items-center justify-center mb-6"
                                    >
                                        <ToolsIcon className="max-md:w-[26px] max-md:h-[26px]" />
                                    </div>
                                    <h2 className="md:text-2.5xl text-2xl text-white tracking-wide md:mb-4 mb-2.5">UI/UX Design</h2>
                                    <p className="text-white font-extralight md:text-base text-sm tracking-wide md:mb-9 mb-6">
                                        Designing intuitive and engaging user interfaces that provide seamless experiences, ensuring satisfaction and retention for your users
                                    </p>
                                </div>
                                <Link href="/" className="flex">
                                    <span className="underline underline-offset-4 text-white font-light md:text-super-base">Start with us</span>
                                    <ArrowIcon className="fill-white *:inline w-7 h-7" />
                                </Link>
                            </div>
                            <Image width={320} height={270} src="/images/ui-design-vector2.png" alt=""
                                className="pt-9 lg:relative absolute lg:-bottom-11 lg:-right-2 max-md:-right-14 max-md:-bottom-4 w-[400px] max-lg:w-[320px] max-lg:h-[280px] max-md:w-[260px] 
                           max-md:h-[240px] max-lg:right-0 max-lg:bottom-0 max-lg:opacity-80 max-md:opacity-60"
                            />
                        </div>
                        {/* //? END UI Card */}
                    </div>
                </div>
            )}
        </SectionLayout >
    );
}

export default ServicesSection;