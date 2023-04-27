import React from "react";
import Carousel from "./Carousel";

function Index() {
  const slides = [
    "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    // "https://i.ibb.co/yg7BSdM/4.png",
  ];
  return (
    <div>
      <div className="max-w-lg ">
        <Carousel>{[...slides.map((s) => <img src={s} />)]}</Carousel>
      </div>
    </div>
  );
}

export default Index;
