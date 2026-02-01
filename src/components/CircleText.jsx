// import useCircleText from "@/hooks/useCircleText";

// const CircleText = ({ text }) => {
//     const characters = useCircleText(text);

//     return (
//         <div
//             className="w-[560px] h-[560px] relative uppercase font-semibold text-white text-3xl rounded-full 
//              animate-clockwiseRotation hover:animate-pause"
//             id="circle-text"
//         >
//             <div className="relative left-[-20px]">
//                 {characters.map((char, index) => (
//                     <span style={char.style} key={index}>
//                         {char.char}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default CircleText;




import { useState, useEffect, useRef } from "react";
import useCircleText from "@/hooks/useCircleText";

const CircleText = ({ text }) => {
    const [containerSize, setContainerSize] = useState(110); // Default size
    const containerRef = useRef(null);

    useEffect(() => {
        // Update size based on the actual parent size
        const handleResize = () => {
            if (containerRef.current) {
                const size = containerRef.current.offsetWidth;
                setContainerSize(size);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial execution

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const radius = containerSize / 2;
    const characters = useCircleText(text, radius);

    return (
        <div
            ref={containerRef}
            className="w-[110px] h-[110px] relative uppercase font-semibold text-white text-3xl rounded-full 
             animate-clockwiseRotation hover:animate-pause"
            id="circle-text"
        >
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                {characters.map((char, index) => (
                    <span style={char.style} key={index}>
                        {char.char}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CircleText;



// import { useState, useEffect, useRef } from "react";
// import useCircleText from "@/hooks/useCircleText";
// import { ScrollTriggerIcon } from "@/assets/Icons";

// const CircleText = ({ text }) => {
//     const [containerSize, setContainerSize] = useState(100); // اندازه پیش‌فرض
//     const containerRef = useRef(null);

//     useEffect(() => {
//         // به‌روزرسانی اندازه با توجه به اندازه واقعی والد
//         const handleResize = () => {
//             if (containerRef.current) {
//                 const size = containerRef.current.offsetWidth;
//                 setContainerSize(size);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize(); // اجرا برای اولین بار

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const characters = useCircleText(text, containerSize);

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-[100px] h-[100px] uppercase font-semibold text-white text-3xl rounded-full
//              animate-clockwiseRotation hover:animate-pause"
//             id="circle-text"
//         >
//             <div className="relative left-[-20px]">
//                 {characters.map((char, index) => (
//                     <span style={char.style} key={index}>
//                         {char.char}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CircleText;
