import React from "react";

function Newsletter() {
  return (
    <div className="w w-[100%] bg-[#0b0d0c]  ">
      <div className="news w-[100%] text-[white] relative z-1">
        <div className="newsletter w-[70%] m-auto text-center text-[20px] 2xl:py-[160px]">
          <p className="newss relative z-5 opacity-1 text-[#05d561] mb-[20px]">
            NEWSLETTER
          </p>
          <h2 className="stay relative z-5 2xl:text-[50px] m-auto max-w-[750px] font-bold 2xl:eading-[62px] mb-[50px] md:text-[40px] sm:text-[40px] 2sm:text-[20px]  ">
            STAY UP TO DATE, SUBSCRIBE TO THE FREE{" "}
            <span className="demo text-[#05d561]">NEWSLETTER!</span>
          </h2>
          <form className="fle relative z-5  flex items-center gap-2 m-auto text-center justify-center ">
            <input
              type="text"
              placeholder="your email"
              className="d 2xl:w-[300px] rounded-[5px] h-[60px]  px-[20px] placeholder:text-[#4b4b4b] bg-[#1a1a1a] border-[1px] border-[#4b4b4b] md:w-[50%] sm:w-[50%] 2sm:w-[50%]"
            />
            <button className="d w-[180px] rounded-[5px] bg-[#05d561] h-[60px] border-[none] text-[#ffffff] font-normal">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
