"use client";
import { motion } from "framer-motion";
import Trial from "@/components/Trial";
import { FaRegClock } from "react-icons/fa";
import { VscRemoteExplorer } from "react-icons/vsc";

// Your component logic here
export default function Page() {
  return (
    <main className="flex  flex-col items-center  h-auto mb-6 ">
      <div className=" w-full  text-center justify-between py-0 px-12 leading-7">
        <div>
          <Trial text={"Join our team"} solana={undefined} />
          <div className="w-full">
            <hr></hr>
          </div>
          <p className="mt-8">
            Join us to elevate your craft while building the platforms{" "}
          </p>
          <p>that define tomorrow's Solana landscape.</p>
        </div>

        <div className="my-6 text-2xl font-extrabold">
          <h3>Technical Roles</h3>
        </div>
      </div>
      <a href="https://olcbqq2xzck.typeform.com/to/OtyyoFIN" target="_blank">
        <motion.div
          className=" card flex items-center justify-center border
       border-solid rounded-[20px]   max-w-fit"
          whileHover={{ scale: 0.99 }}
        >
          <div className="flex flex-col w-[28rem] h-auto bg-dark p-6 text-white ">
            <h3 className="text-xl font-bold pb-2">Full Stack Developer</h3>
            <p className="">
              As a Full Stack Developer at SevenLabs, you will be working with
              our development team to develop and maintain applications,
              infrastructure and smart contracts for Solana projects and
              companies.
            </p>
            <div className="flex gap-5 py-2">
              <p className="flex items-center justify-center gap-1 font-bold">
                <FaRegClock />
                Full Time
              </p>
              <p className="flex items-center justify-center gap-1 font-bold">
                <VscRemoteExplorer /> Remote, Worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </a>

      <div className="my-6 text-xl font-extrabold">
        <h3>Non-technical Roles</h3>
      </div>
      <div
        className=" card flex items-start justify-center border
       border-solid rounded-[20px]   max-w-fit mb-24"
      >
        <div className="flex flex-col w-[28rem] h-auto bg-dark p-6 text-white ">
          <p className="">
            We don’t have any non-technical position open as of now - if you’d
            be interested in joining us, check us out later this year.
          </p>
        </div>
      </div>
    </main>
  );
}
