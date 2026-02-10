"use client"
import { CircleArrowIcon, GlobalToolsIcon } from "@/assets/Icons";
import SectionLayout from "./SectionLayout";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedPortfolio, urlFor } from "../../lib/sanity.client";

const OurWorkSection = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPortfolio() {
            try {
                const data = await getFeaturedPortfolio();
                if (data && data.length > 0) {
                    // Transform Sanity data to match card format
                    const transformed = data.map(item => ({
                        category: item.category === 'website' ? 'Websites' : 
                                  item.category === 'ecommerce' ? 'E-Commerce' :
                                  item.category === 'app' ? 'Mobile Apps' :
                                  item.category === 'fullstack' ? 'Full Stack' :
                                  item.category === 'ai' ? 'AI Solutions' : 
                                  item.category === 'design' ? 'UI/UX Design' : 'Development',
                        title: item.title,
                        description: item.shortDescription || '',
                        image: item.mainImage ? urlFor(item.mainImage).width(400).height(250).url() : null,
                        tags: item.technologies || [],
                        path: item.slug?.current || item._id
                    }));
                    setPortfolioItems(transformed);
                }
            } catch (error) {
                console.error('Error fetching portfolio:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPortfolio();
    }, []);

    const displayItems = portfolioItems;

    if (!loading && displayItems.length === 0) return null;

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
                       Our Digital Creations
 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ac8ef2] from-35% to-[#ac8ef2]/50"> & Project Portfolio</span>
                    </h3>
                    <div className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4">
                        <p
                            className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight flex-1"
                        >
From strategy and concept through design and deployment, our digital projects highlight the expertise, innovation, and technical excellence of our team. Each project is carefully crafted to deliver tailored digital solutions that align with our clients’ business objectives, enhance user experience, and drive measurable results.                        </p>
                        <Link href="/portfolio">
                            <button
                                className="focus:outline-none bg-white text-black rounded-full font-medium px-6 xl:py-3 md:py-2.5 py-2 md:text-super-sm text-super-xs"
                            >
                                All Portfolio
                                <CircleArrowIcon className="ml-1.5 inline xl:w-6 xl:h-6 max-md:w-5 h-5 fill-white" fillColor="black" strokeColor="black" />
                            </button>
                        </Link>
                    </div>

                    <div
                        className={`grid 2xl:grid-cols-2 gap-x-10 2xl:gap-y-12 gap-16 mt-16 transition-all duration-850
                         ${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
                    >
                        {loading ? (
                            <div className="col-span-2 flex justify-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-c-purple-1"></div>
                            </div>
                        ) : (
                            displayItems.map((item, index) => (
                                <PortfolioCard key={index} {...item} />
                            ))
                        )}
                    </div>

                </div>

            )}
        </SectionLayout >
    );
}

export default OurWorkSection;