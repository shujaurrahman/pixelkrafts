"use client";
import { useState, useEffect } from "react";
import { StarsIcon } from "@/assets/Icons";
import SectionLayout from "./SectionLayout";
import { getProcesses } from "../../lib/sanity.client";

const ProcessSection = () => {
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        const fetchProcesses = async () => {
            const data = await getProcesses();
            setProcesses(data || []);
        };
        fetchProcesses();
    }, []);

    if (processes.length === 0) return null;

    return (
        <SectionLayout
            icon={<StarsIcon className="fill-c-purple-1 w-6 h-6" />}
            lineStyles="bg-gradient-to-b from-c-purple-1 to-c-blue-1"
        >
            {({ inView }) => (
                <div className="w-full md:pb-36 pb-32">
                    <h3 className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]">
                        Our Simple, Smart, and <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-c-purple-1 from-35% to-c-purple-1/50">Scalable Process</span>
                    </h3>
                    <p className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight mb-14 max-w-3xl">
                        Every step of our process is made to be simple, effective, and easy to follow. As your business expands, we scale smoothly, construct with quality, and plan strategically.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {processes.map((process, index) => (
                            <div 
                                key={process._id}
                                className={`bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8 transition-all duration-700 ${
                                    inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl font-bold text-c-purple-1/50">{process.step}</span>
                                    <h4 className="text-2xl font-semibold text-white">{process.title}</h4>
                                </div>
                                <p className="text-white/75 mb-6 leading-relaxed">{process.description}</p>
                                <ul className="space-y-2">
                                    {process.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-white/60 text-sm">
                                            <span className="w-1.5 h-1.5 bg-c-purple-1 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </SectionLayout>
    );
}

export default ProcessSection;
