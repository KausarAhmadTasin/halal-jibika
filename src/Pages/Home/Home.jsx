import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import LatestJobs from "../../Components/LatestJobs/LatestJobs";
const Home = () => {
  const loadedJobs = useLoaderData();
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Find Halal Jobs</h1>
          <h3 className="hero-slogan">
            “Keep hardworking, have patience and make yourself always ready for
            jobs”
          </h3>
          <div className="dero-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            maiores, sunt eius amet optio repellat deleniti officia sit eos
            dolor aliquid assumenda ducimus. Nemo corrupti id ratione at autem
            itaque?
          </div>
          <Link to="/signup">
            <button className="primary-btn"> Explore Now </button>
          </Link>
        </div>
        <div className="hero-img">
          <img src="../../../public/job-search.jpg" alt="" />
        </div>
      </section>
      <section className="latest-jobs">
        <h2 className="hero-title latest-box-title">Latest Jobs</h2>
        <div className="jobs-list">
          {loadedJobs.data.slice(0, 5).map((job) => (
            <LatestJobs key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
