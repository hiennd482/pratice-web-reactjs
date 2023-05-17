import React, { useState } from "react";
import "./index.scss";
const Index = () => {
  const [opentoast, setOpentoast] = useState("toast-left");

  const Handleleft = () => {
    setOpentoast("toast-left active");
  };
  const Handleright = () => {
    setOpentoast("toast-right active");
  };
  const Exit = () => {
    setOpentoast("toast-left");
  };
  return (
    <div className="overflow-hidden p-3 test">
      {" "}
      <div class={`toast p-3 ${opentoast} `}>
        <div class="toast-content">
          <i class="fas fa-solid fa-check check"></i>

          <div class="message p-3">
            <span class="text text-1">Success</span>
            <span class="text text-2">Your changes has been saved</span>
          </div>
        </div>
        <i class="fa-solid fa-xmark close" onClick={(e) => Exit(e)}></i>

        <div class="progress"></div>
      </div>
      <div className="flex mt-[130px]">
        <button className="btnn" onClick={(e) => Handleleft(e)}>
          Show Toast left
        </button>
        <button className="mr-2" onClick={(e) => Handleright(e)}>
          Show Toast right
        </button>
      </div>
    </div>
  );
};

export default Index;
