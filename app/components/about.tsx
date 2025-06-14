"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="text-center m-8 sm:mx-28 mt-0 scroll-mt-40 dark:text-gray-100"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.155 }}
      id="about"
    >
      <h1 className="font-bold text-2xl mt-8 text-gray-600 dark:text-gray-50 ">
        About Me
      </h1>
      <p className="mt-5   sm:mx-32 text-xl">
        Skilled and driven
        <span className="underline">
          fourth-year Computer Engineering student
        </span>
        with three months of internship experience, bringing hands-on exposure to real-world software development environments. Experienced in designing, developing, and maintaining web applications, blending creativity with strong technical expertise. Proficient in web development technologies and design tools such as {" "}
        <span className="text-[#fda4af] font-semibold"> Figma, </span>
        <span className="text-[#fda4af] font-semibold">
          HTML, CSS, JavaScript
        </span>{" "}
        and{" "}
        <span className="text-[#fda4af] font-semibold ">
          React(Next.js), Node.js
        </span>{" "}
        alongside a solid foundation in core coding languages like{" "}
        <span className="text-[#a5b4fc] font-semibold ">
          Java and Python.
        </span>{" "}
        Collaborative team player with excellent communication and
        problem-solving abilities.
      </p>
    </motion.section>
  );
}
