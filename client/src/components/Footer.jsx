import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center p-10 bg-[#FAF7F0]">
      <div className="flex h-full w-full flex-col gap-10 px-20 lg:flex-row lg:justify-between">
        <div className=" lg:w-[450px]">
          <h2 className="relative mb-3 text-xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-black sm:font-sm">
            Official Mail Id
          </h2>
          <p className="text-gray-600">
          learnio2024@gmail.com
          </p>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-black">
            Contact Info
          </h2>
          <ul className="text-gray-600">
            <li className="mb-1">
              <Link to="/about">+91 99999 99999</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">+91 99999 99999</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">+91 99999 99999</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
