import React from "react";

const Badges = () => {
  return (
    <div className="m-3 p-4">
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Badges</h2>
      </div>

      <div className="grid grid-cols-1 gap-7">
        {/* row 1 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Badge</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded text-xs justify-center px-2 py-1 bg-indigo-300 text-black">
              Primary
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Badge</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full text-xs justify-center px-2 py-1 bg-indigo-300 text-black">
              Primary
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold"> Glow Badge</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full shadow-[0_0_16px] shadow-indigo-500/50  text-xs justify-center px-2 py-1 bg-indigo-300 text-black">
              Primary
            </div>
            <div className="inline-flex items-center rounded-full shadow-[0_0_16px] shadow-[#ff474780]  text-xs justify-center px-2 py-1 bg-[#ff4747] text-black">
              Error
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Badges with Dots</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex  items-center space-x-2.5 text-xs justify-center px-2 py-1  text-indigo-300">
              <div className="h-1.5 w-1.5 rounded-full  bg-current"></div>
              <span>Primary</span>
            </div>
            <div className="inline-flex  items-center space-x-2.5 text-xs justify-center px-2 py-1  text-[#ff4747]">
              <div className="h-1.5 w-1.5 rounded-full  bg-current"></div>
              <span>Error</span>
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Badges in Buttons</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-block rounded-lg bg-[#1c1c1c0d] py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-black hover:text-white "
            >
              Notifications
              <span className="px-1 bg-[#baedbd] text-xs rounded text-black ml-3">
                4
              </span>
            </button>
            <button
              type="button"
              className="inline-block border border-black rounded-lg  py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-black hover:text-white "
            >
              Draft
              <span className="px-1 bg-[#baedbd] text-xs rounded text-black ml-3">
                2
              </span>
            </button>
          </div>
        </div>

        {/* row 6 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Rounded badges with size</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <span className="bg-violet text-white text-[10px] px-1.5 py-0.5 rounded">
                <span className="p-0.5 rounded-full bg-white inline-block mr-2 align-middle"></span>
                Small
              </span>
            </div>
            <div>
              <span className="bg-violet text-white text-xs px-2 py-1 rounded">
                <span className="p-1 rounded-full bg-white inline-block mr-2 align-middle"></span>
                Large
              </span>
            </div>
            <div>
              <span className="bg-[#ff4747] text-white text-[10px] px-1.5 py-0.5 rounded-full">
                <span className="p-0.5 rounded-full bg-white inline-block mr-2 align-middle"></span>
                Small
              </span>
            </div>
            <div>
              <span className="bg-[#ff4747] text-white text-xs px-2 py-1 rounded-full">
                <span className="p-1 rounded-full bg-white inline-block mr-2 align-middle"></span>
                Large
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
