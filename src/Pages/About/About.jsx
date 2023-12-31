import "./About.css";
import {
  FaBalanceScale,
  FaLightbulb,
  FaUsers,
  FaUserCheck,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="header">
          <h1>About Us</h1>
          <p>Connecting You with Your Dream Job</p>
        </div>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Halal Jibika, our mission is to revolutionize the job search
            experience by providing a platform that streamlines the process and
            ensures a perfect match between employers and job seekers.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://picsum.photos/200/200" alt="Team Member 1" />
              <p>Kausar Ahmad Tasin</p>
              <p>Co-Founder</p>
            </div>
            <div className="team-member">
              <img src="https://picsum.photos/200/201" alt="Team Member 2" />
              <p>Kausar Ahmad Tasin</p>
              <p>Lead Developer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <FaBalanceScale /> Integrity
            </li>
            <li>
              <FaLightbulb /> Innovation
            </li>
            <li>
              <FaUsers /> Collaboration
            </li>
            <li>
              <FaUserCheck /> Customer-Centric
            </li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or suggestions? Feel free to reach out to us at{" "}
            <a href="mailto:info@jobfinder.com">
              kausar.ahmad.tasin01@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
