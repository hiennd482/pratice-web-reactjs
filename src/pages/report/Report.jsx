import React, { useEffect } from "react";
import { MdMonitor } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";

import "./Report.scss";

function Report() {
  useEffect(() => {
    const accordionHeader = document.querySelectorAll(".accordion-header");
    console.log("max accordionHeader:", accordionHeader);
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        // setCount(count + 1);

        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;
        console.log("max height:", accordionMaxHeight);
        // Condition handling
        if (accordionMaxHeight === "0px" || accordionMaxHeight.length === 0) {
          console.log("click accordion1", accordionHeader);
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 22
          }px`;
          header.querySelector(".fas").classList.remove("fa-arrow-down");
          header.querySelector(".fas").classList.add("fa-arrow-up");
          // header.parentElement.classList.add("bg-indigo-50");
        } else {
          console.log("click accordion2", accordionHeader);
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-arrow-down");
          header.querySelector(".fas").classList.remove("fa-arrow-up");
          // header.parentElement.classList.remove("bg-indigo-50");
        }
      });
    });

    return () => {};
  });
  return (
    <div className="border border-black/10 p-5 rounded-md m-2 sm:m-[10px] lg:m-4">
      <div className="mb-2 lg:mb-5">
        <p className="text-sm font-semibold mb-2">With Icon</p>
        <div className="mb-1">
          <div className=" transition border border-black/20 rounded">
            <div className="accordion-header transition ">
              <button
                type="button"
                className=" flex text-[14px] justify-between items-center p-4  w-full text-black/70"
              >
                <div className="flex items-center ">
                  <MdMonitor className="mr-2"></MdMonitor>
                  Accordion item 1
                </div>
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>

            <div className="accordion-content text-black text-sm overflow-hidden pt-0 border-t max-h-0 border-black/10">
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicinf elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className=" transition border border-black/20 rounded">
            <div className="accordion-header transition ">
              <button
                type="button"
                className=" flex text-[14px] justify-between items-center p-4  w-full text-black/70"
              >
                <div className="flex items-center ">
                  <MdMonitor className="mr-2"></MdMonitor>
                  Accordion item 1
                </div>
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>

            <div className="accordion-content text-black text-sm overflow-hidden pt-0 border-t max-h-0 border-black/10">
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicinf elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
