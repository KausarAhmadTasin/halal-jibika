import "./Favorite.css";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import Job from "../../Components/Job/Job";
import Loading from "../../Components/Loading/Loading";

const Favorite = () => {
  const { favoriteJobs } = useFavorites();

  if (!favoriteJobs) {
    return <Loading />;
  }

  return (
    <div className="fav-container">
      <h2 className="hero-title latest-box-title">Favorite Jobs</h2>
      {favoriteJobs.length <= 0 && <h2>No Favorite Job!</h2>}
      <div className="jobs-box">
        {favoriteJobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
