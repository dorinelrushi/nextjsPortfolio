import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-[#0b0d0c]">
      <div className="d w-[100%]">
        <nav>
          <ul className="ul flex flex-wrap gap-[18px] justify-center text-[white] text-[20px] py-[50px]">
            <li className="list ">
              {" "}
              <Link href="/">Home +</Link>
            </li>
            <li>
              {" "}
              <Link href="/">About</Link>
            </li>
            <li>
              {" "}
              <Link href="/">Service</Link>
            </li>
            <li>
              {" "}
              <Link href="/">Portfolio </Link>
            </li>
          </ul>
        </nav>
        <br></br>
        <div className="social Media m-[auto] text-center flex justify-center pb-[35px] gap-[15px]">
          <i className="fa fa-instagram text-white text-[25px]"></i>
          <i className="fa fa-linkedin text-white text-[25px]"></i>
          <i className="fa fa-github text-white text-[25px]"></i>
        </div>
        <p className="text-[white] py-[15px] text-center w-[100%] bg-[#121215]">
          COPYRIGHT © 2020 BY{" "}
          <span className="text-[#08d665]"> GREAT DEV SHOW ALL</span> RIGHT
          RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
