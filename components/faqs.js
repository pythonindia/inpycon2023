import ReactMarkdown from "react-markdown";
import content from "../data/FAQs.md";

export default function Faqs() {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:m-5">
          <ReactMarkdown className="m-5">
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
