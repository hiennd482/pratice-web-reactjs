import React, { useEffect, useState } from "react";
import "./product.scss";
function Product() {
  const [opent, setOpent] = useState(false);
  useEffect(() => {
    const showScrollbars = (evt) => {
      const el = evt.currentTarget;
      clearTimeout(el._scrolling); // Cancel pending class removal

      el.classList.add("is-scrolling"); // Add class

      el._scrolling = setTimeout(() => {
        // remove the scrolling class after 2500ms
        el.classList.remove("is-scrolling");
      }, 2500);
    };

    document.querySelectorAll("[data-scrollbars]").forEach((el) => {
      el.addEventListener("scroll", showScrollbars);
    });
  });
  // const showScrollbars = (evt) => {
  //   const el = evt.currentTarget;
  //   clearTimeout(el._scrolling); // Cancel pending class removal

  //   el.classList.add("is-scrolling"); // Add class

  //   el._scrolling = setTimeout(() => {
  //     // remove the scrolling class after 2500ms
  //     el.classList.remove("is-scrolling");
  //   }, 2500);
  // };

  // document.querySelectorAll("[data-scrollbars]").forEach((el) => {
  //   el.addEventListener("scroll", showScrollbars);
  // });
  return (
    <div className="di">
      <div className="data-scrollbars">
        <p className="h-[300vh]">
          Just some tall paragraph to force DIV scrosllbars... Scroll me!
        </p>
      </div>
      {/* <span>product</span>
      product */}
    </div>
  );
}

export default Product;
