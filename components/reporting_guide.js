import ReactMarkdown from "react-markdown";

export default function ReportingGuide({ markdownContent }) {
  return (
    <>
      <h1 id="reporting-guide">Reporting Guide</h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
