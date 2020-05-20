import React from "react";
import ImgLogin from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../configs/router";

const ForgotPassword = (props) => {
  return (
    <div className="flex bg-indigo-200 h-screen justify-center items-center">
      <div className="w-1/2">
        <card>
          <div className="flex flex-row">
            <div className="w-1/2 p-8">
              <h4 className="text-center">Forgot Password</h4>
              <br/>
              <div className="grid grid-cols-12 gap-4">
                <Link to={ROUTE_PATH.LOGIN} className="col-span-6">
                  <button className="w-full text-indigo-500 border-2 border-indigo-300 border-solid">Sign in</button>
                </Link>
                <Link to={ROUTE_PATH.REGISTER} className="col-span-6">
                  <button className="w-full text-indigo-500 border-2 border-indigo-300 border-solid">Sign up</button>
                </Link>
              </div>
              <br/>
              <hr />
              <br/>
              <p>Enter the email or phone number you used when you joined and we will send you temporary password</p>
              <br/>
              <div className="flex flex-col">
              <label>E-mail</label>
              <input type="text" placeholder="email" className="mb-2"/>
              </div>
              <br/>
              <button className="w-full primary">Send Email</button>
              <br/>
              <br/>
              <hr/>
              <br/>
              <p className="text-center">
                I remembered my password <Link to={ROUTE_PATH.REGISTER}><span>Sign In</span></Link>
              </p>
            </div>
            <div className="w-1/2">
              <img src={ImgLogin} alt="" classsName="rounded"/>
            </div>
          </div>
        </card>
      </div>
    </div>
  );
};

export default ForgotPassword;
