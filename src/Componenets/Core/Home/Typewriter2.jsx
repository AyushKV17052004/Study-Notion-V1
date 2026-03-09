

import { useEffect, useState } from "react";

const lines = [
  'import React from "react";',
  'import CTAButton from "./Button";',
  'import TypeAnimation from "react-type";',
  'import { FaArrowRight } from "react-icons/fa";',
  ' ',
  'const Home = () => {',
  '  return (',
  '    <div>Home</div>',
  '  )',
  '}',
  '',
  'export default Home;'
];



// const Typewriter2 = () => {
//   const [currentLine, setCurrentLine] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [completedLines, setCompletedLines] = useState([]);

//   useEffect(() => {
//     if (currentLine >= lines.length) return;

//     const timeout = setTimeout(() => {
//       if (charIndex < lines[currentLine].length) {
//         setCharIndex(charIndex + 1);
//       } else {
//         setCompletedLines((prev) => [...prev, lines[currentLine]]);
//         setCurrentLine(currentLine + 1);
//         setCharIndex(0);
//       }
   
//     }, 60);

//     return () => clearTimeout(timeout);
//   }, [charIndex, currentLine]);
//   if (currentLine >= lines.length) {
//   setTimeout(() => {
//     setCompletedLines([]);
//     setCurrentLine(0);
//     setCharIndex(0);
  
//   }, 1000);
//   return;
// }


//   return (
//     <div className="select-none">
//       {completedLines.map((line, index) => (
//         <h1 key={index}> {line}</h1>
//       ))}

//       {currentLine < lines.length && (
//         <h1>
//           {lines[currentLine].substring(0, charIndex)}
//           <span className="cursor">|</span>
//         </h1>
//       )}
//     </div>
//   );
// };

const Typewriter2 = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timeout = setTimeout(() => {
      if (charIndex < lines[currentLine].length) {
        setCharIndex((c) => c + 1);
      } else {
        setCompletedLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((l) => l + 1);
        setCharIndex(0);
      }
    }, 60);

    return () => clearTimeout(timeout);
  }, [charIndex, currentLine]);

  useEffect(() => {
    if (currentLine >= lines.length) {
      const timer = setTimeout(() => {
        setCompletedLines([]);
        setCurrentLine(0);
        setCharIndex(0);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="select-none">
      {completedLines.map((line, index) => (
        <h1 key={index}>{line}</h1>
      ))}

      {currentLine < lines.length && (
        <h1>
          {lines[currentLine].substring(0, charIndex)}
          <span className="cursor">|</span>
        </h1>
      )}
    </div>
  );
};





export default Typewriter2;
