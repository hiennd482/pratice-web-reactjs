// import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const id = 5;
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(`/register`, { state: { idc: username } });
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
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              // value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder="Password" />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
