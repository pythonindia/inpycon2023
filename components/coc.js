import ReactMarkdown from 'react-markdown';

export default function CoC({ markdownContent }) {
  return (
    <div className="coc-container">
      <h1>Code of Conduct</h1>
      <ReactMarkdown className="coc-content">
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
