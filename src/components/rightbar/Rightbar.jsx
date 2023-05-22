import React, { useEffect, useState } from "react";
import avt from "../../assets/avt.jpg";
import { BsSnow } from "react-icons/bs";
import { BsBug } from "react-icons/bs";
import "./Rightbar.scss";
import { useTranslation } from "react-i18next";
export default function Rightbar() {
  // const [mor, setMor] = useState(false);
  const { t } = useTranslation();
  const posPoppup = "rightmenu-topleft";

  useEffect(() => {
    const button = document.querySelector(".openr"),
      rightmenu = document.querySelector(".rightmenu");
    const closeIcon = document.querySelector(".closes");
    //   progress = document.querySelector(".progress");

    // let timer1, timer2;

    button.addEventListener("click", () => {
      if (
        posPoppup === "rightmenu-topleft" ||
        posPoppup === "rightmenu-topright" ||
        posPoppup === "rightmenu-bottomright" ||
        posPoppup === "rightmenu-bottomleft"
      ) {
        rightmenu.classList.add("active");
        // rightmenu.classList.add("rightmenu-right");
        // progress.classList.add("active");

        // timer1 = setTimeout(() => {
        //   rightmenu.classList.remove("active");
        //   // rightmenu.classList.remove("rightmenu-right");
        // }, 5000); //1s = 1000 milliseconds

        // timer2 = setTimeout(() => {
        //   progress.classList.remove("active");
        // }, 5300);
      } else if (posPoppup === "rightmenu-topcenter") {
        rightmenu.classList.add("active-top");
        // rightmenu.classList.add("rightmenu-right");
        // progress.classList.add("active-top");

        // timer1 = setTimeout(() => {
        //   rightmenu.classList.remove("active-top");
        //   // rightmenu.classList.remove("rightmenu-right");
        // }, 5000); //1s = 1000 milliseconds

        // timer2 = setTimeout(() => {
        //   progress.classList.remove("active-top");
        // }, 5300);
      } else {
        rightmenu.classList.add("active-bottom");
        // rightmenu.classList.add("rightmenu-right");
        // progress.classList.add("active-bottom");

        // timer1 = setTimeout(() => {
        //   rightmenu.classList.remove("active-bottom");
        //   // rightmenu.classList.remove("rightmenu-right");
        // }, 5000); //1s = 1000 milliseconds

        // timer2 = setTimeout(() => {
        //   progress.classList.remove("active-bottom");
        // }, 5300);
      }
    });

    closeIcon.addEventListener("click", () => {
      if (
        posPoppup === "rightmenu-topleft" ||
        posPoppup === "rightmenu-topright" ||
        posPoppup === "rightmenu-bottomright" ||
        posPoppup === "rightmenu-bottomleft"
      ) {
        rightmenu.classList.remove("active");

        // setTimeout(() => {
        //   progress.classList.remove("active");
        // }, 300);

        // clearTimeout(timer1);
        // clearTimeout(timer2);
      } else if (posPoppup === "rightmenu-topcenter") {
        rightmenu.classList.remove("active-top");
        // setTimeout(() => {
        //   progress.classList.remove("active-top");
        // }, 300);
        // clearTimeout(timer1);
        // clearTimeout(timer2);
      } else {
        rightmenu.classList.remove("active-bottom");
        // setTimeout(() => {
        //   progress.classList.remove("active-bottom");
        // }, 300);
        // clearTimeout(timer1);
        // clearTimeout(timer2);
      }
    });
  });

  return (
    <div className="">
      <nav
        className={` rightmenu bg-white relative  w-[230px] md:p-4 lg:p-0 pt-2 border-l border-black/10 duration-500 ease-in-out`}
      >
        <div className="flex flex-col gap-9 px-[1.5rem] h-screen py-[22px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8]">
          {/* notice */}
          <div>
            <button className="fixed left-[50%] openr">click right menu</button>
            <h4
              // onClick={() => setMor(!mor)}
              className="text-black text-[14px] font-semibold mb-[1.25rem] cursor-pointer close"
            >
              Notifications
              <button type="button" className=" px-6 closes">
                x
              </button>
            </h4>
            <div className="flex flex-col gap-[1rem]">
              <Item
                text={"You have a bug  that needs to be fixed"}
                time={"5m ago"}
              ></Item>
              <Item text={"New user registered"} time={"1:23 AM ago"}></Item>
              <Item text={"Andi Lane subscribed to you"} time={"5m ago"}></Item>
            </div>
          </div>

          {/* activites */}
          <div>
            <h4 className="text-black text-[14px] font-semibold mb-[1.25rem] cursor-pointer">
              Activities
            </h4>
            <div className="flex flex-col gap-[1rem]">
              <Itemact
                avt={avt}
                text={"Edited the details of Project X"}
                time={"5m ago"}
              ></Itemact>
              <Itemact
                avt={avt}
                text={"Released a new version"}
                time={"1:23 AM ago"}
              ></Itemact>
              <Itemact
                avt={avt}
                text={"Submitted a bug"}
                time={"5m ago"}
              ></Itemact>
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-black text-[14px] font-semibold mb-[1.25rem] cursor-pointer">
              Contacts
            </h4>
            <div className="flex flex-col gap-[1rem]">
              <Itemact avt={avt} text={"Kate Morrison"}></Itemact>
              <Itemact avt={avt} text={"Natali Craig"}></Itemact>
              <Itemact avt={avt} text={"Drew Can"}></Itemact>
              <Itemact avt={avt} text={"Drew Can"}></Itemact>
              <Itemact avt={avt} text={"Drew Can"}></Itemact>
              <Itemact avt={avt} text={"Drew Can"}></Itemact>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
function Item(props) {
  return (
    <div className="flex gap-2">
      {/* <div className="h-[1.5rem] w-[1.5rem] flex-none p-1 text-black bg-lightblue rounded-lg"> */}
      <BsBug className="h-[1.5rem] w-[1.5rem] flex-none p-[4px] text-black bg-lightblue rounded-lg"></BsBug>
      {/* </div> */}
      <img src={props.avt} className="rounded-full w-3 h-5" alt="" />
      <div className="flex-1">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black text-[14px]">
          {props.text}
        </p>
        <p className="text-xs text-black/40 ">{props.time}</p>
      </div>
    </div>
  );
}
function Itemact(props) {
  return (
    <div className="flex gap-2">
      {/* <div className="h-[1.5rem] w-[1.5rem] flex-none p-1 text-black bg-lightblue rounded-lg"> */}
      <img src={props.avt} className="rounded-full w-3 h-5" alt="" />
      {/* </div> */}
      <div className="flex-1">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black text-[14px]">
          {props.text}
        </p>
        <p className="text-xs text-black/40 ">{props.time}</p>
      </div>
    </div>
  );
}
