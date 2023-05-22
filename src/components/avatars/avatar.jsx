import React from "react";
import avatar from "../../assets/avatar-components/avt1.png";
import avt2 from "../../assets/avatar-components/avt2.png";
import Avtitem from "./Avtitem";
import Imgitem from "./itemsavt.json";
const Avatar = () => {
  return (
    <div className="m-3 p-4">
      {/* row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="border border-black/10 p-5 rounded-md">
          <div className="flex flex-wrap items-center gap-4">
            <img
              src={avatar}
              alt=""
              className="h-24 w-24 flex-none rounded-full object-cover"
            />
          </div>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="flex flex-wrap items-center gap-4">
            <img
              src={avt2}
              alt=""
              className="h-24 w-24 flex-none rounded-md object-cover"
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="flex flex-wrap items-center gap-4">
            <div className=" relative h-24 w-24">
              <img
                src={avatar}
                alt=""
                className="h-24 w-24 flex-none rounded-full object-cover"
              />
              <span className="absolute bottom-0 h-7 w-7 rounded-full bg-red-500 ring-2 ring-white right-0"></span>
            </div>
          </div>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Avatar group</p>
          </div>
          <div className="flex justify-start items-center -space-x-4">
            {/* {Imgitem.map((val, i) => (
              // {val.slice}
              <Avtitem key={i} item={val}></Avtitem>
            ))} */}
            {/* {console.log(Imgitem.length)} */}
            {/* {console.log(Imgitem.slice(0, 3))} */}
            {Imgitem.slice(0, 4).map((val, i) => (
              <Avtitem key={i} item={val}></Avtitem>
            ))}
            {/* {Imgitem.length > 5()} */}
            <span className="flex justify-center items-center w-10 h-10 text-center rounded-full object-cover bg-lightblue text-xs ring-2 ring-white">
              +{Imgitem.length - 3}
            </span>
          </div>
        </div>

        {/* row 3 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5 ">
            <p className="text-sm font-semibold">Avatar with text</p>
          </div>
          <div className="flex flex-wrap items-center space-x-2">
            <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
            <div className="font-medium">
              <h6 className="text-sm">David Jackson</h6>
              <p className=" text-xs text-black/40 dark:text-white/40">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="font-semibold text-sm">Initial Avatar</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-12 w-12 rounded-full flex items-center justify-center font-semibold bg-indigo-300 text-base uppercase text-black">
              JD
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="font-semibold text-sm">Square Initial Avatar</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-12 w-12 rounded-md flex items-center justify-center font-semibold bg-indigo-300 text-base uppercase text-black">
              JD
            </div>
          </div>
        </div>
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5 ">
            <p className="text-sm font-semibold">Border with Avatar</p>
          </div>
          <div className="flex flex-wrap items-center space-x-2">
            <img
              src={avatar}
              alt=""
              className="w-16 h-16 rounded-full border p-1 border-indigo-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
