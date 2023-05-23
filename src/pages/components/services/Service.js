import React from "react";
import Image from "next/image";
import icon from "../../../../public/maskicon.png";
import icon1 from "../../../../public/Mask2.png";
export default function Service() {
  return (
    <div className="services w-[100%] bg-[#0b0d0c] pb-11" id="services">
      <div className="servicesFlex w-[70%] m-[auto] flex flex-wrap py-[100px] bg-[#0b0d0c] text-[#ffff]">
        <div className="servicesLeft flex-1">
          <h4 className="services text-[#08d660] text-[19px]">WHAT WE DO</h4>
          <h1 className="skill text-[28px] font-bold">
            SERVICES AND SOLUTIONS <span>SOLUTIONS</span>
          </h1>
        </div>
        <div className="esperienceRight flex-1">
          <p className="paragraph 2xl:mt-[0px] text-[20px] max-w-[580px]  2xl:mb-[29px] px-6 sm:mt-[40px] 2sm:mt-[40px] md:flex-wrap ">
            Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint
            ratione reprehenderit, error qui enim and exsit.
          </p>
        </div>
      </div>
      <div className="boxServiceFlex w-[70%] m-[auto] flex flex-wrap text-[#ffff] gap-10">
        <div className="boxServices1 flex-1 bg-[#19191b5c] py-[60px] px-[30px] text-center">
          <Image
            src={icon}
            alt="icon"
            className="text-center m-[auto] mb-[19px]"
            width={80}
          />
          <h2 className="textServices text-[25px] font-bold mb-[18px]">
            DESIGN PRINCIPALES
          </h2>
          <p className="font text-[18px] m-[auto] max-w-[340px]">
            Need a project completed by an expert? Let’s go! Access a human
            resources consultant to answer questions.
          </p>
        </div>
        <div className="boxServices2 flex-1 bg-[#08d660] py-[60px] px-[30px] text-center">
          <Image
            src={icon1}
            alt="icon"
            className="text-center m-[auto] mb-[19px]"
            width={80}
          />
          <h2 className="textServices text-[25px] font-bold mb-[18px]">
            DESIGN PRINCIPALES
          </h2>
          <p className="font text-[18px] m-[auto] max-w-[340px]">
            Need a project completed by an expert? Let’s go! Access a human
            resources consultant to answer questions.
          </p>
        </div>
        <div className="boxServices3 flex-1 bg-[#19191b5c] py-[60px] px-[30px] text-center">
          <Image
            src={icon}
            alt="icon"
            className="text-center m-[auto] mb-[19px]"
            width={80}
          />
          <h2 className="textServices text-[25px] font-bold mb-[18px]">
            DESIGN PRINCIPALES
          </h2>
          <p className="font text-[18px] m-[auto] max-w-[340px]">
            Need a project completed by an expert? Let’s go! Access a human
            resources consultant to answer questions.
          </p>
        </div>
      </div>
    </div>
  );
}
