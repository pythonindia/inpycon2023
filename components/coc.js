import ReactMarkdown from "react-markdown";

export default function CoC({ markdownContent }) {
  return (
    <>
      <h1 id="coc">Code of Conduct</h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
