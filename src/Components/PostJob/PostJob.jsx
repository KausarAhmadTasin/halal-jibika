import { useEffect, useState } from "react";
import "./PostJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PostJob = () => {
  const [jobPost, setJobPost] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });
  const URL = `http://localhost:9000/jobs`;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, jobPost)
      .then((response) => {
        setJobPost(response.data);
        navigate("/jobs");
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  // useEffect(() => {
  //   if (jobPost) {
  //     // Check if some condition is met before navigating
  //     navigate("/jobs");
  //   }
  // }, [jobPost]);

  return (
    <>
      {/* Job No: 1

Company Name: Google
Responsibility: Intern Developer
Job Description: This is an internship opportunity from Google */}
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
                    setJobPost({ ...jobPost, title: e.target.value })
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
                    setJobPost({ ...jobPost, logo: e.target.value })
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
                    setJobPost({ ...jobPost, companyName: e.target.value })
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
                    setJobPost({ ...jobPost, position: e.target.value })
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
                    setJobPost({ ...jobPost, description: e.target.value })
                  }
                />
              </div>
              <div>
                <input type="submit" value="Post Job" className="sign-up-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;
