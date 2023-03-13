import React from "react";

function Ribbons2() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative overflow-hidden w-56 h-56 bg-white border">
        <div className="absolute left-0 top-0 h-16 w-16">
          <div className="absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
            Popular
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbons2;
