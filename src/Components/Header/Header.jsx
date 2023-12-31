import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      {showSidebar && (
        <nav>
          <div className="sidebar">
            {/* <Link to="/">
              <div className="logo logo-side">HALAL JIBIKA</div>
            </Link> */}
            <div onClick={handleClick} className="cancel-sidebar">
              <RxCross2 />
            </div>
            <div className="links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>Jobs</li>
              </NavLink>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>Favorite</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                <li>Signup</li>
              </NavLink>
            </div>
          </div>
        </nav>
      )}

      <nav>
        <div className="nav-bar">
          <Link to="/">
            <div className="logo">HALAL JIBIKA</div>
          </Link>
          <div className=" links ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">Home</li>
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">Jobs</li>
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">Favorite</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">Contact</li>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              <li className="hideOnSmallScreen">Signup</li>
            </NavLink>
          </div>
          <div onClick={() => handleClick()} className="hamburger">
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
