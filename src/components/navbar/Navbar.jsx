import React, { useContext, useState } from "react";
// import "./Navbar.scss";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { DarkModeContext } from "../../context/darkModecontext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";
import { BiSearch } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { AiOutlineSetting } from "react-icons/ai";
import avt from "../../assets/avt.jpg";
import { useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
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
      className={` border-b border-black/10 py-[22px] px-7  ml-[10%] flex items-center justify-between ${
        open ? "w-[100%]" : "w-[90%]"
      }`}
    >
      {/* left */}
      <div className="flex items-center gap-2 px-3">
        <button type="button " className="flex items-center">
          <BsListTask
            className="text-2xl"
            // onClick={() => setOpen(!open)}
          ></BsListTask>
        </button>
        <button>
          <AiOutlineStar className="text-2xl flex items-center"></AiOutlineStar>
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
          className={`md:flex lg:flex flex items-center rounded-md bg-[lightgray] p-3 lg:p-0 py-1 md:py-2 lg:py-0 `}
        >
          <BiSearch
            className={`text-slate-600 text-2xl pl-1  cursor-pointer  float-left`}
          ></BiSearch>
          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent hidden md:block lg:block  text-black focus:outline-none`}
          />
        </div>
        <div className="flex items-center gap-1">
          <BsMoon></BsMoon>
          <BsBell></BsBell>
          <img src={avt} alt="" className="w-3 rounded-full" />
          <p>duy hiene</p>
          <MdOutlineKeyboardArrowDown className="text-xl"></MdOutlineKeyboardArrowDown>
        </div>
      </div>
    </div>
  );
}
