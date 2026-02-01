"use client"
import { MinusIcon, PlusIcon } from "@/assets/Icons";
import { useState } from "react";

const FrequentlyAskedItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-c-blue-1/5 border backdrop-blur-xl rounded-xl transition-all duration-300 ${isOpen ? 'border-c-purple-1/50 bg-c-purple-1/10' : 'border-c-blue-1/25'}`}>

            <div 
                className="flex items-center lg:gap-4 gap-2 justify-between px-5 py-4 cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >

                <h6 className={`flex-1 tracking-wide lg:text-sm text-super-xs font-light transition-colors ${isOpen ? 'text-c-purple-1' : 'text-white'}`}>
                    {question}
                </h6>

                <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-c-purple-1 border-c-purple-1 rotate-180' : 'bg-[#39393A]/45 border-c-purple-1/20'}`}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                >
                    {isOpen ? (
                        <MinusIcon className="w-5 h-5 text-white" />
                    ) : (
                        <PlusIcon className="w-5 h-5 text-white" />
                    )}
                </button>

            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {answer && (
                    <div className="px-5 pb-5 pt-0">
                        <p className="text-white/80 tracking-wide lg:text-sm text-super-xs font-extralight leading-relaxed">
                            {answer}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}

export default FrequentlyAskedItem;