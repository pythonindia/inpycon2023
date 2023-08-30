import Link from "next/link";
import Button from "components/button";
import Paragraph from "components/paragraph";

import IconComponent from "components/icons";

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
          href="jobs-board-rules-guidelines"
          target="_blank"
        >
          Rules and Guidelines
        </Link>
        <Button
          buttonClassName="custom-button green-btn px-5 my-4 mx-auto"
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
                <h4>{job.jobTitle}</h4>
                {job.companyWebsite ?
                  <Link href={job.companyWebsite} target="_blank" >
                    <div className="mb-1">
                      <span className="me-2">
                        <IconComponent name="building" color="#fff" backgroundColor="1f928d" size={30} />
                      </span>
                      {job.companyName}
                    </div>
                  </Link>
                  :
                  <div>
                    <span className="me-2">
                      <IconComponent name="building" color="#fff" backgroundColor="1f928d" size={30} />
                    </span>
                    {job.companyName}
                  </div>
                }
                {job.jobLocation &&
                  <div className="mb-1">
                    <span className="me-2">
                      <IconComponent name="location" color="#fff" backgroundColor="1f928d" size={30} />
                    </span>
                    {job.jobLocation}
                  </div>
                }
                {job.jobType &&
                  <div className="mb-1">
                    <span className="me-2">
                      <IconComponent name="briefCase" color="#fff" backgroundColor="1f928d" size={30} />
                    </span>
                    {job.jobType}
                  </div>
                }
              </div>
              {/* Start of Job Body */}
              <div className="row mt-2">
                {job.skills &&
                  <div className="mb-1">
                    {"Skills: " + job.skills}
                  </div>
                }
                {job.jobDescription &&
                  <Paragraph
                    text={job.jobDescription}
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
                      icon={<IconComponent className="ms-2" name="arrowRight" padding={0} size={20} />}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-3">
                    <Button
                      buttonClassName="custom-button submit-btn"
                      anchorClassName="text-decoration-none text-light"
                      buttonLabel="Email"
                      buttonHyperLink={`mailto:${job.email}`}
                      icon={<IconComponent className="ms-2" name="envelope" padding={0} size={20} />}
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
