import React, { useState } from "react";
import avt from "../../assets/avt.jpg";
import { BsSnow } from "react-icons/bs";
import { BsBug } from "react-icons/bs";
// import "./Rightbar.scss";
import { useTranslation } from "react-i18next";
export default function Rightbar() {
  const [mor, setMor] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="">
      <nav
        className={`${
          !mor ? "mr-[0px]" : "mr-[-100px] "
        }  bg-white relative  w-[230px] md:p-4 lg:p-0 pt-2 border-l border-black/10 duration-500`}
      >
        <div className="flex flex-col gap-9 px-[1.5rem] h-screen py-[22px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e8e8e8]">
          {/* notice */}
          <div>
            <h4
              onClick={() => setMor(!mor)}
              className="text-black text-[14px] font-semibold mb-[1.25rem] cursor-pointer"
            >
              Notifications
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
