"use client";
import React from "react";
import { sendEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#ede9fe] dark:bg-opacity-20 dark:text-white text-center justify-center items-center mt-20 flex flex-col  h-96 gap-2  border border-black/5 rounded-lg p-8 scroll-mt-28"
    >
      <h1 className="text-2xl font-semibold text-gray-600 dark:text-white">
        Contact me
      </h1>
      <p className="text-sm">
        Please contact directly through{" "}
        <a className="underline" href="mailto:mahirafakih17@gmail.com">
          mahirafakih17@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="flex flex-col gap-3 text-center items-center"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <label className="  mt-6 border-black/15 input dark:border-white/90  flex items-center gap-2 w-96 dark:bg-transparent dark: border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 "
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            type="email"
            required
            className=" "
            placeholder="Email"
            color="none"
            maxLength={500}
          />
        </label>
        <textarea
          name="message"
          required
          className="textarea  border-black/15 w-96 h-32 dark:bg-transparent  dark:border-white/90"
          placeholder="Write your message here..."
          maxLength={5000}
        ></textarea>

        <button
          type="submit"
          className="group relative inline-flex py-2  w-36 items-center justify-center
       overflow-hidden rounded-full bg-gray-700 border border-black/5 font-semibold
        text-white duration-500 dark:bg-[#818cf8] "
        >
          <div
            className="translate-x-0 opacity-100 transition
             group-hover:-translate-x-[150%] group-hover:opacity-0"
          >
            Submit
          </div>
          <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </form>
    </section>
  );
}
