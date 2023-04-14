import React, { useState } from "react";

function Product() {
  const [opent, setOpent] = useState(false);
  return (
    <div className="">
      <div className="flex h-screen">
        <div
          className={` bg-red-400 text-white ${
            opent ? "left-0" : "left-[-10.5rem]"
          } duration-500  `}
        >
          {" "}
          <button
            type="submit"
            className="p-3 bg-slate-500"
            onClick={() => setOpent(!opent)}
          >
            clcik
          </button>
          red
        </div>
        <div className="bg-blue-500 text-white w-[100%] duration-700 ">
          blue
        </div>
      </div>
      {/* <span>product</span>
      product */}
    </div>
  );
}

export default Product;
