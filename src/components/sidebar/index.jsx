import React, { useState } from "react";
import { BsSnow } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
function Index() {
  const [mo, setMo] = useState(false);
  return (
    <nav
      className={` bg-white fixed top-0 bottom-0 z-40 flex-none h-screen md:p-4 lg:p-1 pt-2 border-r border-black/10 w-[212px] `}
    >
      {/* logo */}
      <div className="flex p-1">
        <BsListTask
          className="absolute right-0"
          //   onClick={() => setMo(!mo)}
        ></BsListTask>
        <Link to={"/"}>
          <span className="flex text-2xl lg:mx-2 items-center cursor-pointer mr-8">
            <BsSnow className="mx-2 text-[lightblue]"></BsSnow>
            lo <p className="text-[lightblue]">g</p> o
          </span>
        </Link>
      </div>

      {/* title */}
      {/* center */}
      <ul className=" relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[lightgray] ">
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

        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight
            className=" float-left lg:block text-[gray]"
            onClick={() => setMo(!mo)}
          ></BsChevronRight>
          <BsBox></BsBox>
          Components
          {mo && (
            <ul className="flex flex-col ">
              <li>hihi</li>
              <li>hihi</li>
            </ul>
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
    </nav>
  );
}

export default Index;
