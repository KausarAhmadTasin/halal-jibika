import "./Favorite.css";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";

const Favorite = () => {
  const { favoriteJobs } = useFavorites();
  console.log(favoriteJobs);
  return (
    <div className="fav-container">
      <h2>Favorite Jobs</h2>

      {favoriteJobs.map((job) => (
        <ul key={job.id}>
          <li>{job.title}</li>
          <li>{job.position}</li>
          <li>{job.descrioption}</li>
        </ul>
      ))}
    </div>
  );
};

export default Favorite;
