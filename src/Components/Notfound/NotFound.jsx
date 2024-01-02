import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.subheading}>Page Not Found</p>
        <p style={styles.message}>
          Oops! The page you are looking for might be in another castle.
        </p>
        <Link to="/" style={styles.link}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  content: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: "4em",
    color: "#dc3545",
    margin: "0",
  },
  subheading: {
    fontSize: "1.5em",
    color: "#6c757d",
    margin: "10px 0",
  },
  message: {
    fontSize: "1em",
    color: "#495057",
    margin: "0 0 20px",
  },
  link: {
    fontSize: "1.2em",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px 20px",
    backgroundColor: "#0a66c2",
    border: "2px solid #007bff",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default NotFound;
