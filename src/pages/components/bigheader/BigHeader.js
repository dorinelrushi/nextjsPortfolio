import React from "react";
import Image from "next/image";
import man from "../../../../public/author2-1.png";
import Link from "next/link";
function BigHeader() {
  return (
    <div>
      <div className="background">
        <div className=" backgroundflex flex lg:flex-row w-[70%] m-[auto]  justify-between text-[#ffff] items-center md:flex-col sm:flex-col">
          <div className="leftSide flex-[1] sm:text-[30px] ">
            <h1 class="text lg:text-[55px] uppercase font-bold 2xl:leading-[65px] mb-[45px] md:text-[40px] md:leading-[50px] sm:leading-[40px] ">
              <span className="f text-[#08d665]">Imagination</span> IS MORE
              IMPORTANT THAN KNOWLEDGE
            </h1>
            <p className="paragraph lg:text-[20px] max-w-[580px]  mb-[45px] px-4 ">
              Together we the people achieve more than any single person could
              ever do alone.
            </p>
            <Link href="">
              <button className="buttonLink bg-[#08d665] w-[190px] h-[60px] rounded-[5px] text-[#000000] font-bold text-[20px] bg-[#00ff08]">
                Getting Starting
              </button>
            </Link>
          </div>
          <div className="rightSide relative flex-1">
            <Image
              className="o xl:visible xl:w-[90%] lg:w-[100%] object-cover relative top-5 text-right md:w-[50%] m-auto sm:w-[50%] sm:invisible"
              src={man}
              alt="man"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigHeader;
