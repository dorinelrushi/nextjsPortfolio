import React from "react";
import Link from "next/link";
import Image from "next/image";
import video from "../../../../public/about1-1.png";
function About() {
  return (
    <div
      className="about header w-[100%]  bg-[#0b0d0c] text-[#ffff]"
      id="about"
    >
      <div className="aboutflex 2xl:py-[100px] xl:py-[100px] flex  w-[70%]  gap-4 xl:flex-wrap  md:flex-wrap sm:flex-wrap 2sm:flex-wrap m-[auto] justify-center md:py-[80px]">
        <div className="leftAbout relative 2xl:flex-1  md:flex-0  sm:flex-0 2sm:flex-0  ">
          <div className="imagesSticky px-7 relative z-2">
            <Image src={video} alt="video" className="images2 relative z-20" />
          </div>
        </div>
        <div className="rightAbout 2xl:flex-1 md:flex-0 sm:flex-0 2sm:flex-0">
          <h2 className="t 2xl:text-[48px]  uppercase font-bold 2xl:leading-[59px] mb-[20px] sm:text-[30px] sm:mt-[50px]">
            FAILURE IS THE CONDIMENT THAT GIVES{" "}
            <span className="s text-[#08d665]">SUCCESS</span>
          </h2>
          <p className="paragraph2 text-[17px] max-w-[580px]  mb-[29px] ">
            Spend more time focusing on the important aspects of your business.
            Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
            advanced virtual HR company, we are offering online HR systems that
            can be customized depending on your business needs.
          </p>
          <Link href="">
            <button className="buttonLink bg-[#08d665] w-[190px] h-[70px] mt-[20px] rounded-[5px] text-[#070707] font-bold bg-[#00ff08]">
              Getting Starting
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
