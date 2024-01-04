// FavoritesContext.js
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [applied, setApplied] = useState([]);

  const removeFromFavorites = (job) => {
    setFavoriteJobs((prevFavorites) =>
      prevFavorites.filter((favJob) => favJob.id !== job.id)
    );
  };

  const isFavorite = (job) => {
    return favoriteJobs.some((favJob) => favJob.id === job.id);
  };

  const addToFavorites = (job) => {
    setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
  };

  const addToApplied = (job) => {
    setApplied((prevApplied) => [...prevApplied, job]);
  };

  const removeFromApplied = (jobId) => {
    setApplied((prevApplied) => prevApplied.filter((job) => job.id !== jobId));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteJobs,
        addToFavorites,
        applied,
        addToApplied,
        removeFromFavorites,
        isFavorite,
        removeFromApplied,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
