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
