import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const addToFavorites = (job) => {
    setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteJobs, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
