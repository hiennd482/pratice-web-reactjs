import React, { useEffect } from "react";
import { MdMonitor } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";

// import "./Report.scss";

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
          header.parentElement.classList.remove("text-black/70");
          // header.parentElement.classList.remove("border-t-0");
          header.parentElement
            .querySelector(".test")
            .classList.add("duration-300");
          // header.parentElement
          //   .querySelector(".accordion-content")
          //   .classList.remove("hidden");
        } else {
          console.log("click accordion2", accordionHeader);
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-arrow-down");
          header.querySelector(".fas").classList.remove("fa-arrow-up");
          header.parentElement.classList.add("text-black/70");
          // header.parentElement.classList.add("border-t-0");
          // header.parentElement
          //   .querySelector(".accordion-content")
          //   .classList.add("border-t-[50px]");
          // header.parentElement
          //   .querySelector(".accordion-content")
          //   .classList.add("hidden");
          header.parentElement
            .querySelector(".test")
            .classList.add("duration-300");
        }
      });
    });

    return () => {};
  });
  return (
    <div className="border  border-black/10 p-5 rounded-md m-2 sm:m-[10px] lg:m-4">
      <div className="mb-2 lg:mb-5">
        <p className="text-sm font-semibold mb-2">Withsss Isssdcons</p>
        <div className="mb-1">
          <div className=" transition border border-[red] rounded text-black/70 ">
            <div className="accordion-header transition ">
              <button
                type="button"
                className=" flex text-[14px] justify-between items-center p-[1rem]  w-full "
              >
                <div className="flex items-center tes duration-300 ">
                  <MdMonitor className="mr-3"></MdMonitor>
                  Accordion item 111assdas
                </div>
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>

            <div className="accordion-content test text-black text-sm overflow-hidden pt-0 border max-h-0 border-black/10">
              <p className="p-[1rem] ">
                Lorem ipssum dolor sitss amet, conssecstedturs adipisicinf elit,
                sed do eiusmod tempor incidisdunt ut labore et dolore magna
                aliqua. Utss
              </p>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className=" transition border  rounded text-black/70">
            <div className="accordion-header transition ">
              <button
                type="button"
                className=" flex text-[14px] justify-between items-center p-[1rem]  w-full "
              >
                <div className="flex items-center ">
                  <MdMonitor className="mr-2"></MdMonitor>
                  Accordion item 12
                </div>
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>

            <div className="accordion-content  overflow-hidden text-black text-sm  pt-0 border-t  max-h-0 border-black/10">
              <p className="p-[1rem] ">
                Lorem ipsum dolor sssits samet, consectetur adipisicinsf elit,s
                sed doa eiusmod tempor incidisdunt ut labore et dolore magna
                aliqua. Utdd
              </p>
            </div>

            {/* <div className=" overflow-hidden" hidden>
              <div className="accordion-content text-black text-sm pt-0 max-h-0 border-black/10">
                <div className="bg-black/10 h-[1px]"></div>
                <p className="p-[1rem] ">
                  Lorem ipsum dolor sssits samet, consectetur adipisicinsf
                  elit,s sed doa eiusmod tempor incidisdunt ut labore et dolore
                  magna aliqua. Utdd
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
