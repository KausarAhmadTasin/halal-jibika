import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Config/Firebase";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
