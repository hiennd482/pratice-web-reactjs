import React, { useState } from "react";
import { BsSnow } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";

function Childs() {
  const [mo, setMo] = useState(false);
  const [openitem, setOpenitem] = useState(false);
  return (
    <>
      {/* logo */}
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

      {/* title */}
      {/* center */}
      <ul className=" relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8] ">
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <ImStack></ImStack>
          Apps
        </li>
        <h2 className="pl-3 my-2 text-sm text-black/60 ">User Interface</h2>

        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md focus:bg-[lightgray]">
          <BsChevronRight
            className={` float-left lg:block text-[gray] duration-200 ${
              openitem && "rotate-90 "
            }`}
            onClick={() => setOpenitem(!openitem)}
          ></BsChevronRight>
          <BsBox></BsBox>
          Components
          {openitem && (
            <div className="duration-500 flex flex-col">
              <span>hi1</span>
              <span>hi2</span>
            </div>
          )}
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Elements
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Charts</p>
          </div>
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Widgets</p>
          </div>
        </li>
        <h2 className="pl-3 my-2 text-sm text-black/60 ">Tables and Forms</h2>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Components</p>
          </div>
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Components</p>
          </div>
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Components</p>
          </div>
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Components</p>
          </div>
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <BsBox></BsBox>
          Components
        </li>
        <li className="gap-1 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <div className="flex items-center pl-4 ">
            <BsBox></BsBox>
            <p className="lg:px-1">Components</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Childs;
