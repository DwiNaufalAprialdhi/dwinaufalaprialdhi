"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import imageProfile from "../../public/images/logoprofile.png";
import imageGithub from "../../public/images/github.png";
import imageInstagram from "../../public/images/instagram.png";
import imageTiktok from "../../public/images/tiktok.png";
import imageYoutube from "../../public/images/youtube.png";
import imageOverlay from "../../public/images/overlay.png";

const menus = [
  { url: "#Hero", text: "home" },
  { url: "#About", text: "about" },
  { url: "#Contact", text: "contact" },
];

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="fixed w-full bg-white z-50">
        <div className="py-3 px-4 mx-auto flex justify-between items-center md:px-[47px] lg:px-[96px] xl:px-[96px]">
          <div className="flex gap-6 items-center relative">
            <div className="flex gap-2 md:gap-4 md:px-3 items-center">
              <Link href="/">
                <Image
                  src={imageProfile}
                  alt="profile"
                  className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                />
              </Link>
              <Link href="/">
                <h2 className="font-semibold text-base text-text leading-[160%]">
                  It’s me
                </h2>
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-2 py-2 px-3">
                {menus.map((menu, index) => (
                  <li key={index} className="py-2 px-3">
                    <Link
                      href={menu.url}
                      className="text-text text-sm leading-[160%]"
                    >
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Overlay Start */}
            <nav
              className={`fixed bg-white h-screen bottom-0 ${
                show ? "left-0" : "-left-full"
              }  w-[308px] md:hidden transition-all duration-300 shadow-2xl`}
            >
              <ul className="flex flex-col px-4 pt-3 gap-6">
                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-2">
                    <Link href="/">
                      <Image
                        src={imageProfile}
                        alt="profile"
                        className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                      />
                    </Link>
                    <Link href="/">
                      <h2 className="font-semibold text-base text-text leading-[160%]">
                        It’s me
                      </h2>
                    </Link>
                  </div>
                  <Link href="/">
                    <button className="border border-brand bg-brand rounded-full py-2 px-6 text-sm text-white leading-[160%]">
                      Download CV
                    </button>
                  </Link>
                </div>
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.url}
                      className="text-text text-sm leading-[160%]"
                    >
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Image
                src={imageOverlay}
                alt=""
                className="absolute bottom-0 object-cover -z-10"
              />
            </nav>
            {/* Overlay End */}
          </div>
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden lg:flex lg:gap-6 ">
              <Link href="https://github.com/DwiNaufalAprialdhi" target="blank">
                <Image src={imageGithub} alt="Github" className="py-2" />
              </Link>
              <Link
                href="https://www.instagram.com/dwinaufalaprialdhi/"
                target="blank"
              >
                <Image src={imageInstagram} alt="Instagram" className="py-2" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dwinaufalaprialdhi"
                target="blank"
              >
                <Image src={imageTiktok} alt="Tiktok" className="py-2" />
              </Link>
              <Link
                href="https://www.youtube.com/@dwinaufal1777/featured"
                target="blank"
              >
                <Image src={imageYoutube} alt="YouTube" className="py-2" />
              </Link>
            </div>
            <Link href="/">
              <button className="border border-brand rounded-full py-2 px-6 text-sm text-text leading-[160%]">
                Download CV
              </button>
            </Link>
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="md:hidden p-2 cursor-pointer"
            >
              <Bars3Icon className="w-6 h-6"></Bars3Icon>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
