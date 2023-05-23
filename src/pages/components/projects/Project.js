import React, { useEffect } from "react";
import Link from "next/link";

function Project() {
  function leftHandle() {
    var scroll = document.querySelector(".scroll-container");
    var left = document.getElementById("left");
    scroll.scrollLeft -= 390;
  }

  function rightHandle() {
    var scroll = document.querySelector(".scroll-container");
    var left = document.getElementById("right");
    scroll.scrollLeft += 390;
  }

  useEffect(() => {
    const container = document.querySelector("#overflow");
    let startY;
    let startX;
    let scrollLeft;
    let scrollTop;
    let isDown;

    container.addEventListener("mousedown", (e) => mouseIsDown(e));
    container.addEventListener("mouseup", (e) => mouseUp(e));
    container.addEventListener("mouseleave", (e) => mouseLeave(e));
    container.addEventListener("mousemove", (e) => mouseMove(e));

    function mouseIsDown(e) {
      isDown = true;
      startY = e.pageY - container.offsetTop;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;
    }
    function mouseUp(e) {
      isDown = false;
    }
    function mouseLeave(e) {
      isDown = false;
    }
    function mouseMove(e) {
      container.style.cursor = "grab";
      if (isDown) {
        e.preventDefault();
        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;
      }
    }
  });

  return (
    <div className="project w-[100%] bg-[#0b0d0c] pb-11" id="porfolio">
      <div className="projectFlex w-[70%] m-[auto] flex flex-wrap py-[100px] bg-[#0b0d0c] text-[#ffff]">
        <div className="projectLeft flex-1">
          <h4 className="project text-[#08d660] text-[19px]">
            WORKING PROCESS
          </h4>
          <h1 className="project text-[28px] font-bold">
            LASTET WORKING <span>PROJECT</span>
          </h1>
        </div>
        <div className="projectRight flex-1">
          <p className="paragraph text-[20px] 2xl:mt-[0pz] max-w-[580px]  mb-[29px] px-6 md:flex-wrap md:mt-[20px] sm:mt-[20px] 2sm:mt-[20px]">
            Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint
            ratione reprehenderit, error qui enim and exsit.
          </p>
          <button id="left" className="fa text-[35px]" onClick={leftHandle}>
            &#8592; &nbsp;
          </button>{" "}
          &nbsp;
          <button className="fa text-[35px]" id="right" onClick={rightHandle}>
            &#8594;
          </button>
        </div>
      </div>

      <div class="scroll-container" id="overflow">
        <div class="scroll-area ">
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>
        </div>
        <div class="scroll-area  ">
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>
        </div>
        <div class="scroll-area ">
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>
        </div>
        <div class="scroll-area ">
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>{" "}
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>
        </div>
        <div class="scroll-area">
          <div className="hovers ">
            <Link
              href="/"
              className="f absolute top-[50%] left-[50%] text-[white] text-[25px] translate-x-[-50%] translate-y-[-50%]"
            >
              Preview project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
