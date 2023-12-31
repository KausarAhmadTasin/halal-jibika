import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Find Halal Jobs</h1>
          <h3 className="hero-slogan">
            “Keep hardworking, take patients and make yourself always ready for
            jobs”
          </h3>
          <div className="dero-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            maiores, sunt eius amet optio repellat deleniti officia sit eos
            dolor aliquid assumenda ducimus. Nemo corrupti id ratione at autem
            itaque?
          </div>
          <button className="primary-btn">Explore</button>
        </div>
        <div className="hero-img">
          <img src="../../../public/job-search.jpg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
