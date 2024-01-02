// // AuthContext.js
// import React, { createContext, useContext, useEffect, useReducer } from "react";
// import {
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
// } from "firebase/auth";
// import auth from "../Config/Firebase";

// const AuthContext = createContext();

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, isAuthenticated: true };
//     case "LOGOUT":
//       return { ...state, isAuthenticated: false };
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         dispatch({ type: "LOGIN" });
//       } else {
//         dispatch({ type: "LOGOUT" });
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = async () => {
//     const provider = new GoogleAuthProvider();
//     await signInWithPopup(auth, provider);
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated: state.isAuthenticated, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { AuthProvider, useAuth };
