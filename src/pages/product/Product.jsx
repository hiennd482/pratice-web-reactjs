import React, { useState } from "react";

function Product() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex h-screen">
        <div className={`bg-red-400 text-white ${open ? "w-[40%]" : "w-2"}   `}>
          red
        </div>
        <div className="bg-blue-500 text-white w-[100%] duration-700 ">
          <button
            type="submit"
            className="p-3 bg-slate-500"
            onClick={() => setOpen(!open)}
          >
            clcik
          </button>
          blue
        </div>
      </div>
      {/* <span>product</span>
      product */}
    </div>
  );
}

export default Product;
