import React from "react";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

function ProjectsTech() {
  return (
    <div className="w-full  mx-auto my-10 ">
      <p className="flex justify-center mx-auto  font-general-medium text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
        Tech Stack
      </p>
      <div className="flex flex-row flex-wrap justify-center text-ternary-dark dark:text-ternary-light">
        {/* React */}
        <div className="w-1/5 h-24  mx-2  my-4 flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold  text-2xl">React</p>
            <FaReact size="30px" />
          </div>
        </div>
        {/* JavaScript */}
        <div className="w-1/5 h-24 mx-2  my-4 flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">Javascript</p>
            <IoLogoJavascript size="30px" />
          </div>
        </div>
        {/* Chakra UI */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold  text-2xl">React</p>
            <FaReact size="30px" />
          </div>
        </div>
        {/* Next.js */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">Next.Js</p>
            {/* <Nex color="white" size="30px" /> */}
          </div>
        </div>
        {/* TypeScript */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">Typescript</p>
            <SiTypescript size="30px" />
          </div>
        </div>
        {/* Tailwind CSS */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">TailwindCss</p>
            <SiTailwindcss size="30px" />
          </div>
        </div>
        {/* React Native */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">React Native</p>
            <FaReact size="30px" />
          </div>
        </div>
        {/* Git */}
        <div className="w-1/5 h-24 mx-2 my-4  flex rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-600 mx-auto  justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-2xl">GIT</p>
            <FaGitSquare size="30px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTech;
