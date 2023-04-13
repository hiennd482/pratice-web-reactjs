import React, { useState } from "react";
// import "./sidebar.scss";
import { BsChevronRight } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";

function Sidebaritem({ item }) {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <>
        <li
          className={`
           
              gap-1 duration-300 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md
             
           `}
        >
          {/* <div className="flex items-center"> */}
          <BsChevronRight
            className={` float-left lg:block text-[gray] duration-200 ${
              open && "rotate-90 "
            }`}
            onClick={() => setOpen(!open)}
          ></BsChevronRight>
          {/* <div
            className={` ${
              open
                ? "gap-1 duration-300 px-1 cursor-pointer  flex flex-col items-center hover:bg-[lightgray] rounded-md "
                : ""
            }`}
          > */}

          {item.icon && <i className={item.icon}></i>}
          {item.title}
          {/* </div> */}
          {/* </div> */}
        </li>
        {open && (
          <ul>
            <li
              className={`
                      
                       pl-4
                        
                     `}
            >
              {item.childrens.map((child, index) => (
                <Sidebaritem key={index} item={child} />
              ))}
            </li>
          </ul>
        )}
      </>
    );
  } else {
    return (
      <a
        href={item.path || "#"}
        className="gap-1 pl-[30px] duration-300 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md  "
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}

export default Sidebaritem;
