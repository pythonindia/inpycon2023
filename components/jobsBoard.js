import Link from "next/link";
import Button from "components/button";
import Paragraph from "components/paragraph";

const JobsBoard = ({ jobs }) => {
  return (
    <div
      id="jobs"
      className="container p-4 justify-center"
    >
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Jobs
      </h1>
      <div className="my-4 text-center">
        <p>
          Welcome to the PyCon India 2023 Job Board – your gateway to exciting career opportunities in the world of Python! PyCon India is one of the largest and most vibrant Python conferences in the Asia-Pacific region, and this year, we are thrilled to offer an exclusive platform for Python enthusiasts and companies to connect, network, and explore career possibilities.
        </p>
        <Link
          href="jobs/rules-guidelines"
          target="_blank"
        >
          Rules and Guidelines
        </Link>
        <br />
        <Button
          buttonClassName="custom-button green-btn px-5 my-4"
          anchorClassName="text-decoration-none text-light"
          buttonLabel="Submit a Job"
          buttonHyperLink="https://forms.gle/1b1VeRprtCUMcdJs9"
        />
      </div>
      <div className="row my-4">
        <div className="text-center">
          {Array.isArray(jobs) && jobs.length === 0 &&
            <h3
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="800"
            >Currently No Job Listings Available – Check Back Soon!
            </h3>
          }
        </div>
        {jobs && jobs.map((job, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="jobs-card p-4">
              {/* Start of Job Header */}
              <div>
                <h3>{job.jobTitle}</h3>
                <a href={job.companyWebsite} target="_blank">
                  <h6>{job.companyName}</h6>
                </a>
              </div>
              {/* Start of Job Body */}
              <div className="row mt-4">
                {job.jobType && <span><strong>Type: </strong>{job.jobType}</span>}
                {job.jobLocation && <span><strong>Location: </strong>{job.jobLocation}</span>}
                {job.skills && <span><strong>Skills: </strong>{job.skills}</span>}
                {job.jobDescription &&
                  <Paragraph
                    text={"<strong>Job Description : </strong>" + job.jobDescription}
                    isHtml={true}
                    numberOfLines={3}
                  />}
                {job.companyDescription &&
                  <Paragraph
                    text={"<strong>Company Description : </strong>" + job.companyDescription}
                    isHtml={true}
                    numberOfLines={3}
                  />}
                <div className="row register-btn justify-content-center">
                  <div className="col-lg-6 col-12 mt-3">
                    <Button
                      buttonClassName="custom-button green-btn"
                      anchorClassName="text-decoration-none text-light"
                      buttonLabel="Apply"
                      buttonHyperLink={job.jobApplicationLink}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-3">
                    <Button
                      buttonClassName="custom-button submit-btn"
                      anchorClassName="text-decoration-none text-light"
                      buttonLabel="Email"
                      buttonHyperLink={`mailto:${job.email}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsBoard;
