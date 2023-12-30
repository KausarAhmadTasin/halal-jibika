import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img className="logo-img" src="../../../public/logo.png" alt="logo" />
          <h3>Halal Jibika</h3>
        </div>
        <div className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "link-style")}
            >
              Signup
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Header;
