import React from "react";

const Processbar = () => {
  return (
    <div className="m-3 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* process 1 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Default Examples</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-4 bg-black/10 rounded-full">
              <div className="bg-black/80 rounded-full h-4 w-3/12"></div>
            </div>
          </div>
        </div>

        {/* process 2 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Background</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-4 bg-black/10 rounded-full">
              <div className="bg-indigo-500 rounded-full h-4 w-3/12"></div>
            </div>
          </div>
        </div>

        {/* process 3 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Labels</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-3 bg-black/10 rounded-full">
              <div className="bg-black/80 rounded-full w-6/12 text-center h-3  flex justify-center items-center">
                <p className="text-[11px] text-white align-middle">50%</p>
              </div>
            </div>
          </div>
        </div>

        {/* process 4 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Multiple bars</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full flex h-3 bg-black/10 rounded-full">
              <div className="bg-[#b1e3ff] h-3 rounded-l w-3/12"></div>
              <div className="bg-[#c6c7f8] h-3  w-3/12"></div>
              <div className="bg-red-500 h-3 rounded-r w-3/12"></div>
            </div>
          </div>
        </div>

        {/* process 5 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">height</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full ">
              <h6 className="text-[13px] text-black mb-1">Process sm </h6>
              <div className="w-full h-1 bg-black/10 rounded-full">
                <div className="bg-indigo-500 h-1 rounded-full w-3/12"></div>
              </div>
            </div>
            <div className="w-full ">
              <h6 className="text-[13px] text-black mb-1">Process md </h6>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#c6c7f8] h-2 rounded-full w-3/12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* process 6 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Stripe</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-4 bg-black/10 rounded-full">
              <div
                className="bg-indigo-600 h-4 rounded-full w-3/12 "
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
                  backgroundSize: "1rem 1rem",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* process 7 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">animate</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-4 bg-black/10 rounded-full ">
              <div
                className="bg-indigo-600 h-4 rounded-full w-3/12 hover:w-6/12 animate-trip transition-all duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
                  backgroundSize: "1rem 1rem",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* process 8 */}
        <div className="border border-black/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Progress Indeterminate</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="w-full h-4 bg-black/10 rounded-full overflow-hidden ">
              <div className="bg-indigo-500 relative h-4 rounded-full w-3/12"></div>
            </div>
            <div className="w-full h-4 bg-black/10 rounded-full overflow-hidden ">
              <div className="bg-yellow-200 relative h-4 rounded-full w-3/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processbar;
