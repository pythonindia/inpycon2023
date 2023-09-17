import Head from "next/head";
import Header from "components/header";
import JobsBoard from "components/jobsBoard";
import Footer from "components/footer";

import fetchSheetData from "utils/googleSheets";

const JobsPage = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Job Board</title>
      </Head>
      <Header />
      <JobsBoard jobs={jobs} />
      <Footer />
    </>
  );
};

const fetchJobsData = async () => {
  try {
    const sheetId = "1YXfaowCgD8NlOYfQgJukb3yRa9svux6hai9mczdqzbA";
    const sheetIndex = 0;
    const jobsData = await fetchSheetData(sheetId, sheetIndex);
    const approvedJobs = jobsData
      .filter((job) => job.Approved === "TRUE")
      .map((row) => ({
        email: row["Email"],
        companyName: row["Company Name"],
        companyDescription: row["Company Description"],
        companyWebsite: row["Company Website"],
        jobTitle: row["Job Title"],
        jobType: row["Job Type"],
        jobDescription: row["Job Description"],
        jobLocation: row["Job Location"],
        jobApplicationLink: row["Job Application Link"],
        skills: row["Skills (Optional)"],
        comments: row["Comments"],
      }));
    return approvedJobs;
  } catch (error) {
    console.error("Error fetching jobs data:", error);
    return [];
  }
};

export async function getStaticProps() {
  // Fetch initial jobs data during build time
  const initialJobs = await fetchJobsData();
  return {
    props: {
      jobs: initialJobs,
    },
    revalidate: 1 * 60 * 60, // 1 hour in seconds
  };
}

export default JobsPage;
