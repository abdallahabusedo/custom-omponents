import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
function SwapBtn() {
  return (
    <div className="flex justify-center items-center bg-black h-20">
      <div>
        <a
          href=""
          className="relative w-[220px] h-[60px] bg-[rgba(255,255,255,0.1)] rounded-[60px] flex justify-center items-center text-[rgba(255,255,255,0.5)] no-underline tracking-widest border-t-[0.5px] border-t-[rgba(255,255,255,0.35)] border-l-[0.5px] border-l-[rgba(255,255,255,0.35)] transition-all duration-500 hover:pl-[0px] hover:pr-[40px] hover:text-[rgba(255,255,255,1)] after:absolute after:w-[80px] after:h-[100%] after:z-[1] after:bg-[rgba(255,255,255,0.5)] after:translate-x-[-170px] after:skew-x-[30deg] after:transition-all after:duration-700 after:ease-in-out after:hover:translate-x-[180px] overflow-hidden group "
        >
          Swap Next
          <span className="absolute left-[5px] w-[50px] h-[50px] bg-[#04fe4d] rounded-[50%] transition-all duration-500 ease-in-out group-hover:left-[calc(100%-55px)] flex justify-center items-center">
            <BiRightArrowAlt className="text-[#1a191d] text-[1.5em]" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default SwapBtn;
