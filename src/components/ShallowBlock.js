import React from 'react';
import { Link } from 'react-router-dom';
import useBlock from '../hooks/useBlock';
import useBlocks from '../hooks/useBlocks';
import Content from './Content';
import ContentEditor from './ContentEditor';

const ShallowBlock = ({ id }, ref) => {
  const [block] = useBlock(id);
  const [blocks] = useBlocks(id);

  if (blocks.length > 0) {
    return (<div><Link to={`/block/${id}`}><Content {...block} key={id} /></Link></div>);
  }

  return <div><ContentEditor id={id} /></div>;
};

export default ShallowBlock;
