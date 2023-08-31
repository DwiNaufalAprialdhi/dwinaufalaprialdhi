import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import imageBackground1 from "../public/images/background1.png";
import About from "./components/About";
import Contact from "./components/Contact";
import { HiOutlineChevronUp } from "react-icons/hi";
import Link from "next/link";

function Home() {
  return (
    <>
      <Image
        src={imageBackground1}
        alt=""
        className="absolute top-0 right-0 -z-10"
      />
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <div className="fixed bottom-3 right-3 cursor-pointer bg-brand rounded-full p-1">
        <Link href="#Hero">
          <HiOutlineChevronUp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
        </Link>
      </div>
    </>
  );
}

export default Home;
