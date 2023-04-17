import React, { useState } from "react";
import SidebarItem from "./Items";
// import "./sidebar.scss";
import { BsSnow } from "react-icons/bs";
import items from "../../pages/testdata/menuitem.json";
function Sidebar2() {
  const [mo, setMo] = useState(false);
  return (
    <>
      <nav
        className={`${
          mo ? "ml-[-6.5rem]" : "ml-0"
        }  bg-white  relative h-screen md:p-4 lg:p-0 pt-2 border-r border-black/10 duration-500`}
      >
        <div className="  bg-blue-400 ">
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
        </div>
        <ul
          className={`relative h-[calc(100vh-58px)] flex flex-col gap-y-[5px] overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8]`}
        >
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar2;
