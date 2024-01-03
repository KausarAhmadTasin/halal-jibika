import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditJob = () => {
  const location = useLocation();
  const { job } = location.state; // Accessing the job data from the route state
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/jobs/${job.id}`, editJob)
      .then((response) => {
        toast.success("Job eddited successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setEditJob(response.data);
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
                  name="jobName"
                  autoFocus
                  placeholder="Job Name..."
                  onChange={(e) =>
                    setEditJob({ ...editJob, title: e.target.value })
                  }
                />
              </div>
              <div className="single-input">
                <label htmlFor="logo">Logo</label>
                <br />

                <input
                  className="input-box"
                  id="logo"
                  name="logo"
                  autoFocus
                  placeholder="Company Logo..."
                  onChange={(e) =>
                    setEditJob({ ...editJob, logo: e.target.value })
                  }
                />
              </div>
              <div className="single-input">
                <label htmlFor="companyName">Company Name </label>
                <br />

                <input
                  className="input-box"
                  id="companyName"
                  name="companyName"
                  placeholder="Company Name..."
                  onChange={(e) =>
                    setEditJob({ ...editJob, companyName: e.target.value })
                  }
                />
              </div>
              <div className="single-input">
                <label htmlFor="res">Responsibility </label>
                <br />

                <input
                  className="input-box"
                  id="res"
                  name="res"
                  placeholder="Responsibility..."
                  onChange={(e) =>
                    setEditJob({ ...editJob, position: e.target.value })
                  }
                />
              </div>
              <div className="single-input">
                <label htmlFor="jobdesc">Job Description </label>
                <br />

                <input
                  className="input-box"
                  id="jobdesc"
                  name="jobdesc"
                  placeholder="Job Description..."
                  onChange={(e) =>
                    setEditJob({ ...editJob, description: e.target.value })
                  }
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
