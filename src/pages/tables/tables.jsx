import React from "react";
import "./tables.scss";
import avt from "../../assets/avt.jpg";
import calendar from "../../assets/lich.svg";
import dot from "../../assets/dot.svg";

const Tables = () => {
  return (
    <div className="border bg-[#f7f9fb]  border-black/10 p-5 m-2 rounded-md lg:col-span-2">
      <div className="mb-1">
        <p className="text-sm font-semibold">Checkboxes</p>
      </div>
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
            <tr className="group text-xs border-b border-black/20 hover:bg-lightwhite">
              <td className="whitespace-nowrap">
                <div className="flex items-center">
                  <input type="checkbox" id="all" className="h-3 w-3 taw " />
                  <div className="flex items-center gap-2 ml-4">
                    <img
                      src={avt}
                      alt=""
                      className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white"
                    />
                    <p className="flex-1">Kate sdfasdfsdf</p>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap">hidend@gmail.com</td>
              <td className="whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <img src={calendar} alt="" />
                  <p>Today,19:40</p>
                </div>
              </td>
              <td className="">
                <button type="button" className="text-transparent btn  ">
                  <img src={calendar} alt="" className="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
