import React, { useState } from "react";
import "./sidebar2.scss";
import { BsChevronRight } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";

function Sidebaritem({ item }) {
  const [opentiem, setOpentiem] = useState(false);
  if (item.childrens) {
    return (
      <div className=" " onClick={() => setOpentiem(!opentiem)}>
        <p className="text-[lightgray] text-[14px]">{item.cate}</p>
        <li
          className={`
           
        
           gap-x-1  text-[14px] px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md
             
           `}
        >
          {/* <div className="flex items-center"> */}
          <BsChevronRight
            className={`  float-left lg:block text-[gray] duration-200 ${
              opentiem && "rotate-90 "
            }`}
          ></BsChevronRight>
          {/* <div
            className={` ${
              opentiem
                ? "gap-1 duration-300 px-1 cursor-pointer  flex flex-col items-center hover:bg-[lightgray] rounded-md "
                : ""
            }`}
          > */}

          {item.icon && <i className={item.icon}></i>}
          {item.title}
          {/* </div> */}
          {/* </div> */}
        </li>
        <div className={`${opentiem ? "activechild" : "inactivechild"}`}>
          <ul className={` `}>
            <li className={`pl-4   `}>
              {/* <a href=""></a> */}
              {item.childrens.map((child, index) => (
                <Sidebaritem key={index} item={child} />
              ))}
            </li>
          </ul>
        </div>

        {/* <div className={` `}>
          <ul className={`   `}>
            <div className={` ${opentiem ? "activechild" : "inactivechild"}`}>
              <li
                className={` fixed
               pl-4 `}
              >
                {item.childrens.map((child, index) => (
                  <Sidebaritem key={index} item={child} />
                ))}
              </li>
            </div>
          </ul>
        </div> */}
      </div>
    );
  } else {
    return (
      <a
        href={item.path || "#"}
        className=" gap-y-[5px] gap-x-1 text-[14px] pl-[30px] duration-300 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md  "
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}

export default Sidebaritem;
