import React, { useState } from "react";
import "./sidebar2.scss";
import { BsChevronRight } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { ImStack } from "react-icons/im";

function Sidebaritem({ item }) {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <>
        <p className="text-[lightgray] text-[14px]">{item.cate}</p>
        <li
          className={`
           
        
           gap-x-1  text-[14px] duration-300 px-1 cursor-pointer flex items-center hover:bg-[lightgray] rounded-md
             
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

        {/* {open && (
          <ul className={`${open ? "activechild" : "inactivechild"}`}>
            <li
              className={`
                      
                       
                        
              duration-300 pl-4 `}
            >
              {item.childrens.map((child, index) => (
                <Sidebaritem key={index} item={child} />
              ))}
            </li>
          </ul>
        )} */}
        <div className={``}>
          <ul className={``}>
            <div className={`${open ? "activechild" : "inactivechild"}`}>
              <li
                className={`block
               pl-4 `}
              >
                {item.childrens.map((child, index) => (
                  <Sidebaritem key={index} item={child} />
                ))}
              </li>
            </div>
          </ul>
        </div>
      </>
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
