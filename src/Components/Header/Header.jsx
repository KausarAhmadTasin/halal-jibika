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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorite"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Signup
                </NavLink>
              </li>
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
            <li className="hideOnSmallScreen">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hideOnSmallScreen">
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                Jobs
              </NavLink>
            </li>
            <li className="hideOnSmallScreen">
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                Favorite
              </NavLink>
            </li>
            <li className="hideOnSmallScreen">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                About
              </NavLink>
            </li>
            <li className="hideOnSmallScreen">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="hideOnSmallScreen">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "active" : "link-style"
                }
              >
                Signup
              </NavLink>
            </li>
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
