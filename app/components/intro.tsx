"use client";
import React from "react";
import Image from "next/image";
import memoji from "../../public/memoji.png";
import { motion } from "framer-motion";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const TextAnimatedGradient = () => {
    return (
      <span className="font-extrabold text-3xl inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-transparent">
        Hi I am Mahira Fakih
      </span>
    );
  };
  return (
    <section
      id="
    home"
    >
      <div className="flex items-center justify-center mt-36 sm:mt-40">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              alt="memoji"
              src={memoji}
              width={192}
              height={192}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <div className=" text-center gap-2">
        <motion.p
          className="text-center relative text-gray-600 dark:text-gray-50 text-xl mx-10 sm:mx-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TextAnimatedGradient />
          <br />I am a{" "}
          <span className="font-semibold">
            full-stack developer & Ui/Ux designer{" "}
          </span>{" "}
          proficient in front-end technologies like
          <span className="font-semibold"> ReactJS(NextJS), TailwindCSS</span>.
          I enjoy building sites and like to blend creativity with new
          technologies.
        </motion.p>
        <div className="flex flex-col  mt-5 sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="/#contact"
            className=" animate-background-shine dark:bg-[#818cf8] dark:hover:bg-[#5964cf] hover:bg-slate-500 shadow-sm shadow-black/10 cursor-pointer font-medium bg-gray-700 text-white  flex items-center py-3 px-7 gap-2 justify-center relative rounded-full "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {" "}
            Contact me here
            <GoArrowRight />{" "}
          </motion.a>
          <motion.a
            href="/Mahira Resume.pdf"
            download
            className=" hover:bg-slate-200 shadow-sm shadow-black/10 cursor-pointer font-medium bg-white text-black  flex items-center py-3 px-7 
          gap-2 justify-center relative rounded-full "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
            {" "}
            Download Resume
            <LuDownload />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mahirafakih/"
            className=" text-3xl  text-gray-900 bg-white p-3 gap-2 
            rounded-full  flex items-center shadow-sm shadow-black/10 justify-center relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
            }}
          >
            <FaLinkedin className="hover:scale-105" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mahirafakih/"
            className=" text-3xl text-gray-900 bg-white  shadow-sm shadow-black/10 p-3 gap-2  flex items-center
             justify-center relative rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
          >
            <FaGithubSquare className="hover:scale-105" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
