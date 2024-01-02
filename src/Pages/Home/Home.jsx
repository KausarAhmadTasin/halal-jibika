import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import LatestJobs from "../../Components/LatestJobs/LatestJobs";
import Loading from "../../Components/Loading/Loading";
const Home = () => {
  const loadedJobs = useLoaderData();

  if (!loadedJobs) {
    return <Loading />;
  }
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
            <button className="primary-btn" id="exp-btn">
              {" "}
              Explore Now{" "}
            </button>
          </Link>
        </div>
        <div className="hero-img">
          <img src="../../../public/job-search.jpg" alt="" />
        </div>
      </section>
      <section className="latest-jobs">
        <h2 className="hero-title latest-box-title">Latest Jobs</h2>
        <div className="latest-jobs-container">
          <div className="jobs-list">
            {loadedJobs.data.slice(0, 5).map((job) => (
              <LatestJobs key={job.id} job={job} />
            ))}
          </div>
          <div>
            <Link to="/post">
              <button className="primary-btn " id="post-job-btn">
                Post Job
              </button>
            </Link>
            <Link to="/jobs">
              <button id="all-jobs-btn" className="primary-btn">
                {" "}
                All Jobs{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
