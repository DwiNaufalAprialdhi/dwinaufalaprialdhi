import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageGithub from "../../public/images/github.png";
import imageInstagram from "../../public/images/instagram.png";
import imageTiktok from "../../public/images/tiktok.png";
import imageYoutube from "../../public/images/youtube.png";
import imageBwallet from "../../public/images/bwallet.png";
import imageBwallet2 from "../../public/images/bwallet2.png";
import imageBookies from "../../public/images/bookies.png";
import imageBookies2 from "../../public/images/bookies2.png";
import imageGojek from "../../public/images/gojek.png";
import imageGojek2 from "../../public/images/gojek2.png";
import imageIcon1 from "../../public/images/icon1.png";
import imageIcon2 from "../../public/images/icon2.png";
import imageIcon3 from "../../public/images/icon3.png";
import imageIcon4 from "../../public/images/icon4.png";

function Hero() {
  return (
    <>
      <main
        id="Hero"
        className="pt-[58px] md:pt-[130px] pb-12 px-4 md:px-[47px] lg:px-[96px] xl:px-[96px]"
      >
        <div className="pt-12 flex flex-col lg:flex-row gap-8 lg:gap-[322px]">
          <h3 className="flex flex-col font-light text-[33px] md:text-7xl md:leading-[102%] tracking-[120%] text-text">
            <span className="flex items-center gap-2">
              Let’s learn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="currentColor"
                class="w-9 h-9 md:w-14 md:h-14 text-brand"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </span>
            <span className="flex items-center gap-2">
              to code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="currentColor"
                class="w-9 h-9 md:w-14 md:h-14 text-purple-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <span>an application</span>
          </h3>
          <div className="flex flex-col gap-8 md:relative lg:pt-[71px]">
            <p className="text-text text-base max-w-[343px] md:max-w-[374px]">
              with me <span className="text-brand">dwi naufal aprialdhi</span>,
              a software developer who loves to share how to code in many
              programing languages and multi platforms.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <Link href="/">
                  <button className="bg-brand text-white text-sm py-2 px-6 leading-[160%] rounded-full">
                    Start Learn
                  </button>
                </Link>
              </div>
              <div className="flex md:flex-col md:absolute md:right-0 md:-top-20 items-center gap-4 lg:hidden">
                <Link
                  href="https://github.com/DwiNaufalAprialdhi"
                  target="blank"
                >
                  <Image src={imageGithub} alt="Github" className="py-2 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/dwinaufalaprialdhi/"
                  target="blank"
                >
                  <Image
                    src={imageInstagram}
                    alt="Instagram"
                    className="py-2 w-5"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@dwinaufalaprialdhi"
                  target="blank"
                >
                  <Image src={imageTiktok} alt="Tiktok" className="py-2 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@dwinaufal1777/featured"
                  target="blank"
                >
                  <Image
                    src={imageYoutube}
                    alt="YouTube"
                    className="py-2 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 pb-3 lg:pb-[36px] flex flex-col md:grid md:grid-cols-12 justify-center gap-3 lg:gap-[36px]">
          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageBwallet}
                alt="BWallet"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon1} alt="" />
                <Image src={imageIcon2} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    BWalet
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">Business wallet</p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageBookies}
                alt="BWallet"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon3} alt="" />
                <Image src={imageIcon4} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    Bookies
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">
                    Read digital book app
                  </p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageGojek}
                alt="BWallet"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon3} alt="" />
                <Image src={imageIcon2} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    Gojek
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">
                    Home screen gojek apps
                  </p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageBwallet2}
                alt="BWallet"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon3} alt="" />
                <Image src={imageIcon2} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    BWalet
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">Business wallet</p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageGojek2}
                alt="BWallet"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon3} alt="" />
                <Image src={imageIcon2} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    Gojek
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">
                    Home screen gojek apps
                  </p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-[24px] flex flex-col justify-center md:col-span-6 lg:col-span-4">
            <div class="pt-3 pb-3 px-3 relative">
              <Image
                src={imageBookies2}
                alt="Bookies"
                className="object-cover w-full"
              />
              <div className="absolute top-5 right-5 flex gap-[10px]">
                <Image src={imageIcon3} alt="" />
                <Image src={imageIcon2} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text">
                  <h2 className="text-lg md:text-2xl leading-[120%] md:leading-[102%] font-medium pt-3">
                    Bookies
                  </h2>
                  <p className="text-sm leading-[160%] pb-2">
                    Read digital book app
                  </p>
                </div>
                <div className="p-[10px]">
                  <h3 class="text-white bg-text rounded-full py-2 px-[6px] leading-[160%]">
                    +99
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button className="border border-brand rounded-full text-text text-sm leading-[160%] py-2 px-6">
            Load more
          </button>
        </div>
      </main>
    </>
  );
}

export default Hero;
