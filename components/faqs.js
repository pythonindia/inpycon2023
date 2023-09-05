import ReactMarkdown from "react-markdown";

export default function Faqs({ markdownContent }) {
  return (
    <div id="faq">
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Frequently Asked Questions
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </div>
  );
}
