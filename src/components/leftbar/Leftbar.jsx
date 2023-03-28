import React from "react";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import "./Leftbar.scss";
import { useTranslation } from "react-i18next";

export default function Leftbar() {
  const { t } = useTranslation();

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className="items">
            <img src={Friends} alt="" />
            <span>{t("leftbar.friend")}</span>
          </div>
          <div className="items">
            <img src={Groups} alt="" />
            <span>{t("leftbar.groups")}</span>
          </div>
          <div className="items">
            <img src={Market} alt="" />
            <span>{t("leftbar.market")}</span>
          </div>
          <div className="items">
            <img src={Watch} alt="" />
            <span>{t("leftbar.watch")}</span>
          </div>
          <div className="items">
            <img src={Memories} alt="" />
            <span>{t("leftbar.memories")}</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>{t("leftbar.your shortcut")}</span>
          <div className="items">
            <img src={Events} alt="" />
            <span>{t("leftbar.events")}</span>
          </div>
          <div className="items">
            <img src={Gaming} alt="" />
            <span>{t("leftbar.gaming")}</span>
          </div>
          <div className="items">
            <img src={Gallery} alt="" />
            <span>{t("leftbar.gallery")}</span>
          </div>
          <div className="items">
            <img src={Videos} alt="" />
            <span>{t("leftbar.video")}</span>
          </div>
          <div className="items">
            <img src={Messages} alt="" />
            <span>{t("leftbar.messanger")}</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>{t("leftbar.others")}</span>
          <div className="items">
            <img src={Tutorials} alt="" />
            <span>{t("leftbar.tutorial")}</span>
          </div>
          <div className="items">
            <img src={Courses} alt="" />
            <span>{t("leftbar.courses")}</span>
          </div>
          <div className="items">
            <img src={Gaming} alt="" />
            <span>{t("leftbar.gaming")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
