import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function Content() {
  return (
    <div className="mt-2 rounded-2xl p-[1.5rem] bg-[#e3f5ff]">
      <p className="text-sm font-semibold mb-2 w-[300px]">Views</p>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-9 font-semibold ">721K</h2>{" "}
        <div className="flex items-center gap-1 ">
          <p className="text-xs leading-[18px]">+11.01%</p>
          <BsArrowUpRight className="text-xs"></BsArrowUpRight>
        </div>
      </div>
    </div>
  );
}

export default Content;
