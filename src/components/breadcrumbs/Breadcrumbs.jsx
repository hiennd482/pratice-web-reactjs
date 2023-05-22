import React from "react";
import arrowicon from "../../assets/arrowicon.svg";
import smileicon from "../../assets/slimeicon.svg";
const Breadcrumbs = () => {
  return (
    <div className="m-3 p-4">
      <div className="px-2 py-1 mb-4">
        <h2 className="text-lg font-semibold">Breadcrumbs and Buttons</h2>
      </div>
      <div className="grid grid-cols-1 gap-7 mb-4">
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Breadcrumb</p>
          </div>
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="flex items-center space-x-2">
              <a className="text-black/40 cursor-pointer  dark:text-white/40 transition-colors hover:text-black dark:hover:text-white">
                Home
              </a>
              <img src={arrowicon} alt="" className="w-3.5 h-3.5" />
            </li>
            <li className="flex items-center space-x-2">
              <a className="text-black/40 cursor-pointer dark:text-white/40 transition-colors hover:text-black dark:hover:text-white">
                Elememts
              </a>
              <img
                src={arrowicon}
                alt=""
                className="w-3.5 h-3.5 fill-blue-500"
              />
            </li>
            <li className="">Breadcrumbs</li>
          </ul>
        </div>

        {/* row 2 */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Breadcrumbs With Icons</p>
          </div>
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 stroke-slate-100 hover:stroke-slate-400 cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5858 27.4142C18.5858 27.4142 18 26.8285 18 26V20H14V26C14 26 14 26.8285 13.4142 27.4142C13.4142 27.4142 12.8284 28 12 28H6C6 28 5.17157 28 4.58579 27.4142C4.58579 27.4142 4 26.8285 4 26V14.4375C4 14.4375 4.00679 14.0096 4.17288 13.6327C4.17288 13.6327 4.33896 13.2558 4.63838 12.973L14.6525 3.87246C14.6525 3.87246 15.2232 3.35034 16 3.35034C16 3.35034 16.7768 3.35034 17.35 3.87471L27.3475 12.96C27.3475 12.96 27.661 13.2558 27.8271 13.6327C27.8271 13.6327 27.9932 14.0096 27.9999 14.4213L28 26C28 26 28 26.8285 27.4142 27.4142C27.4142 27.4142 26.8284 28 26 28H20C20 28 19.1716 28 18.5858 27.4142ZM20 26H26L26.0001 14.4537C26.0001 14.4537 26 14.4461 25.9969 14.4392C25.9969 14.4392 25.9958 14.4365 25.9963 14.436C25.9963 14.436 25.9972 14.4353 26.0021 14.4397L16 5.35034L15.9975 5.35259L6.01162 14.427C6.01162 14.427 6.00611 14.4322 6.00305 14.4392C6.00305 14.4392 6.00162 14.4424 6.00086 14.4423C6.00086 14.4423 6 14.4421 6 14.4376V26H12V20C12 20 12 19.1716 12.5858 18.5858C12.5858 18.5858 13.1716 18 14 18H18C18 18 18.8284 18 19.4142 18.5858C19.4142 18.5858 20 19.1716 20 20L20 26Z"
                  fill="currentColor"
                ></path>
              </svg>
              <img src={arrowicon} alt="" className="w-3.5 h-3.5" />
            </li>
            <li className="flex items-center space-x-2">
              <a className="text-black/40 flex cursor-pointer dark:text-white/40 transition-colors hover:text-black dark:hover:text-white">
                <svg
                  className="h-5 w-5 mx-1"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.7311 15.6823L12.7311 30.6823C12.5501 30.8762 12.2995 30.9903 12.0345 30.9994C11.7694 31.0086 11.5116 30.912 11.3177 30.7311C11.0643 30.4946 10.9514 30.1437 11.0194 29.8039L12.8526 20.6377L5.64888 17.9363C5.40055 17.8432 5.19938 17.6553 5.08963 17.4138C4.97989 17.1724 4.97055 16.8972 5.06367 16.6489C5.10972 16.5261 5.17947 16.4136 5.26894 16.3177L19.2689 1.31769C19.6458 0.913935 20.2786 0.892114 20.6823 1.26895C20.9357 1.50543 21.0486 1.85626 20.9806 2.19612L19.1474 11.3623L26.3511 14.0637C26.5995 14.1568 26.8006 14.3448 26.9104 14.5862C27.0201 14.8276 27.0295 15.1028 26.9363 15.3511C26.8903 15.4739 26.8205 15.5865 26.7311 15.6823ZM13.671 26.7441L24.2484 15.4111L17.6489 12.9363C17.1898 12.7642 16.9233 12.2846 17.0194 11.8039L18.329 5.25594L7.75162 16.5889L14.3511 19.0637C14.8102 19.2358 15.0767 19.7154 14.9806 20.1961L13.671 26.7441Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Elememts
              </a>
              <img src={arrowicon} alt="" className="w-3.5 h-3.5" />
            </li>
            <li className="">Canledar</li>
          </ul>
        </div>
      </div>

      {/* BUTTON  */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Buttons</p>
          </div>
          <div className="flex flex-wrap  gap-3">
            <button
              type="button"
              className="inline-block rounded-lg bg-indigo-300 py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-transparent hover:text-black border hover:border-indigo-300"
            >
              Primary
            </button>
            <button
              type="button"
              className="inline-block rounded-full bg-indigo-300 py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-transparent hover:text-black border hover:border-indigo-300"
            >
              Primary2
            </button>
            <button
              type="button"
              className="inline-block rounded-lg hover:bg-indigo-300 py-2 px-4 font-normal  text-sm transition-all duration-300  hover:text-black border border-indigo-300"
            >
              Primary3
            </button>
            <button
              type="button"
              className="disabled:pointer-events-none disabled:opacity-60 inline-block rounded-lg  bg-indigo-300 py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-transparent hover:text-black border hover:border-indigo-300"
              disabled
            >
              Primary4
            </button>
            <div></div>
          </div>
        </div>

        {/* button with icon and with leading icon */}
        <div className="border border-black/10 dark:border-white/10 p-5 rounded-md">
          <div className="mb-5">
            <p className="text-sm font-semibold">Buttons with icon</p>
          </div>
          <div className=" flex items-center">
            {/* btn 5.1 */}
            <button
              type="button"
              className=" inline-flex rounded-lg align-middle hover:bg-indigo-600 hover:text-white bg-indigo-300  text-sm transition-all duration-300   border hover:border-indigo-300"
            >
              <p className="bg-white items-center bg-opacity-20 w-10 h-10 py-3 align-middle rounded-l">
                <svg
                  className="w-4 h-4 mx-auto"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 3C16 3 18.6442 3 21.0605 4.02201C21.0605 4.02201 23.3936 5.00884 25.1924 6.80761C25.1924 6.80761 26.9912 8.60638 27.978 10.9395C27.978 10.9395 29 13.3558 29 16C29 16 29 18.6442 27.978 21.0605C27.978 21.0605 26.9912 23.3936 25.1924 25.1924C25.1924 25.1924 23.3936 26.9912 21.0605 27.978C21.0605 27.978 18.6442 29 16 29C16 29 13.3558 29 10.9395 27.978C10.9395 27.978 8.60638 26.9912 6.80761 25.1924C6.80761 25.1924 5.00884 23.3936 4.02202 21.0605C4.02202 21.0605 3 18.6442 3 16C3 16 3 13.3558 4.02202 10.9395C4.02202 10.9395 5.00885 8.60638 6.80761 6.80761C6.80761 6.80761 8.60638 5.00884 10.9395 4.02201C10.9395 4.02201 13.3558 3 16 3ZM16 5C16 5 13.7614 5 11.7186 5.86402C11.7186 5.86402 9.74476 6.69889 8.22183 8.22182C8.22183 8.22182 6.6989 9.74476 5.86402 11.7186C5.86402 11.7186 5 13.7614 5 16C5 16 5 18.2386 5.86402 20.2814C5.86402 20.2814 6.69889 22.2552 8.22183 23.7782C8.22183 23.7782 9.74476 25.3011 11.7186 26.136C11.7186 26.136 13.7614 27 16 27C16 27 18.2386 27 20.2814 26.136C20.2814 26.136 22.2552 25.3011 23.7782 23.7782C23.7782 23.7782 25.3011 22.2552 26.136 20.2814C26.136 20.2814 27 18.2386 27 16C27 16 27 13.7614 26.136 11.7186C26.136 11.7186 25.3011 9.74476 23.7782 8.22183C23.7782 8.22183 22.2552 6.69889 20.2814 5.86402C20.2814 5.86402 18.2386 5 16 5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13 13.5C13 14.3284 12.3284 15 11.5 15C10.6716 15 10 14.3284 10 13.5C10 12.6716 10.6716 12 11.5 12C12.3284 12 13 12.6716 13 13.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 14.5H22C22.5523 14.5 23 14.0523 23 13.5C23 12.9477 22.5523 12.5 22 12.5H19C18.4477 12.5 18 12.9477 18 13.5C18 14.0523 18.4477 14.5 19 14.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.665 18.4983C11.4861 18.19 11.1564 18 10.8 18C10.7837 18 10.7675 18.0004 10.7513 18.0012C10.5917 18.009 10.4362 18.0549 10.298 18.1351C9.98971 18.3141 9.79999 18.6436 9.79999 19C9.79999 19.0162 9.80038 19.0325 9.80117 19.0487C9.80896 19.2083 9.85489 19.3638 9.93512 19.502C10.8762 21.1233 12.5008 22.0588 12.5008 22.0588C14.1253 22.9942 16 22.9942 16 22.9942C17.8746 22.9942 19.4992 22.0588 19.4992 22.0588C21.1238 21.1233 22.0649 19.502 22.0649 19.502C22.1534 19.3495 22.2 19.1763 22.2 19C22.2 18.9823 22.1995 18.9646 22.1986 18.9469C22.1807 18.6099 21.9939 18.3046 21.702 18.1351C21.5495 18.0466 21.3763 18 21.2 18L21.1843 18.0001C21.1029 18.0014 21.022 18.0126 20.9434 18.0335C20.6871 18.1015 20.4683 18.2686 20.3351 18.498L20.3345 18.499C19.6619 19.6572 18.5012 20.3255 18.5012 20.3255C17.34 20.9942 16 20.9942 16 20.9942C14.66 20.9942 13.4988 20.3255 13.4988 20.3255C12.3377 19.657 11.665 18.4983 11.665 18.4983Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
              <p className="px-3 leading-[2.8] ">Primary5</p>
            </button>
            {/* btn 5.2 */}
            <button
              type="type"
              className="inline-flex rounded-lg mx-2 items-center bg-indigo-300 py-2 px-4 font-normal  text-sm transition-all duration-300 hover:bg-transparent hover:text-black border hover:border-indigo-300"
            >
              <img src={smileicon} alt="" className="w-4 h-4 mr-1" />
              Primary6
            </button>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-7"></div> */}
    </div>
  );
};

export default Breadcrumbs;
