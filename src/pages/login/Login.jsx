// import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logopurple.jpg";
const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("max accordionHeader+2:");
    // accordionHeader.forEach((header) => {
    //   header.addEventListener("click", function () {
    //     // setCount(count + 1);

    //     const accordionContent =
    //       header.parentElement.querySelector(".accordion-content");
    //     let accordionMaxHeight = accordionContent.style.maxHeight;
    //     console.log("max height:", accordionMaxHeight);
    //     // // Condition handling
    //     // if (accordionMaxHeight === "0px" || accordionMaxHeight.length === 0) {
    //     //   console.log("click accordion1", accordionHeader);
    //     //   accordionContent.style.maxHeight = `230px`;
    //     //   header.querySelector(".fas").classList.remove("fa-plus");
    //     //   header.querySelector(".fas").classList.add("fa-minus");
    //     //   header.parentElement.classList.add("bg-indigo-50");
    //     // } else {
    //     //   console.log("click accordion2", accordionHeader);
    //     //   accordionContent.style.maxHeight = `0px`;
    //     //   header.querySelector(".fas").classList.add("fa-plus");
    //     //   header.querySelector(".fas").classList.remove("fa-minus");
    //     //   header.parentElement.classList.remove("bg-indigo-50");
    //     // }
    //   });
    // });

    // return () => {};
  }, []);
  const navigate = useNavigate();
  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users/1"
  //     );
  //     setUser(data);
  //   } catch {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };
  // const [username, setUsername] = useState("");
  // const handleLogin = () => {
  //   navigate(`/register`, { state: { idc: username } });
  // };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (username.length == 0 || password.length == 0) {
      setError(true);
    } else {
      navigate("/home", { state: { idc: username } });
    }
    console.log(username, password);
  };
  return (
    <div className="login bg-gradient-to-r from-violet to-fuchsia-500">
      <div className="card w-1/2 hover:w-3/5 ease-in-out delay-150 duration-200 cursor-pointer flex">
        {/* hover:w-3/4 ease-in-out delay-150 duration-200 cursor-pointer */}
        <div className="left">
          <h1>duy Hien</h1>
          <p className="font-light text-base">
            So, I made you think that I would always stay I said some things
            that I should never say Yeah, I broke your heart like someone did to
            mine And now you won't love me for a second time
          </p>
          <div className="flex ">
            {" "}
            <span>Dont you have an account?</span>
            <span className="ml-1 hover:underline cursor-pointer font-bold">
              Register
            </span>
          </div>

          {/* <Link to="/register">
            <button>Register</button>
          </Link> */}
        </div>
        <div className="right">
          <div className=" flex items-center flex-col ml-6 w-3/5">
            <img src={logo} alt="" className="" />
            <span>We are The Lotus Team</span>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="username"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && username.length <= 0 ? (
              <span
                className="font-light text-base "
                name="alert"
                data-testid="error"
                style={{ color: "red" }}
              >
                {" "}
                username cant be empty
              </span>
            ) : (
              " "
            )}
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && password.length <= 0 ? (
              <span
                className="font-light text-base"
                name="alert"
                data-testid="error"
                style={{ color: "red" }}
              >
                {" "}
                password cant be empty
              </span>
            ) : (
              " "
            )}
            <div className="font-thin text-xs flex items-center mt-4 justify-between">
              <div className="flex items-center">
                <input type="checkbox" name="" id="" /> <text>Remember me</text>
              </div>
              <text className="hover:underline cursor-pointer">
                Forgot the password?
              </text>
            </div>
            <button className="ml-9 mt-3" name="submit" onClick={handleSumbit}>
              Login
            </button>
            {/* <span
              data-testid="error"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              error 404!
            </span> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
