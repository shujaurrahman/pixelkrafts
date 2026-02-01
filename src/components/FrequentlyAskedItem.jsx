import { MinusIcon, PlusIcon } from "@/assets/Icons";

const FrequentlyAskedItem = ({ question, answer }) => {
    return (
        <div className="bg-c-blue-1/5 border border-c-blue-1/25 backdrop-blur-xl rounded-xl">

            <div className="flex items-center lg:gap-4 gap-2 justify-between px-5 py-4">

                <h6 className="flex-1 text-white tracking-wide lg:text-sm text-super-xs font-light">
                    {question}
                </h6>

                <button
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#39393A]/45 border border-c-purple-1/20"
                >
                    <PlusIcon className="w-5 h-5" />
                </button>

            </div>

        </div>
    );
}

export default FrequentlyAskedItem;