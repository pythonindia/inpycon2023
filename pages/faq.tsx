import Head from "next/head";

import fs from "fs";
import path from "path";
import Faqs from "../components/faqs";
import MiscLayout from "../components/miscLayout";
import { FAQPageJsonLd } from "next-seo";

interface CoCPageProps {
  markdownContent: string;
}

export default function CoCPage({ markdownContent }: CoCPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | FAQ</title>
      </Head>
      <FaQSchema />
      <Faqs markdownContent={markdownContent} />
    </MiscLayout>
  );
}

function FaQSchema() {
  return (
    <FAQPageJsonLd
      mainEntity={[
        {
          questionName: "What is PyCon India?",
          acceptedAnswerText:
            "PyCon India is the annual gathering of Pythonistas, run by the Indian Python community, to foster the adoption of the Python programming language. PyCon India 2023, will take place in Hyderabad, between 29 Sept - 02 Oct. This will be the 14th edition of the conference.",
        },
        {
          questionName:
            "I want to present at the conference. What should I do?",
          acceptedAnswerText:
            "The call for Proposals is now open. Please visit the [CFP page](https://in.pycon.org/cfp/pycon-india-2023/proposals/) to submit your talk/workshop/ proposal.",
        },
        {
          questionName:
            "I want to volunteer for the conference. What should I do?",
          acceptedAnswerText:
            "Check out the [Volunteer Page](https://in.pycon.org/blog/2023/volunteering-guide-pyconin23.html) to know about the roles and responsibilities",
        },
        {
          questionName:
            "What does the Conference ticket (Sep 30 and Oct 01, 2023) include?",
          acceptedAnswerText: `-   A full conference pass for two days that includes access to all keynotes, talks, poster sessions, lightning talks, and open spaces.
            -   Lunch
            -   High-Tea and Snacks
            -   PyCon India T-shirt and goodies`,
        },
      ]}
    />
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "faq.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
