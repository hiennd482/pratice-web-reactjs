import React, { useEffect, useRef, useState } from "react";
import "./dropdown.scss";
const Dropdown = () => {
  const [opendrop, setOpendrop] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpendrop(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });
  return (
    <div className="m-3 p-4">
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Dropdown</h2>
      </div>
      <div className="grid grid-cols-2 gap-7 mb-4">
        {/* first row */}
        <div className="border border-black/10 dark:boder-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Basic</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <div ref={menuRef}>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn-element items-center font-normal bg-[#f3f3f3] hover:text-white border hover:bg-black"
                  onClick={() => setOpendrop(!opendrop)}
                >
                  Dropdown Menu
                  <svg
                    class="w-4 h-4 ml-1"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071L15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L26.7071 12.7071C26.8946 12.5196 27 12.2652 27 12C27 11.7348 26.8946 11.4804 26.7071 11.2929C26.5196 11.1054 26.2652 11 26 11C25.7348 11 25.4804 11.1054 25.2929 11.2929L16 20.5858L6.70711 11.2929Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <ul
                  className={`${
                    opendrop ? "actdrop" : "inactdrop"
                  }  right-0 px-3  whitespace-nowrap text-sm bg-white shadow duration-300 `}
                >
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a href="">Another action</a>
                  </li>
                  <li>
                    <a href="">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* dropdown 2 */}
            <div className="dropdown">
              <button
                type="button"
                className="btn-element items-center font-normal bg-white hover:text-white border hover:bg-black"
                // onClick={() => setOpendrop(!opendrop)}
              >
                Dropdown Menu
                <svg
                  class="w-4 h-4 ml-1"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071L15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L26.7071 12.7071C26.8946 12.5196 27 12.2652 27 12C27 11.7348 26.8946 11.4804 26.7071 11.2929C26.5196 11.1054 26.2652 11 26 11C25.7348 11 25.4804 11.1054 25.2929 11.2929L16 20.5858L6.70711 11.2929Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <ul
                className={` inactdrop right-0 px-3  whitespace-nowrap text-sm bg-white shadow duration-300 `}
              >
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a href="">Another action</a>
                </li>
                <li>
                  <a href="">Something else here</a>
                </li>
              </ul>
            </div>

            {/* dropdown 3 */}
            <div className="dropdown">
              <button
                type="button"
                className="btn-element items-center font-normal bg-indigo-300 hover:text-black border hover:bg-white hover:border-indigo-300"
                // onClick={() => setOpendrop(!opendrop)}
              >
                Primary
                <svg
                  class="w-4 h-4 ml-1"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071L15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L26.7071 12.7071C26.8946 12.5196 27 12.2652 27 12C27 11.7348 26.8946 11.4804 26.7071 11.2929C26.5196 11.1054 26.2652 11 26 11C25.7348 11 25.4804 11.1054 25.2929 11.2929L16 20.5858L6.70711 11.2929Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <ul
                className={` inactdrop right-0 px-3  whitespace-nowrap text-sm bg-white shadow duration-300 `}
              >
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a href="">Another action</a>
                </li>
                <li>
                  <a href="">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
