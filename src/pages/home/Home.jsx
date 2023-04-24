import React, { useEffect } from "react";
import "./Home.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/sgcontent/Content";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  const location = useLocation();

  return (
    <div className="  py-[22px] px-3  ">
      <select name="" id="" className="outline-none px-2">
        <option value="today">Today</option>
        <option value="week">Week</option>
        <option value="moth">Moth</option>
      </select>
      <div className="flex">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.24rem]">
          {" "}
          <div className="duration-400 ">
            <Content></Content>
          </div>
          <div className="hover:animate-fadene">
            <Content></Content>
          </div>
          <Content></Content>
          <Content></Content>
        </div>
      </div>
      {/* 
      <div className="bg-[red] w-[100px] h-[100px] relative animate-boxJump"></div>
      <div className="h-1 bg-black w-[180px]"></div> */}
    </div>
  );
}

export default Home;
