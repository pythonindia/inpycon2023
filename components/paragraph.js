import React, { useState } from 'react';

const Paragraph = (props) => {
    const [expanded, setExpanded] = useState(props.expanded);

    const toggleText = () => {
        setExpanded(!expanded);
    };

    return (<>
        <p
            className={expanded ? '' : 'paragraph-limit-text'}
            dangerouslySetInnerHTML={{ __html: props.isHtml && props.text }}
            style={{ WebkitLineClamp: 3 }}
        >
        </p>
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
