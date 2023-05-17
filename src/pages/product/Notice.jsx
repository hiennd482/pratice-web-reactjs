import React, { useEffect, useState } from "react";
import "./notice.scss";
import check from "../../assets/check.svg";
function Product() {
  const [opent, setOpent] = useState(true);

  // top-left=toast-topleft
  // top-right=toast-topleft

  // bottom-left=toast-bottomleft
  // bottom-right=toast-bottomright

  // center
  // center-top=toast-topcenter
  // center-bottom=toast-bottomcenter
  const posPoppup = "toast-topcenter";

  useEffect(() => {
    const button = document.querySelector(".btnn"),
      toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");

    let timer1, timer2;

    button.addEventListener("click", () => {
      if (
        posPoppup === "toast-topleft" ||
        posPoppup === "toast-topright" ||
        posPoppup === "toast-bottomright" ||
        posPoppup === "toast-bottomleft"
      ) {
        toast.classList.add("active");
        // toast.classList.add("toast-right");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
          toast.classList.remove("active");
          // toast.classList.remove("toast-right");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      } else if (posPoppup === "toast-topcenter") {
        toast.classList.add("active-top");
        // toast.classList.add("toast-right");
        progress.classList.add("active-top");

        timer1 = setTimeout(() => {
          toast.classList.remove("active-top");
          // toast.classList.remove("toast-right");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active-top");
        }, 5300);
      } else {
        toast.classList.add("active-bottom");
        // toast.classList.add("toast-right");
        progress.classList.add("active-bottom");

        timer1 = setTimeout(() => {
          toast.classList.remove("active-bottom");
          // toast.classList.remove("toast-right");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active-bottom");
        }, 5300);
      }
    });

    closeIcon.addEventListener("click", () => {
      if (
        posPoppup === "toast-topleft" ||
        posPoppup === "toast-topright" ||
        posPoppup === "toast-bottomright" ||
        posPoppup === "toast-bottomleft"
      ) {
        toast.classList.remove("active");

        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      } else if (posPoppup === "toast-topcenter") {
        toast.classList.remove("active-top");
        setTimeout(() => {
          progress.classList.remove("active-top");
        }, 300);
        clearTimeout(timer1);
        clearTimeout(timer2);
      } else {
        toast.classList.remove("active-bottom");
        setTimeout(() => {
          progress.classList.remove("active-bottom");
        }, 300);
        clearTimeout(timer1);
        clearTimeout(timer2);
      }
    });
  });
  return (
    <div className="overflow-hidden  test">
      {" "}
      <div className="flex md:items-end items-center  w-[100%] p-5  bg-[#f3f4f6] relative justify-between">
        {/* noti #1 */}
        <div className="ring-black/5 shadow-lg border bg-white max-w-[24rem] pointer-events-auto rounded-lg ">
          <div className="p-4">
            <div className="flex items-start">
              <div className="shrink-0 ">
                {/* <img src={check} alt="" className="w-6 h-6 stroke-cyan-500" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-green-400  w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  />
                </svg>
              </div>
              <div className="pt-[0.125rem] flex-1 ml-3">
                <p className="font-medium leading-5 text-sm">
                  Successfully saved!
                </p>
                <p className="text-gray-500 leading-5 text-sm">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <div className="shrink-0 flex ml-4">
                <button type="button" className="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-200 hover:stroke-slate-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* noti #2 */}

        <div
          className={`${
            !opent ? "offNotice " : " onNotice"
          } ring-black/5 shadow-lg border bg-white max-w-[24rem] pointer-events-auto rounded-lg transition  `}
        >
          <div className="p-4">
            <div className="flex items-center">
              <div className=" flex ">
                <p className=" font-medium leading-5 text-sm mr-28 ">
                  Discussion archived
                </p>
                <button className="font-medium text-sm leading-5 text-indigo-600 shrink-0 ">
                  Undo
                </button>
              </div>
              <div className="shrink-0 flex ml-4">
                <button
                  type="button"
                  className="inline-flex"
                  onClick={() => setOpent(!opent)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-200 hover:stroke-slate-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* p2 */}
      <div className="flex md:items-end items-center  w-[100%] p-5  bg-[#f3f4f6] relative justify-between">
        {/* noti #3 */}
        <div className="ring-black/5 shadow-lg border bg-white max-w-[24rem] pointer-events-auto rounded-lg ">
          <div className="p-4">
            <div className="flex items-start">
              <div className="shrink-0 ">
                {/* <img src={check} alt="" className="w-6 h-6 stroke-cyan-500" /> */}
                <svg
                  className="w-6 h-6 stroke-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                  ></path>
                </svg>
              </div>
              <div className="pt-[0.125rem] flex-1 ml-3">
                <p className="font-medium leading-5 text-sm">
                  Discussion moved
                </p>
                <p className="text-gray-500 leading-5 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </p>
                <div className="flex mt-3 ">
                  <button className="font-medium text-sm leading-5 text-indigo-600 shrink-0">
                    Undo
                  </button>
                  <button className="font-medium text-sm leading-5 ml-6">
                    Dismiss
                  </button>
                </div>
              </div>
              <div className="shrink-0 flex ml-4">
                <button type="button" className="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-200 hover:stroke-slate-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* noti #4 */}
        <div className="  ring-black/5 shadow-lg border flex bg-white max-w-[24rem] pointer-events-auto rounded-lg ">
          <div className=" p-4 flex items-start mr-12">
            <div className="shrink-0 pt-[0.125rem]">
              <img
                className="w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="pt-[0.125rem] flex-1 ml-3">
              <p className="font-medium leading-5 text-sm">Emilia Gates</p>
              <p className="text-gray-500 leading-5 text-sm">
                Sure! 8:30pm works great!
              </p>
            </div>
          </div>
          <div className="border-l flex">
            <button className="font-medium text-sm leading-5 text-indigo-600 shrink-0 p-4">
              Reply
            </button>
          </div>
        </div>
      </div>
      {/* p3 */}
      <div className="flex flex-row-reverse md:items-end items-center  w-[100%] p-5  bg-[#f3f4f6] relative justify-between">
        {/* noti #6 */}
        <div className="ring-black/5 shadow-lg border bg-white max-w-[24rem] pointer-events-auto rounded-lg w-[375px]">
          <div className="p-4">
            <div className="flex items-start">
              <div className="shrink-0 pt-[0.125rem]">
                <img
                  className="w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="pt-[0.125rem] flex-1 ml-3">
                <p className="font-medium leading-5 text-sm">Emilia Gates</p>
                <p className="text-gray-500 leading-5 text-sm">
                  Sent you an invite to connect.
                </p>
                <div className="flex mt-3 ">
                  <button className="font-semibold py-[0.375rem] px-[0.625rem] rounded-md text-sm leading-5 text-white bg-indigo-600 hover:bg-indigo-500 p-2 shrink-0">
                    Accept
                  </button>
                  <button className="font-semibold py-[0.375rem] px-[0.625rem] rounded-md text-sm leading-5  ml-2 border-2 p-2 shrink-0">
                    Decline
                  </button>
                </div>
              </div>
              <div className="shrink-0 flex ml-4">
                <button type="button" className="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-slate-200 hover:stroke-slate-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* noti #5 */}
        <div className="  ring-black/5 shadow-lg border flex bg-white max-w-[24rem] pointer-events-auto rounded-lg ">
          <div className=" p-4 flex items-start  ">
            <div className="pt-[0.125rem] flex-1 ">
              <p className="font-medium leading-5 text-sm">
                Receive notifications
              </p>
              <p className="text-gray-500 leading-5 text-sm">
                Notifications may include alerts, sounds, and badges.
              </p>
            </div>
          </div>
          <div className="flex border-l flex-col  w-[160px]">
            <div className=" border-b flex justify-center">
              <button className="font-medium text-sm leading-5 text-indigo-600 shrink-0 p-4">
                Reply
              </button>
            </div>
            <div className="flex justify-center">
              <button className="font-medium text-sm leading-5 p-2 shrink-0 ">
                Don't allow
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* active */}
      <div class={` toast p-3 ${posPoppup}  `}>
        <div class="toast-content">
          <i class="fas fa-solid fa-check check"></i>

          <div class="message p-3">
            <span class="text text-1">Success</span>
            <span class="text text-2">Your changes has been saved</span>
          </div>
        </div>
        <i class="fa-solid fa-xmark close"></i>

        <div class="progress"></div>
      </div>
      <button className="btnn">Show Toast</button>
      <div>
        <button onClick={() => setOpent(!opent)}>open 2</button>
      </div>
    </div>
  );
}

export default Product;
