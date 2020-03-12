import React, { useState } from 'react';
import useBlock from './useBlock';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './ContentEditor.scss';

const ContentEditor = ({ id }) => {
  const block = useBlock(id);
  const [value, setValue] = useState(block.value);

  return (
    <div>
      <CodeMirror
        options={{
          mode: 'markdown',
          viewportMargin: Infinity,
        }}
        value={value}
        onChange={setValue}
        className="ContentEditor__editor"
      />
    </div>
  );
}

export default ContentEditor;
