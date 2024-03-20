import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="footer-about">
            <h2>About</h2>
            <p>
              At Halal Jibika, our mission is to revolutionize the job search
              experience by providing a platform that streamlines the process
              and ensures a perfect match between employers and job seekers.
            </p>
          </div>
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                {" "}
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
                <a href="mailto:kausar.ahmad.tasin01@gmail.com">Email</a>
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
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "link-style"
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="lower-footer">
          <div className="copy-right">
            <p>Copyright © 2017 All Rights Reserved by Halal Jibika.</p>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/kausarahmad.tasin/">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/kausar-ahmad-8089861a1/">
              <CiLinkedin />
            </a>
            <a href="https://twitter.com/TasinKausar">
              <FaXTwitter />
            </a>
            <a href="https://discordapp.com/users/1112290636603863060">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
