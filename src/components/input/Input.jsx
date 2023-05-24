import React from "react";
import "./input.scss";
import bellicon from "../../assets/bellinput.svg";

const Input = () => {
  return (
    <div className="m-3 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* input 1 */}
        <div class="relative flex items-center ">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-l-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <div className=" rounded-r-lg border  border-black/10 px-3.5  py-[0.82rem]  text-sm">
            <span className="">@site.com</span>
          </div>
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-12 left-1"
          >
            Floating outlined
          </label>
        </div>
        {/* input 2 */}
        <div class="relative z-0">
          <input
            type="text"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Floating standard
          </label>
        </div>

        {/* input 3 */}
        <div className="flex -space-x-px-4 mb-4">
          <select className=" font-normal pl-4   py-2.5  text-sm w-16 rounded-l-full border border-black/10 dark:border-white/10 bg-white hover:border-black focus:z-10 focus:border-black">
            <option value="">$</option>
            <option value="">&</option>
            <option value="">%</option>
          </select>
          <input
            type={"text"}
            className={`w-full border border-black/10 bg-transparent px-3 py-2.5 placeholder:text-black/60 hover:z-10 hover:border-black focus:z-10 focus:border-black`}
            placeholder="Price"
          />
          <button className=" p-2 duration-300 hover:text-white text-sm rounded-r-full bg-black/20 dark:bg-white/20 font-semibold text-black hover:bg-black focus:bg-black active:bg-black">
            Purchase
          </button>
        </div>

        {/* input 4 */}
        <div className="flex mb-4">
          <div className="bg-black/80 dark:bg-white/80 flex justify-center items-center rounded-l-md px-3 font-semibold text-white dark:text-black border border-r-0 border-black/10 dark:border-white/10">
            <img
              src={bellicon}
              alt=""
              className="w-5 h-5 brightness-0 invert-[1] "
            />
          </div>
          <input
            type="text"
            placeholder="Notification"
            className="!rounded-l-none py-2.5 px-4 w-full text-black dark:text-white border border-black/10 rounded-lg placeholder:text-black/20  focus:border-black focus:ring-0 focus:shadow-none"
          />
        </div>

        {/* input 5 */}
        <div className="flex mb-4">
          <button className="items-center justify-center  !rounded-r-none btn-element bg-[#1c1c1c0d]  hover:text-white hover:bg-black">
            Button
          </button>
          <input
            type="text"
            placeholder="text"
            className=" text-sm  !rounded-l-none py-2.5 px-4 w-full text-black border border-black/10 rounded-lg placeholder:text-black/20 focus:border-black focus:ring-0 focus:shadow-none "
          />
        </div>

        {/* input 6 */}
        <div className="flex -space-x-px mb-4">
          <input
            type="text"
            className="w-full rounded-l-lg border border-black/10 bg-transparent px-3 py-2.5 placeholder:text-black/60 hover:z-10 hover:border-black focus:z-10"
            placeholder="Username"
          />
          <div className="flex items-center justify-center border border-black/10 bg-black/20 px-3.5 text-black">
            <span className="-mt-1">@</span>
          </div>
          <input
            type="text"
            className="w-full rounded-r-lg border border-black/10 bg-transparent px-3 py-2.5 placeholder:text-black/60 hover:z-10 hover:border-black focus:z-10"
            placeholder="Server"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
