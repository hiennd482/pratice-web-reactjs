import React, { useContext } from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModecontext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";

export default function Navbar() {
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
  };
  console.log(currentLanguage);

  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>FakebookDUyHIen</span>
        </Link>
        <HomeOutlinedIcon></HomeOutlinedIcon>
        {darkMode === true ? (
          <WbSunnyIcon onClick={toggle}></WbSunnyIcon>
        ) : (
          <DarkModeOutlinedIcon onClick={toggle}></DarkModeOutlinedIcon>
        )}
        <AppsOutlinedIcon></AppsOutlinedIcon>
        <div className="search">
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <input type="text" placeholder="Tim kiem ..."></input>
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon></PersonOutlinedIcon>
        <EmailOutlinedIcon></EmailOutlinedIcon>
        <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>Duy Hien</span>
          <LanguageOutlinedIcon></LanguageOutlinedIcon>
          <select onChange={(lng) => changeLanguage(lng)}>
            <option value={"en"}>EN</option>
            <option value={"vn"}>VN</option>
          </select>
        </div>
      </div>
    </div>
  );
}
