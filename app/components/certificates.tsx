import React from "react";

import Image from "next/image";
import udemy from "../../public/udemy.png";
import aws from "../../public/aws.png";
import hackathon from "../../public/hackathon.jpeg";
import unstop from "../../public/unstop.png";
import futuretech from "../../public/futuretech.png";

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-16">
      <h1 className="text-2xl text-gray-600 font-semibold text-center mt-20 dark:text-gray-50">
        My Certificates
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 text-gray-600  ">
        {" "}
        <div className="card  bg-white  dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale dark:bg-opacity-10">
          {" "}
          <figure className="px-5 pt-5 relative">
            <Image
              alt="aws-certificate"
              src={aws}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center ">
            <h2 className="card-title ">AWS Foundation Course</h2>
            <p>AWS</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="card bg-white dark:bg-opacity-10 dark:border dark:border-white/20 dark:text-white w-80 shadow-xl hover:scale-105 transition-hover-scale">
          {" "}
          <figure className="px-5 pt-5">
            <Image
              alt="udemy-certificate"
              src={udemy}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web Development Course</h2>
            <p> Udemy</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="card  bg-white dark:bg-opacity-10 dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale">
          {" "}
          <figure className="px-5 pt-5">
            <Image
              alt="hackathon-certificate"
              src={hackathon}
              width={290}
              height={290}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hyphen Ideathon</h2>
            <p> Google Developer Student Club</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="card  bg-white dark:bg-opacity-10 dark:border dark:border-white/20 dark:text-white w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale">
          {" "}
          <figure className="px-5 pt-5">
            <Image
              alt="hackathon-certificate"
              src={unstop}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hyphen Ideathon</h2>
            <p>IIT Kottayam</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="card  bg-white dark:bg-opacity-10 dark:border dark:border-white/20 dark:text-white w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale">
          {" "}
          <figure className="px-5 pt-5">
            <Image
              alt="hackathon-certificate"
              src={futuretech}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center">
            <h2 className="card-title">Future Tech Al Hackathon 2024</h2>
            <p>Growbinar</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}
