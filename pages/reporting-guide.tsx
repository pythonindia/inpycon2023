import Head from "next/head";
import fs from "fs";
import path from "path";
import ReportingGuide from "../components/reporting_guide";
import MiscLayout from "../components/miscLayout";

interface ReportingGuidePageProps {
  markdownContent: string;
}

export default function ReportingGuidePage({ markdownContent }: ReportingGuidePageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | Reporting Guide</title>
      </Head>
      <ReportingGuide markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "reporting-guide.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
