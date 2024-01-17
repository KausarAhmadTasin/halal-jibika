import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p className="title-desc">
            Have questions, feedback, or suggestions? We'd love to hear from
            you. Feel free to reach out to us using the form below or through
            our email.
          </p>

          <div className="contact-form">
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
                autoFocus
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Write your messege"
              ></textarea>

              <button className="contact-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Or Email Us Directly</h2>
            <p>
              You can also reach us via email at{" "}
              <a href="mailto:kausar.ahmad.tasin01@gmail.com">
                kausar.ahmad.tasin01@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
