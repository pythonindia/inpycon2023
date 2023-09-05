import Head from "next/head";
import ReactMarkdown from "react-markdown";

import fs from "fs";
import path from "path";
import MiscLayout from "components/miscLayout";

interface JobsBoardRulesGuidelinesPageProps {
  markdownContent: string;
}

export default function JobsBoardRulesGuidelinesPage({
  markdownContent,
}: JobsBoardRulesGuidelinesPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>
          PyCon India 2023, Hyderabad | Job Board Rules and Guidelines
        </title>
      </Head>
      <div id="job-board-rules-guidelines">
        <h1
          className="com-head text-center"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Job Board - Rules and Guidelines
        </h1>
        <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
      </div>
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "job-board-rules-guidelines.md"
  );

  let markdownContent = fs.readFileSync(filePath, "utf8");
  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");
  return {
    props: {
      markdownContent,
    },
  };
}
