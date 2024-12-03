import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-5 bg-[#FAF7F0] ">
      <div className="flex h-full w-full max-[414px]:p-0 max-w-3:flex-col p-18 lg:flex-row lg:justify-center">
        <div className=" lg:w-[450px]">
          <h2 className="relative mb-3 text-xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-black max-[600px]:font-[15px]">
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
