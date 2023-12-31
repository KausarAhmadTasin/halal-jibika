const Job = ({ job }) => {
  const { title, logo, companyName, position } = job;
  console.log(logo);
  return (
    <>
      <h2>{title}</h2>
      <img src={logo} alt="" />
      <h3>{companyName}</h3>
      <h3>{position}</h3>
    </>
  );
};

export default Job;
