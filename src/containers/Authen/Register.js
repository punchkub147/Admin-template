import React from "react";
import ImgRegister from "../../assets/images/register.jpg";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../configs/router";

const Register = (props) => {
  return (
    <div className="flex bg-indigo-200 h-screen justify-center items-center">
      <div className="w-1/2">
        <div className="card">
          <div className="flex flex-row">
            <div className="w-3/4 p-8">
              <h4 className="text-center">Register</h4>
              <br/>
              <p>Please enter your details to sign up and be part of our great community</p>
              <br/>
              <hr />
              <br/>
              <div className="flex flex-col">
              <label>Full name</label>
              <input type="text" placeholder="Firstname Lastname" className="mb-4"/>
              <label>Username</label>
              <input type="text" placeholder="Username" className="mb-4"/>
              <label>E-mail</label>
              <input type="text" placeholder="Email" className="mb-4"/>
              <label>Password</label>
              <input type="text" placeholder="Password" className="mb-4"/>
              </div>
              <br/>
              <button className="p-2 w-full bg-indigo-400 text-white">Register</button>
              <br/>
              <br/>
              <hr/>
              <br/>
              <p className="text-center">
                Already have an account? <Link to={ROUTE_PATH.LOGIN}><span>Sign in</span></Link>
              </p>
            </div>
            <div className="w-1/2">
              <img src={ImgRegister} alt="" classsName="rounded"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
