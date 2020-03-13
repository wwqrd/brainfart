import React, { useState, useCallback } from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import useBlock from '../hooks/useBlock';

const ContentEditor = React.forwardRef(({ id }, ref) => {
  const [block, setBlock] = useBlock(id);
  const rawData = markdownToDraft(block.value);
  const editorContent = convertFromRaw(rawData);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(editorContent));

  const draftEditorContent = editorState.getCurrentContent();

  const saveEditorState = useCallback(() => {
    setBlock({
      value: draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    });
  }, [setBlock, draftEditorContent]);

  return (
    <div className="ContentEditor">
      <Editor
        ref={ref}
        editorState={editorState}
        onChange={setEditorState}
        onBlur={saveEditorState}
      />
    </div>
  );
});

export default ContentEditor;
