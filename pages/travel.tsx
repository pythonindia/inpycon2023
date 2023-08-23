import Head from "next/head";
import fs from "fs";
import path from "path";
import Travel from "../components/travel";
import MiscLayout from "../components/miscLayout";

interface TravelPageProps {
  markdownContent: string;
}

export default function TravelPage({ markdownContent }: TravelPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | Travel</title>
      </Head>
      <Travel markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "travel.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
