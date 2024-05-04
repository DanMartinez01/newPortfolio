// import React from "react";
// import { FaReact, FaGitSquare } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript, SiTailwindcss } from "react-icons/si";

// function ProjectsTech() {
//   return (
//     <div className="w-full  mx-auto my-10 ">
//       <p className="flex justify-center mx-auto  font-general-medium text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
//         Tech Stack
//       </p>
//       <div className="flex flex-row flex-wrap justify-center text-ternary-dark dark:text-ternary-light">
//         <div className="w-1/5 h-24  mx-2  my-4 flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold  text-2xl">React</p>
//             <FaReact size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2  my-4 flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">Javascript</p>
//             <IoLogoJavascript size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold  text-2xl">React</p>
//             <FaReact size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">Next.Js</p>
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">Typescript</p>
//             <SiTypescript size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">TailwindCss</p>
//             <SiTailwindcss size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">React Native</p>
//             <FaReact size="30px" />
//           </div>
//         </div>

//         <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
//           <div className="flex flex-col items-center justify-center">
//             <p className="font-semibold text-2xl">GIT</p>
//             <FaGitSquare size="30px" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectsTech;

import React from "react";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import techStack from "./techStack.json";

function ProjectsTech() {
  return (
    <div className="w-full mx-auto my-10">
      <p className="text-center font-general-medium text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
        Tech Stack
      </p>
      <div className="flex flex-wrap justify-center text-ternary-dark dark:text-ternary-light">
        {techStack.map((tech, index) => (
          <div
            key={index}
            // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  px-2 py-4 flex justify-center"
            className=" w-full mt-10  px-2 py-4 sm:w-1/2 md:w-1/3 lg:w-1/4  flex justify-center my-2  rounded-lg tracking-wide text-white"
          >
            <div className="w-full flex justify-center max-w-xs bg-gray-200 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="px-2 py-4">
                <p className="text-lg font-semibold text-black dark:text-white">
                  {tech.name}
                </p>
                {/* <div className="flex justify-center items-center">
                  {tech.icon === "FaReact" && <FaReact size="30px" />}
                  {tech.icon === "IoLogoJavascript" && (
                    <IoLogoJavascript size="30px" />
                  )}
                  {tech.icon === "SiTypescript" && <SiTypescript size="30px" />}
                  {tech.icon === "SiTailwindcss" && (
                    <SiTailwindcss size="30px" />
                  )}
                  {tech.icon === "FaGitSquare" && <FaGitSquare size="30px" />}
                  
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsTech;
