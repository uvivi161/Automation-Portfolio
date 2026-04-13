import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };


// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div
//           className='w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300'
//           key={technology.name}
//         >
//           <img
//             src={technology.icon}
//             alt={technology.name}
//             className='w-full h-full object-contain'
//           />
//         </div>
//       ))}
//     </div>
//   );
// };


const Tech = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group w-20 flex flex-col items-center justify-center
                       bg-tertiary p-3 rounded-xl
                       hover:scale-110 hover:shadow-lg
                       transition-all duration-300 cursor-pointer"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain mb-2
                         group-hover:rotate-6 transition-transform duration-300"
            />

            <p className="text-[11px] text-center text-white opacity-80 group-hover:opacity-100">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
