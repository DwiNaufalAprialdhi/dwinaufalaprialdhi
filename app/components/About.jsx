import React from "react";
import Image from "next/image";
import imageProfile from "../../public/images/logoprofile.png";
import imageBackground2 from "../../public/images/background2.png";
import imageManager1 from "../../public/images/manager1.png";
import imageManager2 from "../../public/images/manager2.png";
import imageManager3 from "../../public/images/manager3.png";
import imageManager4 from "../../public/images/manager4.png";
import imageManager5 from "../../public/images/manager5.png";
import imageManager6 from "../../public/images/manager6.png";

function About() {
  return (
    <>
      <main
        id="About"
        className="mb-9 px-4 md:px-[47px] lg:px-[96px] xl:px-[96px] relative"
      >
        <Image
          src={imageBackground2}
          alt=""
          className="absolute -top-[216px] right-0 -z-10 lg:left-0 xl:rotate-180"
        />
        <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between lg:gap-72">
          <div className="flex justify-between items-center md:justify-normal md:items-baseline md:relative lg:w-full">
            <div className="flex flex-col font-light text-[33px] text-text leading-[120%] md:text-7xl md:leading-[102%]">
              <span>It’s me</span>
              <span>Dwi Naufal</span>
              <span>Aprialdhi</span>
            </div>
            <Image
              src={imageProfile}
              alt="Dwi Naufal Aprialdhi"
              className="w-14 h-14 rounded-full md:absolute md:left-56 md:top-3"
            />
          </div>
          <div className="flex flex-col gap-6 text-base text-text leading-[160%] md:text-xl">
            <span>
              I like to code and keep it simple, try something new, and learn
              more. I think sharing knowledge is the best practice to improve my
              skills, and I try to do it.
            </span>
            <span>
              I am currently the Chief Technology Officer at dSociety, a startup
              to help students prepare for their exams.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-24 md:grid md:grid-cols-12 lg:justify-center lg:items-center">
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager1} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Adison Westervelt
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Senior Proogram Manager at Microsoft
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Hendrerit diam a, morbi tristique egestas commodo ullamcorper
                ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit.
                Venenatis aliquam tellus viverra nullam. Consequat cras ac donec
                nunc.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager2} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Adison Westervelt
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Senior Proogram Manager at Microsoft
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Hendrerit diam a, morbi tristique egestas commodo ullamcorper
                ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit.
                Venenatis aliquam tellus viverra nullam. Consequat cras ac donec
                nunc.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager3} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Marilyn Siphron
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Remix and React Training
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Libero in egestas pellentesque purus, nullam. Consectetur
                commodo odio interdum neque ullamcorper sit.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager4} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Marilyn Siphron
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Remix and React Training
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Tellus mauris adipiscing dignissim sodales. Id dui venenatis
                mollis faucibus.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager5} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Adison Westervelt
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Senior Proogram Manager at Microsoft
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Hendrerit diam a, morbi tristique egestas commodo ullamcorper
                ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit.
                Venenatis aliquam tellus viverra nullam. Consequat cras ac donec
                nunc.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-[23px] md:col-span-6 lg:col-span-4">
            <div className="p-6 flex flex-col w-full gap-6">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src={imageManager6} alt="" />
                </div>
                <div className="flex flex-col gap-1 truncate">
                  <h2 className="text-base text-text leading-[150%]">
                    Adison Westervelt
                  </h2>
                  <p className="text-sm text-brand leading-[150%] truncate">
                    Senior Proogram Manager at Microsoft
                  </p>
                </div>
              </div>
              <p className="text-sm text-text leading-[160%]">
                Hendrerit diam a, morbi tristique egestas commodo ullamcorper
                ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit.
                Venenatis aliquam tellus viverra nullam. Consequat cras ac donec
                nunc.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
