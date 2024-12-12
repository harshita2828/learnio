
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux"; 
import { removeUserData } from "../Redux/slices/user-slice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setIsMenuOpen(false); 
  }, [location]);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  //const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(removeUserData());
    navigate("/");
  };

  return (
    <header className="flex h-[80px] items-center justify-center bg-[#2f8fde] shadow-md">
      <div className="mx-5 flex w-full max-w-[1550px] items-center justify-between">
        <div className="flex h-[60px] w-[120px] items-center justify-center overflow-hidden">
        </div>
        <GiHamburgerMenu
          className="cursor-pointer text-xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
        <div className="hidden text-white md:flex md:items-center md:justify-center md:gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {isAuthenticated ? (
            <>
              <Link to="/search">
                <FaSearch className="text-xl" />
              </Link>
              <Link to="/upload">
                <MdOutlineFileUpload className="text-[24px]" />
              </Link>
              <Link to="/profile">
                <button className="rounded-xl bg-[#4A4947] px-5 py-2 text-[#FFF0D1] hover:bg-[#B17457]">
                  Profile
                </button>
              </Link>
              <button
                className="rounded-xl bg-[#4A4947] px-5 py-2 text-[#FFF0D1] hover:bg-[#B17457]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="rounded-xl bg-white px-5 py-2 text-black hover:bg-[#B17457]">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-xl bg-white px-5 py-2 text-black hover:bg-[#B17457]">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
        {isMenuOpen && (
          <div
            className={`absolute left-0 top-[80px] flex w-full flex-col items-center gap-4 py-4 text-white transition-all duration-300 ease-in-out z-50 md:hidden ${
              isMenuOpen ? "menu-open" : "menu"
            }`}
            style={{
              backgroundColor: isMenuOpen
                ? "rgba(0, 0, 0, 0.9)"
                : "rgba(39, 138, 219, 0)",
              transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {isAuthenticated ? (
              <>
                <Link to="/search">
                  <FaSearch className="text-xl" />
                </Link>
                <Link to="/upload">
                  <MdOutlineFileUpload className="text-[24px]" />
                </Link>
                <Link to="/profile">
                  <button className="rounded-xl bg-[#4A4947] px-5 py-2 text-[#FFF0D1] hover:bg-[#B17457]">
                    Profile
                  </button>
                </Link>
                <button
                  className="rounded-xl bg-[#4A4947] px-5 py-2 text-[#FFF0D1] hover:bg-[#B17457]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-xl bg-white px-5 py-2 text-black hover:bg-[#B17457]">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-white px-5 py-2 text-black hover:bg-[#B17457]">
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
