import React from 'react';
import ShallowBlock from './ShallowBlock';
import { useParams } from 'react-router-dom';
import useBlocks from './useBlocks';
import ContentEditor from './ContentEditor';

const DeepBlock = () => {
  const { id } = useParams();
  const blocks = useBlocks(id);

  return (
    <div key={id}>
      <ContentEditor id={id} />
      {blocks.map((props) => <ShallowBlock {...props} key={props.id} />)}
    </div>
  );
};

export default DeepBlock;
