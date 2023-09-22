import React, { useState } from 'react';

const Paragraph = (props) => {
  const [expanded, setExpanded] = useState(props.expanded);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (<>
    {props.isHtml &&
      <p
        className={props.className + (expanded ? ' m-0' : ' paragraph-limit-text m-0')}
        dangerouslySetInnerHTML={{ __html: props.isHtml && props.text }}
        style={{ WebkitLineClamp: props.numberOfLines }}
      >
      </p>
    }
    {!props.isHtml &&
      <p
        className={props.className + (expanded ? ' m-0' : ' paragraph-limit-text m-0')}
        style={{ WebkitLineClamp: props.numberOfLines }}
      >
        {props.text}
      </p>
    }
    <span
      className="paragraph-read-more"
      onClick={toggleText}>
      {expanded ? 'Hide' : 'Read More'}
    </span>
  </>
  );
};

Paragraph.defaultProps = {
  expanded: false,
  isHtml: false,
  numberOfLines: 3,
  text: '',
};

export default Paragraph;
