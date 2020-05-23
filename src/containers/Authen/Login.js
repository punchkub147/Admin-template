import React from "react";
import ImgLogin from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../configs/router";

const Login = (props) => {
  return (
    <div className="flex bg-indigo-200 h-screen justify-center items-center">
      <div className="w-1/2">
        <card>
          <div className="flex flex-row">
            <div className="w-3/4 p-8">
              <h4 className="text-center">Welcome</h4>
              <br />
              <div className="grid grid-cols-12 gap-4">
                <Link to={ROUTE_PATH.DASHBOARD} className="col-span-6">
                  <button className="w-full bg-blue-500 text-white">
                    Facebook
                  </button>
                </Link>
                <Link to={ROUTE_PATH.DASHBOARD} className="col-span-6">
                  <button className="w-full bg-red-500 text-white">
                    Google
                  </button>
                </Link>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex flex-col">
                <label>E-mail</label>
                <input type="text" placeholder="email" className="mb-4" />
                <label>Password</label>
                <input type="text" placeholder="password" className="mb-4" />
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <input type="checkbox" />
                  <span>keep me login</span>
                </div>
                <Link to={ROUTE_PATH.FORGOT_PASSWORD}>
                  <p>Forgot Password?</p>
                </Link>
              </div>
              <br />
              <Link to={ROUTE_PATH.DASHBOARD}>
                <button className="w-full primary">Login</button>
              </Link>
              <br />
              <br />
              <hr />
              <br />
              <p className="text-center">
                Don't have an account?{" "}
                <Link to={ROUTE_PATH.REGISTER}>
                  <span>Sign up</span>
                </Link>
              </p>
            </div>
            <div className="w-1/2">
              <img src={ImgLogin} alt="" classsName="rounded" />
            </div>
          </div>
        </card>
      </div>
    </div>
  );
};

export default Login;
