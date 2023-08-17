import ReactMarkdown from "react-markdown";

export default function ReportingGuide({ markdownContent }) {
  return (
    <>
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
        id="reporting-guide"
      >
        Reporting Guide
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
