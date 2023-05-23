import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import hamburger from "../../../../public/hamburger.svg";
export default function Header() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="header w-[100%]  bg-[#0d0f0e]">
        <div className="headerflex flex w-[70%] m-[auto]   justify-between items-center 2xl:py-10 x1:py-10 bg-[#0d0f0e] text-[#fcfcfcfa] md-[5px] sm:py-5  2sm:py-5">
          <div className="leftHeader">
            <h2 className="d text-[28px]">Logo</h2>
          </div>
          <div className="centerHeader">
            <nav>
              <ul className="ul flex gap-[15px] text-[20px] 2xl:visible xl:visible ">
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
          </div>
          <div className="rightHeader">
            <Image src={hamburger} alt="hamburger" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
