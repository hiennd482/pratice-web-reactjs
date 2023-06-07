import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
// import "./loader.css";
import "../../../node_modules/draft-js/dist/Draft.css";
import { useRef } from "react";
const Loader = () => {
  return (
    <div className="p-4 sm:p-7 min-h-[calc(100vh-145px)]">
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Loader</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* loader 1 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Border Spinner</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 ">
            <div className="animate-spin inline-block w-8 h-8 border-[3px] border-l-transparent border-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* loader 2 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Size Spinner</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 ">
            <div className="animate-spin inline-block w-10 h-10 border-[3px] border-l-transparent border-black/60 rounded-full"></div>
            <div className="animate-spin inline-block w-5 h-5 border-[3px] border-l-transparent border-black/60 rounded-full"></div>
          </div>
        </div>

        {/* loader 3 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Custom Spinner</p>
          </div>
          <div className="flex flex-wrap items-center gap-10 justify-center">
            <div className="animate-spin inline-block w-14 h-14 border-8  border-l-transparent border-l-indigo-400 border-black/10 rounded-full align-middle"></div>
            <div className="animate-[spin_2s_linear_infinite] w-14 h-14 border-8 border-black/10 border-l-indigo-400 border-r-red-600 rounded-full align-middle inline-block"></div>
            <div className="animate-[spin_3s_linear_infinite] w-14 h-14 border-8 border-r-yellow-500 border-l-indigo-500 border-t-red-500 border-b-green-500 rounded-full inline-block align-middle"></div>
          </div>
        </div>

        {/* loader 4 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Button loader</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="btn bg-black/10 group duration-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black text-sm"
            >
              <span className="animate-spin border-2 border-black group-hover:border-white dark:group-hover:border-black group-hover:border-l-black border-l-transparent rounded-full w-5 h-5 mr-2 inline-block align-middle"></span>
              Loading
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>asd</h1>
      </div>
    </div>
  );
};

export default Loader;
