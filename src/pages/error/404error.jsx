import React from "react";
import { FiMoon } from "react-icons/fi";
import { BsSnow } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import errorimg from "../../assets/error.svg";
import errorimgdark from "../../assets/darkerror.svg";
import useDarkMode from "../../components/darkMode/Darkmode";

function Error() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="antialiased relative bg-[#f7f9fb] dark:bg-black dark:text-white font-normal text-black text-sm overflow-x-hidden">
      <header>
        <nav className="bg-[#f7f9fb] dark:bg-black  px-4 lg:px-7 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center text-lg">
              <BsSnow className="text-[#3b82f680] mr-1"></BsSnow>{" "}
              <span>snow</span>
            </div>
            <div className="flex items-center lg:order-2">
              <div className="mr-2">
                {isDarkMode ? (
                  <BsSun onClick={() => toggleDarkMode(!isDarkMode)}></BsSun>
                ) : (
                  <FiMoon onClick={() => toggleDarkMode(!isDarkMode)}></FiMoon>
                )}
              </div>
              <span className="dark:text-white text-black border cursor-pointer border-transparent dark:hover:border-white hover:border-black/10 rounded-lg text-sm px-2 py-1 mr-2 transition-all duration-300">
                Sign in
              </span>
              <span className="dark:text-white dark:hover:bg-white dark:hover:text-black text-black cursor-pointer bg-transparent border border-black/10 hover:bg-black hover:text-white rounded-lg text-sm px-2 py-1 mr-2 transition-all duration-300">
                Login
              </span>
            </div>
          </div>
        </nav>
      </header>

      <div className="min-h-[calc(100vh-134px)] py-4 px-4 sm:px-12 flex justify-center items-center">
        <div className="text-center sm:flex-none">
          <h2 className="text-5xl font-semibold mb-2">404 Not Found</h2>
          <p className="text-black/40 mb-10 dark:text-white/40">
            Sorry ,we can't find that page.
          </p>
          {isDarkMode ? (
            <img src={errorimgdark} className="mb-11 mx-auto" alt="" />
          ) : (
            <img src={errorimg} className="mb-11 mx-auto" alt="" />
          )}

          <a
            href={"/"}
            className="max-w-[149px] py-1 px-2 inline-block bg-black/5 w-full rounded-lg dark:text-white/40 dark:bg-white/5 dark:border-white/5  text-black/40 border border-black/5 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-black transition-all duration-300"
          >
            Back to Home Page
          </a>
        </div>
      </div>
      <footer className="p-7 flex items-center justify-center">
        <p className="text-xs text-black/40 dark:text-white/40 ">2023 dhien</p>
      </footer>
    </div>
  );
}

export default Error;
