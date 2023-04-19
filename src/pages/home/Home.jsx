import React, { useEffect } from "react";
import "./Home.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/sgcontent/Content";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log("max accordionHeader:");
    // accordionHeader.forEach((header) => {
    //   header.addEventListener("click", function () {
    //     // setCount(count + 1);

    //     const accordionContent =
    //       header.parentElement.querySelector(".accordion-content");
    //     let accordionMaxHeight = accordionContent.style.maxHeight;
    //     console.log("max height:", accordionMaxHeight);
    //     // // Condition handling
    //     // if (accordionMaxHeight === "0px" || accordionMaxHeight.length === 0) {
    //     //   console.log("click accordion1", accordionHeader);
    //     //   accordionContent.style.maxHeight = `230px`;
    //     //   header.querySelector(".fas").classList.remove("fa-plus");
    //     //   header.querySelector(".fas").classList.add("fa-minus");
    //     //   header.parentElement.classList.add("bg-indigo-50");
    //     // } else {
    //     //   console.log("click accordion2", accordionHeader);
    //     //   accordionContent.style.maxHeight = `0px`;
    //     //   header.querySelector(".fas").classList.add("fa-plus");
    //     //   header.querySelector(".fas").classList.remove("fa-minus");
    //     //   header.parentElement.classList.remove("bg-indigo-50");
    //     // }
    //   });
    // });

    return () => {};
  }, []);
  return (
    <div className="  py-[22px] px-3  ">
      <select name="" id="" className="outline-none px-2">
        <option value="today">Today</option>
        <option value="week">Week</option>
        <option value="moth">Moth</option>
      </select>
      <div className="flex mr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.24rem]">
          {" "}
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
        </div>
      </div>
    </div>
  );
}

export default Home;
