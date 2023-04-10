import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
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

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* <IconContext.Provider value={{ color: "undefined" }}> */}
      <div className="navbar  bg-green-400">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle bg-green-400 ">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}
