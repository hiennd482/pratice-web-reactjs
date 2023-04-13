import React, { useState } from "react";
import { BsSnow } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import data from "../../pages/testdata/menuitem.json";
function Index() {
  const [mo, setMo] = useState(false);
  const [openitem, setOpenitem] = useState(false);
  // const Itmenu = () => {
  //   return (
  //     <>
  //       {data.map((i, index) => {
  //         <ul className=" relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8] ">
  //           <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
  //             {i.childrens && (
  //               <>
  //                 <BsChevronRight
  //                   className={` float-left lg:block text-[gray] duration-200 ${
  //                     openitem && "rotate-90 "
  //                   }`}
  //                   onClick={() => setOpenitem(!openitem)}
  //                 ></BsChevronRight>
  //               </>
  //             )}
  //             <FiPieChart></FiPieChart>
  //             {i.title}
  //           </li>
  //           {i.childrens && openitem && (
  //             <>
  //               <Itmenu data={i.childrens}></Itmenu>
  //             </>
  //           )}
  //         </ul>;
  //       })}
  //     </>
  //   );
  // };
  return (
    <nav
      className={` bg-white relative  h-screen md:p-4 lg:p-0 pt-2 border-r border-black/10 duration-500 ${
        !mo ? "w-[212px]" : "w-3"
      }  `}
    >
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
          {/* <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight> */}
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          {/* <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight> */}
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          {/* <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight> */}
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <li
          className={`gap-1 duration-300 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md `}
        >
          <BsChevronRight
            className={` float-left lg:block text-[gray] duration-200 ${
              openitem && "rotate-90 "
            }`}
            onClick={() => setOpenitem(!openitem)}
          ></BsChevronRight>
          <ImStack></ImStack>
          Apps
        </li>
        {openitem && (
          <ul className={` `}>
            <li className="gap-1 px-1 pl-[55px] cursor-pointer flex items-center hover:bg-[#f3f3f3] hover:border-l-4 hover:border-black text-center rounded-md">
              asdfsdf
            </li>
            <li className="gap-1 px-1 pl-[55px] cursor-pointer flex items-center hover:bg-[#f3f3f3] hover:border-l-4 hover:border-black text-center rounded-md">
              asdfsdf
            </li>
          </ul>
          // <div className=" bg-[blue] text-white ">
          //   <span>sdfadf</span>
          //   <span>sdfadf</span>
          // </div>
        )}
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
        <h2 className="pl-3 my-2 text-sm text-black/60 ">User Interface</h2>
        <li className="gap-1  px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md">
          <BsChevronRight className=" float-left lg:block text-[gray]"></BsChevronRight>
          <FiPieChart></FiPieChart>
          Dashboard
        </li>
      </ul>
    </nav>
  );
}

export default Index;
