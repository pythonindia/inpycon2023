import Head from "next/head";
import fs from "fs";
import path from "path";
import YLW from "../components/ylw";
import MiscLayout from "../components/miscLayout";

interface YLWPageProps {
  markdownContent: string;
}

export default function YLWPage({ markdownContent }: YLWPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | Young Learners Workshop</title>
      </Head>
      <YLW markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "ylw.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
