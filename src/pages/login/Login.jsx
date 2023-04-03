// import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
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
  const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate(`/register`, { state: { idc: username } });
  // };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (username.length == 0 || password.length == 0) {
      setError(true);
    } else {
      navigate("/register", { state: { idc: username } });
    }
    console.log(username, password);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>duy Hien</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Dont you have an account?</span>
          {/* <Link to="/register">
            <button>Register</button>
          </Link> */}
        </div>
        <div className="right">
          <h1>Login</h1>
          <span>{user.name}</span>

          <form action="" onSubmit={handleSumbit}>
            <input
              type="text"
              placeholder="username"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && username.length <= 0 ? (
              <span className="alert" style={{ color: "red" }}>
                {" "}
                ko dc de trong username
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
              <span name="alert" style={{ color: "red" }}>
                {" "}
                ko dc de trong password
              </span>
            ) : (
              " "
            )}
            <button>{loading ? "please wait" : "Login"}</button>
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
