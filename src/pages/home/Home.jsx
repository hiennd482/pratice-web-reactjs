import React from "react";
import "./Home.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/sgcontent/Content";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  const location = useLocation();
  return (
    <div className=" bg-[red] py-[22px] px-3 w-[87%] ml-[13%] ">
      {/* <Sidebar></Sidebar> */}

      <div className="inline">
        {/* <Navbar></Navbar> */}
        {/* <Content></Content> */}
      </div>
    </div>
  );
}

export default Home;
