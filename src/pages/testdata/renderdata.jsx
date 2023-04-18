import React, { useEffect, useState } from "react";
import "./index.scss";
const test = () => {};
function Renderdata() {
  // const [count, setCount] = useState(1);
  useEffect(() => {
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        // setCount(count + 1);

        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 2
          }px`;
          header.querySelector(".fas").classList.remove("fa-plus");
          header.querySelector(".fas").classList.add("fa-minus");
          header.parentElement.classList.add("bg-indigo-50");
        } else {
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-plus");
          header.querySelector(".fas").classList.remove("fa-minus");
          header.parentElement.classList.remove("bg-indigo-50");
        }
      });
      return () => {
        header.removeEventListener("click");
      };
    });
  });
  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-6/12 mx-auto rounded border">
        <div className="bg-white p-10 shadow-sm">
          <h3 className="text-lg font-medium text-gray-500">
            Several Windows stacked on each other
          </h3>
          <p className="text-sm font-light text-gray-600 my-2">
            The accordion is a graphical control element comprising a vertically
            stacked list of items such as labels or thumbnails
          </p>

          <div className="h-1 w-full mx-auto border-b my-5"></div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-[50px]">
              <i className="fas fa-plus"></i>
              <h3>What is term?</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>When to use Accordion Components?</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>How can it be defined?</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>Chamber reached do he nothing be?</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">
                Our asked sex point her she seems. New plenty she horses parish
                design you. Stuff sight equal of my woody. Him children bringing
                goodness suitable she entirely put far daughter.
              </p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Renderdata;
