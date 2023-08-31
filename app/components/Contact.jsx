import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <>
      <main
        id="Contact"
        className="px-4 md:px-[47px] lg:px-[96px] xl:px-[96px]"
      >
        <div className="py-[116px] px-[87px] flex flex-col justify-center items-center gap-8">
          <h1 className="text-center text-black font-light text-2xl leading-[102%]">
            So, what are you waiting for?
          </h1>
          <Link href="/">
            <button className="bg-brand py-2 px-6 rounded-full text-white text-sm leading-[160%]">
              Let’s start
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Contact;
