import React, { useState } from "react";
import "./checkbox.scss";
const Checkbox = () => {
  const [opennoti, setOpennoti] = useState(false);
  return (
    <div className="m-3 p-4">
      {/* <div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck"
            class="checkbox1"
            name="check"
          />
          <label for="squaredcheck">
            <span>Checkbox Blue Color</span>
          </label>
        </div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck2"
            class="checkbox2"
            name="check"
          />
          <label for="squaredcheck2">
            <span>Checkbox Green Color</span>
          </label>
        </div>
        <div class="squaredcheck">
          <input
            type="checkbox"
            value="None"
            id="squaredcheck3"
            class="checkbox3"
            name="check"
          />
          <label for="squaredcheck3">
            <span>Checkbox Violet Color</span>
          </label>
        </div>
      </div> */}
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Switches</h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7 ">
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Solid</p>
          </div>
          <label className="inline-flex toggle1  ">
            <input type="checkbox" />

            <div className="slider"></div>
            {/* <span>sdf</span> */}
          </label>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Solid Rounded</p>
          </div>
          <label className="inline-flex toggle2 ">
            <input type="checkbox" />

            <div className="slider"></div>
            {/* <span>sdf</span> */}
          </label>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Outline</p>
          </div>
          <label className="inline-flex toggle1 more">
            <input type="checkbox" />

            <div className="slider"></div>
            {/* <span>sdf</span> */}
          </label>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Outline Rounded</p>
          </div>
          <label className="inline-flex toggle2 more2">
            <input type="checkbox" />

            <div className="slider"></div>
            {/* <span>sdf</span> */}
          </label>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Left</p>
          </div>
          <button
            className="border text-white bg-blue-400 rounded-md px-2 tl"
            onClick={() => setOpennoti(!opennoti)}
          >
            Top Left
          </button>
          {/* notification */}
          <div
            className={` ${
              opennoti ? "act-noti" : "inacti-noti"
            }  fixed  transition-all -left-72 top-0 bg-white rounded-md w-[250px]  h-[100px] drop-shadow-lg `}
          >
            <div className={`p-2 `}>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {" "}
                  <span className="  bg-[blue]  text-white w-3 h3">i</span>
                  <h2> Notification topLeft</h2>
                </div>
                <button>X</button>
              </div>
              <div>
                <p className="">Hello,Ant Design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Right</p>
          </div>
          <label className="inline-flex toggle2 more2">
            <input type="checkbox" />

            <div className="slider"></div>
            {/* <span>sdf</span> */}
          </label>
        </div>
      </div>

      {/* <div className="grid gird-cols-1 gap-3">
        <label className="inline-flex ">
          <input
            id="cb1"
            type="checkbox"
            class="focus:ring-red-500 w-6 h-7 cbb"
          />

          <span>sdf</span>
        </label>
      </div> */}
    </div>
  );
};

export default Checkbox;
