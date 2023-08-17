import ReactMarkdown from "react-markdown";

export default function Travel({ markdownContent }) {
  return (
    <>
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
        id="Travel"
      >
        Getting to PyCon India 2023
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
