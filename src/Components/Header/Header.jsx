import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Config/Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useAuthState(auth);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Logged out!");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <>
      {showSidebar && (
        <nav ref={menuRef}>
          <div className="sidebar">
            <div onClick={handleClick} className="cancel-sidebar">
              <RxCross2 />
            </div>
            <div className="profile-container">
              {user ? (
                <div className="profile">
                  <Link>
                    <li>
                      {" "}
                      <img
                        className="profile-img"
                        src={user?.photoURL}
                        alt=""
                      />{" "}
                    </li>
                  </Link>
                  <Link>
                    <li className="profile-name">{user?.displayName}</li>
                  </Link>
                </div>
              ) : (
                <CgProfile className="profile-img" />
              )}
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
              {user ? (
                <Link onClick={() => handleSignOut()}>
                  <li className="log-btn">Log-Out</li>
                </Link>
              ) : (
                <NavLink className="log-btn" to="/login">
                  <li>Log-In</li>
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      )}

      <nav>
        <div className="nav-bar">
          <div className="logo-box">
            <Link to="/">
              <p className="logo">HALAL JIBIKA</p>
            </Link>
          </div>
          <div className=" links ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active hideOnSmallScreen" : "link-style"
              }
            >
              <li className="hideOnSmallScreen">Home</li>
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "active  hideOnSmallScreen" : "link-style"
              }
            >
              <li className="hideOnSmallScreen">Jobs</li>
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive ? "active hideOnSmallScreen" : "link-style"
              }
            >
              <li className="hideOnSmallScreen">Favorite</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active hideOnSmallScreen" : "link-style"
              }
            >
              <li className="hideOnSmallScreen">About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active hideOnSmallScreen" : "link-style"
              }
            >
              <li className="hideOnSmallScreen">Contact</li>
            </NavLink>

            {user ? (
              <Link onClick={() => handleSignOut()}>
                <li className="log-btn  hideOnSmallScreen">Log-Out</li>
              </Link>
            ) : (
              <NavLink className="log-btn hideOnSmallScreen" to="/login">
                <li>Log-In</li>
              </NavLink>
            )}
          </div>
          <div className="profile-container hideOnSmallScreen">
            {user ? (
              <div className="profile">
                <Link>
                  <li>
                    {" "}
                    <img
                      className="profile-img"
                      src={user?.photoURL}
                      alt=""
                    />{" "}
                  </li>
                </Link>
                <Link>
                  <li className="profile-name">{user?.displayName}</li>
                </Link>
              </div>
            ) : (
              <CgProfile className="profile-img" />
            )}
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
