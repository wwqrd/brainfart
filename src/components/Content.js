import React from 'react';
import ReactMarkdown from 'react-markdown';

const Content = (block) => {
  switch(block.type) {
    case 'markdown':
      return (
        <div>
          <ReactMarkdown source={block.value} />
        </div>
      );
    default:
      return (
        <div>
          <div>
            {block.value}
          </div>
        </div>
      );
  }
}

export default Content;
