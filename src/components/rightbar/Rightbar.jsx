import React, { useState } from "react";
import { BsSnow } from "react-icons/bs";
// import "./Rightbar.scss";
import { useTranslation } from "react-i18next";
export default function Rightbar() {
  const [mor, setMor] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="">
      <nav
        className={`${
          !mor ? "mr-[0px]" : "mr-[-60px]"
        }  bg-white relative h-screen  md:p-4 lg:p-0 pt-2 border-l border-black/10 duration-500`}
      >
        <div className="  bg-blue-400 ">
          {/* <BsListTask
          className="absolute p-2 left-0 "
          
        ></BsListTask> */}
          {/* <Link to={"/"}> */}
          <span
            onClick={() => setMor(!mor)}
            className={`flex text-2xl  items-center cursor-pointer mr-8 ${
              !mor ? "lg:mx-2" : " lg:px-1"
            } `}
          >
            <BsSnow
              className={` text-[lightblue] ${!mor ? "mx-2" : "hidden"}`}
            ></BsSnow>

            <p className="text-[lightblue]">g</p>
          </span>
          {/* <a id="nav-collapse" href="#">
            <span class="icon icon-cross"></span>
          </a> */}
          {/* </Link> */}
        </div>
        <ul
          className={`relative h-[calc(100vh-58px)] flex flex-col gap-y-[5px] overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8]`}
        >
          <li className="gap-x-1  text-[14px] px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
            ádfasdafsdf
          </li>
          <li className="gap-x-1  text-[14px] px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
            ádfasdafsdf
          </li>
          <li className="gap-x-1  text-[14px] px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
            ádfasdafsdf
          </li>
        </ul>
      </nav>
    </div>
  );
}
