import React, { useEffect, useRef, useState } from "react";
import bglogin from "../../assets/login-bg.jpg";
import snowlogo from "../../assets/snowlogo.svg";
import gg from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import moon from "../../assets/moon.svg";
import { BsSnow } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

import useDarkMode from "../../components/darkMode/Darkmode";
import "./logincover.scss";
const Logincover = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    // const password = document.querySelector('input[type="password"]');
    // password.addEventListener("focus", (event) => {
    //   document.querySelector(".alert").classList.add("hidden");
    // });
    // password.addEventListener("blur", (event) => {
    //   document.querySelector(".alert").classList.remove("hidden");
    // });
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (email.length == 0 && password.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input1");
      input.focus();
    } else if (email.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input1");
      input.focus();
    } else if (password.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input2");
      input.focus();
    } else if (password !== "123") {
      setErr(true);
      const input = document.getElementById("floating-input2");
      input.focus();
    } else {
      navigate("/home", { state: { idc: email } });
    }
    console.log(email, password);
  };
  return (
    <div
      className={`antialiased relative font-inter bg-white dark:bg-black text-black text-sm font-normal overflow-x-hidden bg-[url('https://webonzer.com/snow/assets/images/login-bg.jpg')] bg-no-repeat bg-cover`}
    >
      {/* <img src={bglogin} alt="" /> */}
      <div className="min-h-screen flex flex-wrap items-center justify-center p-4 sm:px-12 gap-4">
        <div className="flex-1 text-center">
          <a href="" className="inline-block">
            <svg
              class="mx-auto"
              width="216"
              height="66"
              viewBox="0 0 216 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0065 1.77201C34.0065 0.793355 33.229 0 32.27 0C31.311 0 30.5335 0.793355 30.5335 1.77201V11.9757C30.5335 12.4933 29.9203 12.7525 29.5616 12.3865L24.451 7.1713C23.7729 6.47929 22.6734 6.47929 21.9953 7.1713C21.3172 7.86331 21.3172 8.98528 21.9953 9.67729L29.533 17.3693C30.1736 18.023 30.5335 18.9097 30.5335 19.8342V28.9147C30.5335 29.3619 30.0591 29.6415 29.6795 29.4178L21.9487 24.8631C21.1641 24.4008 20.5916 23.6394 20.3571 22.7464L17.5981 12.2389C17.3499 11.2936 16.3977 10.7326 15.4714 10.9859C14.545 11.2392 13.9953 12.2109 14.2435 13.1562L16.1141 20.2803C16.2454 20.7803 15.7188 21.1926 15.2795 20.9338L6.64474 15.8465C5.8142 15.3572 4.75219 15.6476 4.27268 16.4951C3.79316 17.3426 4.07773 18.4264 4.90827 18.9157L13.5526 24.0087C13.9919 24.2675 13.9053 24.9391 13.4153 25.073L6.41895 26.9861C5.4926 27.2393 4.94287 28.211 5.19108 29.1563C5.43929 30.1016 6.39146 30.6626 7.31781 30.4093L17.6297 27.5897C18.5048 27.3504 19.4372 27.4757 20.2218 27.9379L27.9486 32.4903C28.3282 32.7139 28.3282 33.273 27.9486 33.4966L20.2067 38.0579C19.4221 38.5202 18.4896 38.6454 17.6145 38.4062L7.31781 35.5907C6.39147 35.3374 5.4393 35.8984 5.19108 36.8437C4.94287 37.789 5.4926 38.7607 6.41895 39.0139L13.4001 40.9228C13.8901 41.0568 13.9767 41.7284 13.5375 41.9872L4.9027 47.0745C4.07216 47.5638 3.7876 48.6475 4.26711 49.4951C4.74662 50.3426 5.80863 50.633 6.63917 50.1437L15.2836 45.0507C15.7228 44.7919 16.2494 45.2043 16.1182 45.7042L14.2435 52.8438C13.9953 53.7891 14.545 54.7608 15.4714 55.0141C16.3977 55.2674 17.3499 54.7064 17.5981 53.7611L20.3612 43.2381C20.5956 42.3451 21.1682 41.5837 21.9528 41.1214L29.6795 36.5691C30.0591 36.3455 30.5335 36.625 30.5335 37.0722V46.1948C30.5335 47.1194 30.1736 48.006 29.533 48.6598L21.9953 56.3518C21.3172 57.0438 21.3172 58.1657 21.9953 58.8578C22.6734 59.5498 23.7729 59.5498 24.451 58.8578L29.5616 53.6426C29.9203 53.2766 30.5335 53.5358 30.5335 54.0534V64.228C30.5335 65.2066 31.311 66 32.27 66C33.229 66 34.0065 65.2066 34.0065 64.228V54.042C34.0065 53.5244 34.6197 53.2652 34.9784 53.6312L40.1001 58.8578C40.7782 59.5498 41.8777 59.5498 42.5558 58.8578C43.234 58.1657 43.234 57.0438 42.5558 56.3518L35.007 48.6484C34.3664 47.9947 34.0065 47.108 34.0065 46.1835V37.0657C34.0065 36.6184 34.4809 36.3389 34.8605 36.5625L42.5737 41.1069C43.3584 41.5692 43.9309 42.3306 44.1654 43.2236L46.9284 53.7465C47.1766 54.6918 48.1288 55.2528 49.0551 54.9995C49.9815 54.7463 50.5312 53.7746 50.283 52.8293L48.4083 45.6897C48.2771 45.1898 48.8037 44.7774 49.2429 45.0362L57.9119 50.1437C58.7425 50.633 59.8045 50.3426 60.284 49.4951C60.7635 48.6476 60.479 47.5638 59.6484 47.0745L50.989 41.9727C50.5497 41.7139 50.6364 41.0423 51.1263 40.9083L58.1076 38.9994C59.0339 38.7461 59.5836 37.7745 59.3354 36.8292C59.0872 35.8839 58.135 35.3229 57.2087 35.5762L46.9119 38.3916C46.0368 38.6309 45.1044 38.5056 44.3198 38.0434L36.6025 33.4966C36.2229 33.273 36.2229 32.7139 36.6025 32.4903L44.3046 27.9525C45.0892 27.4902 46.0217 27.3649 46.8968 27.6042L57.2087 30.4238C58.135 30.6771 59.0872 30.1161 59.3354 29.1708C59.5836 28.2255 59.0339 27.2539 58.1076 27.0006L51.1111 25.0875C50.6212 24.9536 50.5346 24.282 50.9738 24.0232L59.6429 18.9157C60.4734 18.4264 60.758 17.3426 60.2784 16.4951C59.7989 15.6476 58.7369 15.3572 57.9064 15.8465L49.247 20.9483C48.8077 21.2071 48.2811 20.7948 48.4124 20.2948L50.283 13.1707C50.5312 12.2254 49.9815 11.2538 49.0551 11.0005C48.1288 10.7472 47.1766 11.3082 46.9284 12.2535L44.1694 22.7609C43.9349 23.6539 43.3624 24.4153 42.5778 24.8776L34.8605 29.4244C34.4809 29.648 34.0065 29.3685 34.0065 28.9212V19.8455C34.0065 18.921 34.3664 18.0344 35.007 17.3806L42.5558 9.67729C43.234 8.98528 43.234 7.86331 42.5558 7.1713C41.8777 6.47929 40.7782 6.47929 40.1001 7.1713L34.9784 12.3978C34.6197 12.7638 34.0065 12.5046 34.0065 11.987V1.77201Z"
                fill="#F7F9FB"
              ></path>
              <path
                d="M134.069 48.2308V30.4615C134.069 26.2557 130.734 22.8461 126.621 22.8461C122.507 22.8461 119.173 26.2557 119.173 30.4615V48.2308H114.207V30.4615C114.207 23.4518 119.765 17.7692 126.621 17.7692C133.477 17.7692 139.035 23.4518 139.035 30.4615V48.2308H134.069Z"
                fill="#F7F9FB"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M161.38 43.1538C166.865 43.1538 171.311 38.6078 171.311 33C171.311 27.3922 166.865 22.8461 161.38 22.8461C155.895 22.8461 151.449 27.3922 151.449 33C151.449 38.6078 155.895 43.1538 161.38 43.1538ZM161.38 48.2308C169.607 48.2308 176.277 41.4117 176.277 33C176.277 24.5883 169.607 17.7692 161.38 17.7692C153.153 17.7692 146.483 24.5883 146.483 33C146.483 41.4117 153.153 48.2308 161.38 48.2308Z"
                fill="#F7F9FB"
              ></path>
              <path
                d="M181.241 17.7692L185.921 44.0462C186.892 49.497 194.01 49.6736 195.209 44.2767L197.983 29.2985C198.085 28.7482 198.806 28.7594 198.894 29.3126L201.228 44.0542C202.264 49.4964 209.393 49.5663 210.52 44.1455L216 17.7692H211.18L206.358 43.0533C206.255 43.5969 205.544 43.5897 205.449 43.0442L201.069 17.7692H196.218L191.089 43.1277C190.979 43.6694 190.269 43.6535 190.18 43.1073L186.038 17.7692H181.241Z"
                fill="#F7F9FB"
              ></path>
              <path
                d="M95.3282 48.2308C98.8155 48.2308 101.592 47.4878 103.659 45.94C105.726 44.3921 106.759 42.2871 106.759 39.5009C106.759 37.0863 105.919 35.2908 104.305 33.9906C102.626 32.6904 100.43 31.576 97.6531 30.5854C95.7802 29.8424 94.1657 29.1613 92.9387 28.5422C91.7117 27.9231 91.0658 26.9944 91.0658 25.7561C91.0658 24.6416 91.5179 23.7749 92.4866 23.2176C93.4553 22.6604 94.7469 22.4128 96.3614 22.4128C97.5885 22.4128 98.8155 22.5985 99.9779 22.97C101.076 23.3415 102.238 23.8368 103.465 24.5178L105.467 20.3077C104.111 19.4409 102.626 18.8218 101.076 18.3884C99.5259 17.955 97.976 17.7692 96.3614 17.7692C93.1324 17.7692 90.5492 18.4503 88.5472 19.8743C86.5452 21.2983 85.5765 23.2795 85.6411 25.818C85.7057 28.1707 86.5452 29.9662 88.2243 31.2045C89.8388 32.4428 92.0346 33.5572 94.8115 34.5478C96.6843 35.2289 98.2343 35.9099 99.4613 36.591C100.688 37.272 101.27 38.3246 101.27 39.6867C101.27 40.9249 100.753 41.8537 99.7196 42.5347C98.6218 43.2158 97.1364 43.5253 95.1344 43.5253C93.7782 43.5253 92.3575 43.2777 90.9367 42.8443C89.5159 42.4109 88.0306 41.7298 86.4161 40.6773L84.4141 45.0732C86.0286 46.0638 87.7722 46.8068 89.5159 47.364C91.2596 47.9212 93.197 48.2308 95.3282 48.2308Z"
                fill="#F7F9FB"
              ></path>
            </svg>
          </a>
        </div>
        <div className="mr-2 absolute top-4 right-4">
          {isDarkMode ? (
            <BsSun
              className="text-white"
              onClick={() => toggleDarkMode(!isDarkMode)}
            ></BsSun>
          ) : (
            <>
              <img
                src={moon}
                alt=""
                className="w-5 h-5 brightness-0 invert-[1]"
                onClick={() => toggleDarkMode(!isDarkMode)}
              />
            </>
          )}
        </div>
        <div className="max-w-[485px] flex-none w-full bg-white dark:bg-black p-4 sm:p-12  rounded-2xl ">
          <h1 className="text-2xl font-semibold mb-2 text-center dark:text-white">
            Sign In
          </h1>
          <p className="text-center text-black/40 dark:text-white/40 mb-7">
            Your Social Campaigns
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <a
              href=""
              className="flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2">
                <img src={gg} alt="" />
              </div>
              <p className="whitespace-nowrap">Sign in with Google</p>
            </a>
            <a
              href=""
              className="flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2">
                <img src={apple} alt="" className="" />
              </div>
              <p className="whitespace-nowrap">Sign in with Apple</p>
            </a>
          </div>
          <div className="flex items-center mb-7 ">
            <div className="w-full h-[2px] bg-black/10 dark:bg-white/10"></div>
            <div className="text-black/40 dark:text-white/40 px-5 whitespace-nowrap">
              Or with Email
            </div>
            <div className="w-full h-[2px] bg-black/10 dark:bg-white/10"></div>
          </div>
          <form action="" className="mb-4">
            {/* input */}
            <div className="mb-4 relative ">
              <input
                type="text"
                id="floating-input1"
                className={`${
                  err && email.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="floating-input1"
                className={`${
                  err && email.length <= 0 ? "peer-focus:text-red-500" : ""
                }  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Email
              </label>
            </div>

            {err && email.length <= 0 ? (
              <div className="flex text-[red] gap-2 alert py-2">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">Enter a email</p>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="mb-2 relative">
              <input
                type="password"
                id="floating-input2"
                className={`${
                  err && password.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                }  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                for="floating-input2"
                className={`${
                  err && password.length <= 0 ? "peer-focus:text-red-500" : ""
                } absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Password
              </label>
            </div>

            {/* alert null password*/}
            {err && password.length <= 0 ? (
              <div className="flex text-[red] gap-2 alert">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">Enter a password</p>
                </div>
              </div>
            ) : (
              // <div className="flex text-[red] gap-2 alert">
              //   <div>
              //     <svg
              //       aria-hidden="true"
              //       // className="stroke-red-500"
              //       fill="currentColor"
              //       focusable="false"
              //       width="16px"
              //       height="16px"
              //       viewBox="0 0 24 24"
              //       xmlns="https://www.w3.org/2000/svg"
              //     >
              //       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              //     </svg>
              //   </div>
              //   <div>
              //     <p className=" text-xs  ">wrong password</p>
              //   </div>
              // </div>
              ""
            )}

            {/* {err && password !== "123" ? (
              <div className="flex text-[red] gap-2 alert">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">wrong password</p>
                </div>
              </div>
            ) : (
              ""
            )} */}

            <div className="mb-7 text-right">
              <a href="" className="text-[#9cadfc]">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleSumbit}
              className="py-2 px-4 bg-black w-full text-white rounded-lg text-lg font-semibold border-black hover:bg-transparent hover:text-black border transition-all duration-300"
            >
              Sign in
            </button>
          </form>
          <p className="text-center text-black/40 dark:text-white/40">
            Not a Member yet ?
            <a href="" className="text-[#9cadfc]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logincover;
