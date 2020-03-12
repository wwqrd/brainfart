import React from 'react';
import { Link } from 'react-router-dom';
import useBlock from './useBlock';
import useBlocks from './useBlocks';
import Content from './Content';

const ShallowBlock = ({ id }) => {
  const block = useBlock(id);
  const blocks = useBlocks(id);

  if (blocks.length > 0) {
    return (<Link to={`/block/${id}`}><Content {...block} key={id} /></Link>);
  }

  return <Content {...block} key={id} />;
};

export default ShallowBlock;
