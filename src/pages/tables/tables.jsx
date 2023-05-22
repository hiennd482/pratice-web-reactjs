import React, { useEffect, useMemo, useState } from "react";
import "./tables.scss";
import avt from "../../assets/avt.jpg";
import calendar from "../../assets/lich.svg";
import dot from "../../assets/dot.svg";
import data from "../testdata/usermockdata.json";
import Pagination from "../../components/Pagination2/Pagination";
let PageSize = 10;
const Tables = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Drawer = "opendrawer-bottom";

  // const position = " left-0 ";
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  useEffect(() => {
    const button = document.querySelector(".btn-drawer"),
      drawer = document.querySelector(".drawer");

    const closeBtn = document.querySelector(".close-btn"),
      bg = document.querySelector(".bg-nen");

    button.addEventListener("click", () => {
      if (Drawer === "opendrawer-left" || Drawer === "opendrawer-right") {
        drawer.classList.add("active-drawer");
        bg.classList.add("active-bg");
      } else if (Drawer === "opendrawer-top") {
        drawer.classList.add("active-drawertop");
        bg.classList.add("active-bg");
      } else {
        drawer.classList.add("active-drawerbottom");
        bg.classList.add("active-bg");
      }
    });

    closeBtn.addEventListener("click", () => {
      if (Drawer === "opendrawer-left" || Drawer === "opendrawer-right") {
        drawer.classList.remove("active-drawer");
        bg.classList.remove("active-bg");
      } else if (Drawer === "opendrawer-top") {
        drawer.classList.remove("active-drawertop");
        bg.classList.remove("active-bg");
      } else {
        drawer.classList.remove("active-drawerbottom");
        bg.classList.remove("active-bg");
      }
    });
  });
  return (
    <div className="border bg-[#f7f9fb]  border-black/10 p-5 m-2 rounded-md lg:col-span-2 relative">
      <div className="mb-1 ">
        <p className="text-sm font-semibold">Checkboxes</p>
        <div className="flex flex-col items-start">
          <button className="btn-drawer">on</button>
        </div>
      </div>
      <div
        className={`  drawer ${Drawer} fixed z-[51] p-2  duration-200  ease-in-out  bg-[blue] border-1 `}
      >
        <button className="close-btn">X</button>
        <p className="text-sm text-white">
          <p>
            With the hidden value, the overflow is clipped, and the rest of the
            content is hidden:
          </p>
          <p>Try to remove the overflow property to understand how it works.</p>
        </p>
      </div>

      <div
        class={` bg-nen hidden fixed inset-0 bg-[black]/60 z-50  duration-700`}
      ></div>
      {/* <div
        className={`${
          openslide ? "acttest animate-fadene" : "intest"
        } fixed z-50 inset-0 hidden bg-[black]/60`}
      >
        <div
          className={`  w-[250px] absolute right-0 animate-trans allchild   h-screen bg-[red]`}
        >
          <button onClick={() => setOpenslide(!openslide)}>exit</button>
        </div>
      </div> */}
      <div className="table-responsive">
        <table className="table-hover">
          <caption class="caption-top text-xs text-black/50">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <thead>
            <tr className="border-b border-black/20 ">
              <th className="flex items-center">
                <input
                  type="checkbox"
                  id="all"
                  className="h-3 w-3 ttq rounded border bg-white text-black focus:ring-0 focus:ring-offset focus:shadow-none focus:outline-0"
                />
                <label for="all" className="ml-4 block">
                  Order ID
                </label>
              </th>
              <th>Email</th>
              <th>Registration Date</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((value, i) => (
              <tr
                key={i}
                className="group text-xs border-b border-black/20 hover:bg-lightwhite"
                // onClick={() => setOpenslide(!openslide)}
              >
                {" "}
                {/* <button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">
                  ☰
                </button> */}
                <td className="whitespace-nowrap">
                  <div className="flex items-center">
                    <input type="checkbox" id="all" className="h-3 w-3 taw " />
                    <div className="flex items-center gap-2 ml-4">
                      <img
                        src={avt}
                        alt=""
                        className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white"
                      />
                      <p className="flex-1">{value.first_name}</p>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap">{value.email}</td>
                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <img src={calendar} alt="" />
                    <p>{value.phone}</p>
                  </div>
                </td>
                <td className="">
                  <button type="button" className="text-transparent btn  ">
                    <img src={calendar} alt="" className="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Tables;
