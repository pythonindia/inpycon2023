import ReactMarkdown from "react-markdown";

export default function Faqs({markdownContent}) {
  return (
    <>
      <h1 id="faq">Frequently Asked Questions</h1>
      <ReactMarkdown className="content">
        {markdownContent}
      </ReactMarkdown>
    </>
  );
}
