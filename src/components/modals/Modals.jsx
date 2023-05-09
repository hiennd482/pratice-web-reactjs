import React, { useState, useEffect, useRef } from "react";
import exit from "../../assets/btnx.svg";
import "./index.scss";

function Modals() {
  const [isopen, setIsopen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsopen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="p-4 sm:p-7 min-h-[calc(100vh-145px)]">
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Modals</h2>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="border boder-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Static</p>
          </div>
          <div>
            <div className="flex  items-center justify-center text-[14px]">
              <button
                className="bg-[#f3f3f3] px-3 py-2 rounded-md hover:bg-black hover:text-white duration-300"
                onClick={() => setIsopen(!isopen)}
              >
                Static modal
              </button>
            </div>

            <div
              className={`${
                isopen ? "act" : "inact"
              } fixed inset-0 hidden  bg-black/60 z-[999] overflow-y-auto `}
            >
              <div className="flex  items-start justify-center min-h-screen px-4   ">
                <div className="animate-modal transition-all transform bg-white relative shadow-3xl border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg">
                  <div className="flex bg-white items-center border-b border-black/10 justify-between px-5 py-3">
                    <h5 className="font-semibold text-lg">Lorem ne hihi</h5>
                    <button
                      className=" hover:text-black"
                      onClick={() => setIsopen(!isopen)}
                    >
                      <img className="text-gray-400 w-4" src={exit} alt="" />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-black">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <div
                      ref={menuRef}
                      className="flex justify-end items-center mt-8 gap-4"
                    >
                      <button className="px-4 py-2 rounded-md !bg-[red] !text-white text-[14px]">
                        Discard
                      </button>
                      <button className="px-4 py-2 rounded-md bg-[#f3f3f3] text-black hover:bg-black hover:text-white  text-[14px]">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
