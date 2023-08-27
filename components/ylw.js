import ReactMarkdown from "react-markdown";

export default function YLW({ markdownContent }) {
  return (
    <>
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
        id="ylw"
      >
        Young Learners Workshop
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
