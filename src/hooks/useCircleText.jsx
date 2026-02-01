// "use client";
// const { useState, useEffect } = require("react");

// import degreeToRadian from "../utilities/DegreeToRadian";


// const useCircleText = (text) => {
//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         const radius = 280;

//         const startAngle = -90;
//         const endAngle = 270;
//         const angleRange = endAngle - startAngle;

//         const deltaAngle = angleRange / text.length;
//         let currentAngle = startAngle;

//         const chars = text.split("").map((char, index) => {
//             const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle - 0)));
//             const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle - 0)));

//             const transform = `translate(${xPos}px, ${yPos}px)`;
//             const rotate = `rotate(${index * deltaAngle}deg)`;

//             currentAngle += deltaAngle;

//             return {
//                 char,
//                 style: {
//                     position: 'absolute',
//                     lineHeight: '0px',
//                     fontSize: '50px',
//                     transform: `${transform} ${rotate}`
//                 }
//             };
//         });

//         setCharacters(chars);
//     }, [text]);

//     return characters;
// };

// export default useCircleText;



import { useState, useEffect } from "react";
import degreeToRadian from "../utilities/DegreeToRadian";

const useCircleText = (text, radius) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const startAngle = -90;
        const angleStep = 360 / text.length;

        const chars = text.split("").map((char, index) => {
            const angle = startAngle + index * angleStep;
            const xPos = radius * Math.cos(degreeToRadian(angle));
            const yPos = radius * Math.sin(degreeToRadian(angle));

            const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle + 90}deg)`;

            return {
                char,
                style: {
                    position: 'absolute',
                    transform,
                    transformOrigin: 'center',
                    fontSize: '15px',
                    fontWeight: 'light',
                }
            };
        });

        setCharacters(chars);
    }, [text, radius]);

    return characters;
};

export default useCircleText;






// "use client";
// const { useState, useEffect, useRef } = require("react");
// import degreeToRadian from "../utilities/DegreeToRadian";

// const useCircleText = (text, containerSize) => {
//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         const radius = containerSize / 2; // شعاع بر اساس اندازه والد

//         const startAngle = -90;
//         const endAngle = 270;
//         const angleRange = endAngle - startAngle;

//         const deltaAngle = angleRange / text.length;
//         let currentAngle = startAngle;

//         const chars = text.split("").map((char, index) => {
//             const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
//             const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

//             const transform = `translate(${xPos}px, ${yPos}px)`;
//             const rotate = `rotate(${index * deltaAngle}deg)`;

//             currentAngle += deltaAngle;

//             return {
//                 char,
//                 style: {
//                     position: 'absolute',
//                     lineHeight: '0px',
//                     fontSize: `${containerSize / 10}px`, // اندازه فونت بر اساس اندازه والد
//                     transform: `${transform} ${rotate}`
//                 }
//             };
//         });

//         setCharacters(chars);
//     }, [text, containerSize]);

//     return characters;
// };

// export default useCircleText;
