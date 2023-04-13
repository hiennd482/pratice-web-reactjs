import React, { useContext, useState } from "react";
// import "./Navbar.scss";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { DarkModeContext } from "../../context/darkModecontext";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";
import { BiSearch } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RxExit } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { AiOutlineSetting } from "react-icons/ai";
import avt from "../../assets/avt.jpg";
import { useLocation } from "react-router-dom";

import { SidebarData } from "./Sidebardata";
import { IconContext } from "react-icons";
export default function Navbar() {
  // const { i18n } = useTranslation();
  // const currentLanguage = locales[i18n.language];
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng.target.value);
  // };
  // console.log(currentLanguage);
  // const location = useLocation();

  // const { toggle, darkMode } = useContext(DarkModeContext);
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div
      className={`  bg-white border-b border-black/10 py-[12px] px-[1.75rem]  flex items-center justify-between `}
    >
      {/* left */}
      <div className="flex items-center gap-2 px-3">
        <button type="button " className="flex items-center">
          <BsListTask
            className="text-lg"
            // onClick={() => setOpen(!open)}
          ></BsListTask>
        </button>
        <button>
          <AiOutlineStar className="text-lg flex items-center"></AiOutlineStar>
        </button>
        <div className="sm:block">
          <nav className="w-full px-1 py-1">
            <ol className="flex space-x-2 cursor-pointer">
              <li className="flex items-center text-black/40 hover:text-black  ">
                Dashboard
              </li>
              <li className="flex items-center space-x-1">
                <span className="">/ Default</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center gap-4 cursor-pointer">
        {/* search */}
        <div
          className={`md:flex lg:flex flex items-center rounded-md bg-[#f3f3f3] lg:px-1 `}
        >
          <BiSearch
            className={`text-[lightgray] text-2xl pr-[3px] cursor-pointer float-left`}
          ></BiSearch>
          <input
            type={"search"}
            placeholder="Search..."
            className={`text-base bg-transparent hidden md:block lg:block lg:w-9 pl-[1px] placeholder:text-slate-500 focus:outline-none`}
          />
          <BsFillMicFill
            className={`text-[lightgray] text-2xl pl-1 cursor-pointer float-left`}
          ></BsFillMicFill>
        </div>
        <div className="flex items-center gap-1" onClick={() => setOpen(!open)}>
          <BsMoon></BsMoon>
          <BsBell></BsBell>
          <img src={avt} alt="" className="w-3 rounded-full" />
          <p>duy hiene</p>
          <MdOutlineKeyboardArrowDown className="text-xl"></MdOutlineKeyboardArrowDown>
        </div>
      </div>

      {/* profile */}
      <div
        className={` ${
          open
            ? " bg-white absolute px-2 top-[65px] w-[13%] rounded right-5 z-10 border transform opacity-100 scale-100 shadow-lg shadow-indigo-500/40"
            : "hidden"
        }  `}
      >
        <ul>
          <li className="flex items-center mt-1 hover:bg-[#f3f3f3] px-1 hover:rounded-md cursor-pointer">
            <img src={avt} alt="" className="rounded-full w-3 h-5" />
            <div className="px-1">
              <p>duyhien</p>
              <p className="text-xs text-[gray] hover:text-black">
                Email@gmail.com
              </p>
            </div>
          </li>
          <li className="h-[1px] bg-black/5 block my-1"></li>
          <li className="text-[gray] hover:text-black hover:bg-[#f3f3f3] hover:rounded-md cursor-pointer flex items-center my-[2px] py-1">
            <RxAvatar className="mx-1"></RxAvatar>Profile
          </li>
          <li className="text-[gray] hover:text-black cursor-pointer hover:bg-[#f3f3f3] hover:rounded-md flex items-center my-[2px] py-1">
            <AiOutlineSetting className="mx-1"></AiOutlineSetting>Settings
          </li>
          <li className="text-[gray] hover:text-black cursor-pointer hover:bg-[#f3f3f3] hover:rounded-md flex items-center my-[2px] py-1">
            <BsChatLeftText className="mx-1"></BsChatLeftText>Messenges
          </li>
          <li className="text-[gray] hover:text-black cursor-pointer hover:bg-[#f3f3f3] hover:rounded-md flex items-center my-[2px] py-1">
            <HiOutlineUserGroup className="mx-1"></HiOutlineUserGroup>Support
          </li>
          <li className="h-[1px] bg-black/5 block my-1"></li>
          <li className=" text-black cursor-pointer flex items-center hover:bg-[#f3f3f3] hover:rounded-md my-1 py-1">
            <RxExit className="mx-1"></RxExit>Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
}
