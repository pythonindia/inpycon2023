import ReactMarkdown from "react-markdown";

export default function CoC({ markdownContent }) {
  return (
    <div id="coc">
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Code of Conduct
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </div>
  );
}
