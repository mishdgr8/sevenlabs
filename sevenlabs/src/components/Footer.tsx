import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <hr className=""></hr>
      <footer className="flex items-start justify-around mt-12 mb-24  leading-10">
        <div className="">
          <Link className="  font-bold text-2xl" href="/">
            SEVEN<span className=" inline-block transform rotate-180">7</span>
            ABS
          </Link>
          <p>Web and Smart Contract development for Solana</p>
          <p>companies that truly care about quality.</p>
          <div className="mt-4">
            <button
              className=" bg-transparent text-white 
         px-4 py-0 rounded-[20px] flex items-center border border-solid-1"
            >
              Book a Call
              <FaArrowRight className="ml-[2px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <p>LINKS</p>
          <Link href="/">Home</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/">Blog</Link>
        </div>

        <div className="flex flex-col w-[6rem]">
          <p>SOCIALS</p>
          <Link
            href="https://x.com"
            className="flex items-center"
            target="_blank"
          >
            <FaXTwitter className="text-2xl mr-4" /> X
          </Link>
          <Link
            href="https://github.com/mishdgr8"
            className="flex items-center "
            target="_blank"
          >
            <FaGithub className="text-2xl mr-4" /> Github
          </Link>
          <Link
            href="mailto: mishaelmordi@gmail.com"
            className="flex items-center "
            target="_blank"
          >
            <FaEnvelope className="text-2xl mr-4" /> Email
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
