import React from "react";
import { TbWorld } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { DarkModeContext } from "../../context/darkModecontext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";
import { BsSearch } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import avt from "../../assets/avt.jpg";
// import "./Leftbar.scss";

export default function Leftbar() {
  // const { t } = useTranslation();
  // <span>{t("leftbar.friend")}</span>
  return (
    <div className="flex justify-between items-center pb-2 border-b-2 px-3 bg-violet  border-white">
      {/* search */}
      <div
        className={`flex items-center rounded-sm bg-white mt-2 px-1 py-1 ml-10  border-slate-400 border`}
      >
        <input
          type={"search"}
          placeholder="Search..."
          className={`text-base bg-transparent  text-black focus:outline-none
        `}
        />
        <BsSearch
          className={`text-slate-600 text-base cursor-pointer block float-left 
      mr-1
      `}
        ></BsSearch>
      </div>

      {/* option */}
      <div className="pl-9 flex">
        <div className="flex items-center px-1">
          <TbWorld className="text-2xl text-white"></TbWorld>
          <p className="text-white">English</p>
        </div>
        <div className="flex items-center px-3 relative cursor-pointer transition transform hover:-translate-y-1">
          {" "}
          <BsBell className="text-2xl relative text-white"></BsBell>
          <span className=" bg-red-600 rounded-full text-white text-xs px-0.5 absolute top-0 right-2">
            2
          </span>
        </div>
        <div className="flex items-center px-3 relative cursor-pointer transition transform hover:-translate-y-1 delay-150 duration-200 ">
          {" "}
          <BsChatLeft className="text-2xl text-white"></BsChatLeft>
          <span className=" bg-red-600 rounded-full text-white text-xs px-0.5 absolute top-0 left-1">
            2
          </span>
        </div>
        <div className="flex items-center ">
          <p className="pr-1">xin chao</p>
          <img
            src={avt}
            className="w-4 rounded-full cursor-pointer"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex items-center cursor-pointer pl-2">
          <AiOutlineSetting className="text-2xl text-white"></AiOutlineSetting>
        </div>
      </div>
    </div>
  );
}
