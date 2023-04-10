import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/sgcontent/Content";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  const location = useLocation();
  return (
    <div className="flex bg-black mt-10 text-white">
      {/* <Sidebar></Sidebar> */}

      {/* <Navbar></Navbar> */}
      {/* <div>
          <Content></Content>

        </div> */}

      <span>home</span>
    </div>
  );
}

export default Home;
