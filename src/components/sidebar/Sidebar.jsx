import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsFillDice3Fill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Navbar from "../leftbar/Leftbar";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subchildopen, setSubchildOpen] = useState(false);
  const data = [
    {
      id: 1,
      name: "Item 1",
      subchilds: true,
      path: "/",
      childs: [
        { id: 11, name: "products", path: "/products" },
        { id: 12, name: "report", path: "/reports" },
      ],
    },
    {
      id: 2,
      name: "Item 2",
      subchilds: true,
      childs: [
        { id: 21, name: "Item 2.1" },
        { id: 22, name: "Item 2.2" },
        {
          id: 23,
          name: "Item 2.3",
          subchilds: true,
          childs: [
            { id: 231, name: "Item 2.3.1" },
            { id: 232, name: "Item 2.3.2" },
            { id: 233, name: "Item 2.3.3" },
            {
              id: 234,
              name: "Item 2.3.4",
              subchilds: true,
              childs: [{ id: 2341, name: "Item 2.3.4.1" }],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Item 3",
      subchilds: true,
      childs: [
        { id: 31, name: "Item 3.1" },
        { id: 31, name: "Item 3.1" },
      ],
    },
    {
      id: 4,
      name: "Item 4",
    },
  ];
  const RecursiveComponent = ({ data }) => {
    return (
      <>
        {data.map((i, index) => (
          // console.log(i.childs);
          <ul className="pt-2 ">
            <li
              key={index}
              className="text-black text-sm flex items-center gap-x-2 cursor-pointer  p-2 rounded-md hover:bg-slate-300"
            >
              <Link to={i.path}>
                <span className=" float-left text-xl  lg:block">
                  <RiDashboardFill></RiDashboardFill>
                </span>
                <span
                  className={`text-base font-medium hidden md:hidden lg:flex ${
                    !open && "hidden"
                  }`}
                >
                  {i.name}
                </span>
              </Link>
              {i.subchilds && (
                <>
                  <BsChevronDown
                    className=""
                    onClick={() => setSubchildOpen(!subchildopen)}
                  ></BsChevronDown>
                </>
              )}
            </li>
            {/* <div className="pl-4">
              {i.subchilds && subchildopen && (
                // <div
                //   className={`${subchildopen === true ? "block" : "hidden"}`}
                // >
                <RecursiveComponent data={i.childs}></RecursiveComponent>
                // </div>
              )}
            </div> */}{" "}
            {i.subchilds && subchildopen && (
              <ul className="">
                {i.childs.map((child, index) => (
                  <li
                    className="  text-black text-sm  items-center gap-x-2 cursor-pointer hidden md:flex lg:flex p-2 rounded-md  hover:bg-slate-300 focus:bg-slate-300 "
                    key={index}
                  >
                    <Link className="focus:bg-red-300" to={child.path}>
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
      </>
    );
  };
  return (
    <div
      className={` bg-violet h-screen md:p-4 lg:p-4 pt-3 w-1/6  duration-700 ${
        open ? "w-1/6" : "w-5"
      }`}
    >
      <BsArrowLeftShort
        className={`bg-white text-2xl rounded-full absolute right-[100px] top-5 border border-violet text-violet cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <BsFillDice3Fill
          className={`float-left cursor-pointer  rounded ml-3 text-3xl   md:block lg:block lg:mr-3 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        ></BsFillDice3Fill>
        <h2
          className={`text-white origin-left font-medium text-2xl hidden md:flex  duration-300 ${
            !open && "scale-0"
          }`}
        >
          {" "}
          MeNU
        </h2>
      </div>
      <div
        className={`md:flex lg:flex flex items-center rounded-md bg-slate-300 mt-2 p-3 py-1 md:py-2 lg:py-2 `}
      >
        <BsSearch
          className={`text-slate-600 text-2xl pl-1  cursor-pointer  float-left ${
            open && "mr-1"
          }`}
        ></BsSearch>
        <input
          type={"search"}
          placeholder="search"
          className={`text-base bg-transparent hidden md:block lg:block w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      {/* menu items */}
      <div>
        <RecursiveComponent data={data}></RecursiveComponent>
      </div>
      {/* <div className="absolute top-0 left-0 right-0 w-screen">
        <Navbar></Navbar>
      </div> */}
    </div>
  );
}

export default Sidebar;
