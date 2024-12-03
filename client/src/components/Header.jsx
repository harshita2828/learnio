
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData, setUserData } from "../Redux/slices/user-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(removeUserData());
    navigate("/");
  };

  return (
    <header className="flex h-[80px] items-center justify-center shadow-md bg-[#278adb]">
      <div className="mx-5 flex w-full max-w-[1550px] items-center justify-between">
        {/* image section */}
        <div className="flex h-[60px] w-[120px] items-center justify-center overflow-hidden">
          {/* <img src="/learnio.png" alt="Logo" /> */}
        </div>
        {/* Hamburger menu icon */}
        <GiHamburgerMenu
          className="text-xl md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
        />

        {/* nav links for desktop */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Conditional Rendering for authenticated user */}
          {isAuthenticated ? (
            <>
              <Link to="/search">
                <FaSearch className="text-xl" />
              </Link>
              <Link to="/upload">
                <MdOutlineFileUpload className="text-[24px]" />
              </Link>
              <Link to="/profile">
                <button className="rounded-xl bg-[#4A4947] px-5 py-2 hover:bg-[#B17457] text-[#FFF0D1]">
                  Profile
                </button>
              </Link>
              <button
                className="rounded-xl bg-[#4A4947] px-5 py-2 hover:bg-[#B17457] text-[#FFF0D1]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="rounded-xl bg-white px-5 py-2 hover:bg-[#B17457] text-black">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-xl bg-white px-5 py-2 hover:bg-[#B17457] text-black">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger menu for mobile */}
        {isMenuOpen && (
          <div
          className={`md:hidden text-white flex flex-col items-center gap-4 absolute w-full top-[80px] py-4 left-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "menu-open" : "menu"
          }`}
          style={{
            backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.9)" : "rgba(39, 138, 219, 0)", // Apply opacity here
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)", // Slide effect
          }}
        >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* Conditional Rendering for authenticated user */}
            {isAuthenticated ? (
              <>
                <Link to="/search">
                  <FaSearch className="text-xl" />
                </Link>
                <Link to="/upload">
                  <MdOutlineFileUpload className="text-[24px]" />
                </Link>
                <Link to="/profile">
                  <button className="rounded-xl bg-[#4A4947] px-5 py-2 hover:bg-[#B17457] text-[#FFF0D1]">
                    Profile
                  </button>
                </Link>
                <button
                  className="rounded-xl bg-[#4A4947] px-5 py-2 hover:bg-[#B17457] text-[#FFF0D1]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-xl bg-white px-5 py-2 hover:bg-[#B17457] text-black">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-white px-5 py-2 hover:bg-[#B17457] text-black">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
