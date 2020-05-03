import React from "react";

const imageAvatar =
  "https://avatars0.githubusercontent.com/u/810438?s=460&u=4e652785fe5aa4aae075c40815741e8721f11fd5&v=4";

const Header = ({ children, darkMode }) => {
  return (
    <div className="fixed w-full h-16 z-30 bg-white shadow-lg pr-16 ml-16">
      <div className="flex flex-row w-full h-full justify-between px-4 md:px-6 lg:px-8 text-gray-500">
        <div className="flex flex-row items-center">
          <div className="hidden md:block">
            <i className="hover:text-gray-600 far fa-envelope fa-lg pr-4" />
            <i className="hover:text-gray-600 far fa-comment-alt fa-lg pr-4" />
            <i className="hover:text-gray-600 far fa-check-circle fa-lg pr-4" />
            <i className="hover:text-gray-600 far fa-calendar fa-lg pr-4" />
            <i className="hover:text-orange-500 far fa-star fa-lg pr-4 text-orange-400" />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <i className="hover:text-gray-600 far fa-flag fa-lg pl-4" />
          <i className="hover:text-gray-600 far fa-bookmark fa-lg pl-4" />
          <i className="hover:text-gray-600 far fa-bell fa-lg pl-4" />
          <div className="flex pl-4">
            <div className="text-sm text-right text-black">
              <p>Dan Abramov</p>
              <p className="text-green-500">Available</p>
            </div>
            <img
              alt=""
              src={imageAvatar}
              className="h-10 w-10 rounded-full ml-2 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
