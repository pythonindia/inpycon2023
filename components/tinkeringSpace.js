import ReactMarkdown from "react-markdown";

export default function TinkeringSpace({ markdownContent }) {
  return (
    <>
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
        id="TinkeringSpace"
      >
        Tinkering Space
      </h1>
      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </>
  );
}
