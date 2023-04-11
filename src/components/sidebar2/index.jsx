import React from "react";
import SidebarItem from "./Items";
import "./sidebar.scss";
import items from "../../pages/testdata/datasidebar.json";
function sidebar2() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default sidebar2;
