import React, { useState } from "react";
import SidebarItem from "./Items";

import { BsSnow } from "react-icons/bs";
import items from "../../pages/testdata/menuitem.json";
function Sidebar2() {
  const [mo, setMo] = useState(false);
  return (
    <nav
      className={`${
        !mo ? "w-[212px]" : "w-3"
      } bg-white relative  h-screen md:p-4 lg:p-0 pt-2 border-r border-black/10 duration-500 `}
    >
      <div className="  bg-blue-400 ">
        {/* <BsListTask
          className="absolute p-2 left-0 "
          
        ></BsListTask> */}
        {/* <Link to={"/"}> */}
        <span
          onClick={() => setMo(!mo)}
          className={`flex text-2xl  items-center cursor-pointer mr-8 ${
            !mo ? "lg:mx-2" : " lg:px-1"
          } `}
        >
          <BsSnow
            className={` text-[lightblue] ${!mo ? "mx-2" : "hidden"}`}
          ></BsSnow>

          <p className="text-[lightblue]">g</p>
        </span>
        {/* </Link> */}
      </div>
      <ul
        className={`relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8]`}
      >
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar2;
