import Head from "next/head";

import fs from "fs";
import path from "path";
import MiscLayout from "../components/miscLayout";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface AboutPageProps {
  markdownContent: string;
}

export default function About({ markdownContent }: AboutPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | FAQ</title>
      </Head>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "about.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
