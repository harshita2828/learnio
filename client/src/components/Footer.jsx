import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[#2f8fde] p-5 text-white ">
      <div className="max-w-3:flex-col flex h-full w-full justify-between max-[414px]:p-0 lg:flex-row lg:justify-center ">
        <div className="items-center justify-center lg:w-[450px]">
          <h2 className="relative mb-3 text-xl before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-white max-[600px]:font-[15px]">
            Official Mail Id
          </h2>
          <p className="text-white">learnio2024@gmail.com</p>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-xl before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-white">
            Contact Info
          </h2>
          <ul className="text-white">
            <li className="mb-1">
              <Link>+91 99999 99999</Link>
            </li>
            <li className="mb-1">
              <Link>+91 99999 99999</Link>
            </li>
            <li className="mb-1">
              <Link>+91 99999 99999</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
