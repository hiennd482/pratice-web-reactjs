import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export default function Register() {
  const location = useLocation();
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <p>{location.state.idc}</p>
          <h1>fakebook duy hien.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Dont you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="fortest">Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
