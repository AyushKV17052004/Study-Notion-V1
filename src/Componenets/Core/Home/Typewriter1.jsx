

// import { useEffect, useState } from "react";

// const lines = [
//   "<!DOCTYPE html>",
//   "<html lang='en'>",
//   "<head>",
//   "<title>This is myPage</title>",
//   "</head>",
//   "<body>",
//   "<h1><a href='/'>Header</a></h1>",
//   "<nav>",
//   "<a href='/one'>One</a>",
//   "<a href='/two'>Two</a>",
//   "<a href='/three'>Three</a>",
//   "</nav>",
//   "</body>",
//   "</html>"
// ];


// const Typewriter1 = () => {
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




// export default Typewriter1;
import { useEffect, useState } from "react";

const lines = [
  "<!DOCTYPE html>",
  "<html lang='en'>",
  "<head>",
  "<title>This is myPage</title>",
  "</head>",
  "<body>",
  "<h1><a href='/'>Header</a></h1>",
  "<nav>",
  "<a href='/one'>One</a>",
  "<a href='/two'>Two</a>",
  "<a href='/three'>Three</a>",
  "</nav>",
  "</body>",
  "</html>"
];

const Typewriter1 = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  // Typing effect
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timeout = setTimeout(() => {
      if (charIndex < lines[currentLine].length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setCompletedLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 60);

    return () => clearTimeout(timeout);
  }, [charIndex, currentLine]);

  // Reset after completion
  useEffect(() => {
    if (currentLine === lines.length) {
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

export default Typewriter1;
