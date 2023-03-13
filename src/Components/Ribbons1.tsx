import React from "react";

function Ribbons1() {
  return (
    <h1
      className="text-[16px] w-[50%] relative bg-[#ba89b6] text-[#fff] text-center py-[1em] px-[2em] mt-[2em] mb-[3em] mx-auto 
       before:absolute before:block before:bottom-[-1em] before:border-[1.5em] before:border-[#986794] before:z-[-1]
      before:left-[-2em] before:border-r-[1.5em] before:border-l-transparent
     after:absolute after:block after:bottom-[-1em] after:border-[1.5em] after:border-[#986794] after:z-[-1] after:right-[-2em] after:border-l-[1.5em] after:border-r-transparent
      "
    >
      <strong
        className="before:absolute before:block before:border-t-[#804f7c] before:border-r-transparent before:border-b-transparent before:border-l-transparent before:bottom-[-1em]
        before:left-0 before:border-t-[1em] before:border-r-[0em] before:border-b-[0em] before:border-l-[1em]
        after:absolute after:block after:border-t-[#804f7c] after:border-r-transparent after:border-b-transparent after:border-l-transparent after:bottom-[-1em]
        after:right-0 after:border-t-[1em] after:border-r-[1em] after:border-b-[0em] after:border-l-[0em]
        "
      >
        Everybody loves ribbons
      </strong>
    </h1>
  );
}

export default Ribbons1;
