import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJob = () => {
  const location = useLocation();
  const { job } = location.state;
  const navigate = useNavigate();
  const [editJob, setEditJob] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  useEffect(() => {
    if (job) {
      setEditJob({
        title: job.title,
        logo: job.logo,
        companyName: job.companyName,
        position: job.position,
        description: job.description,
      });
    }
  }, [job]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditJob((prevEditJob) => ({
      ...prevEditJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://my-json-server.typicode.com/KausarAhmadTasin/halal-jibika/jobs/${job.id}`,
        // `https://kausar-ahmad.onrender.com/jobs/${job.id}`,
        editJob
      )
      .then((response) => {
        toast.success("Job edited successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/jobs");
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  return (
    <>
      <div className="post-container">
        <div className="post-block">
          <div className="inner-post">
            <h2 className="post-title">Want an Employee? Post New Job!</h2>

            <form onSubmit={handleSubmit}>
              <div className="single-input">
                <label htmlFor="jobName">Job Name </label>
                <br />

                <input
                  className="input-box"
                  id="jobName"
                  name="title"
                  autoFocus
                  value={editJob.title}
                  required
                  placeholder="Job Name..."
                  onChange={handleInputChange}
                />
              </div>
              <div className="single-input">
                <label htmlFor="logo">Logo</label>
                <br />

                <input
                  className="input-box"
                  id="logo"
                  name="logo"
                  required
                  value={editJob.logo}
                  placeholder="Company Logo..."
                  onChange={handleInputChange}
                />
              </div>
              <div className="single-input">
                <label htmlFor="companyName">Company Name </label>
                <br />

                <input
                  className="input-box"
                  id="companyName"
                  name="companyName"
                  value={editJob.companyName}
                  placeholder="Company Name..."
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="single-input">
                <label htmlFor="res">Responsibility </label>
                <br />

                <input
                  className="input-box"
                  id="res"
                  name="position"
                  placeholder="Responsibility..."
                  required
                  value={editJob.position}
                  onChange={handleInputChange}
                />
              </div>
              <div className="single-input">
                <label htmlFor="jobdesc">Job Description </label>
                <br />

                <input
                  className="input-box"
                  id="jobdesc"
                  name="description"
                  placeholder="Job Description..."
                  required
                  value={editJob.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input type="submit" value="Edit Job" className="sign-up-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJob;
