import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useBlock from '../hooks/useBlock';
import useBlocks from '../hooks/useBlocks';
import Content from './Content';
import ContentEditor from './ContentEditor';

const ShallowBlock = ({ id }) => {
  const [block] = useBlock(id);
  const [blocks] = useBlocks(id);

  const ref = useRef();

  if (blocks.length > 0) {
    return (<div key={id}><Link to={`/block/${id}`}><Content {...block} key={id} /></Link></div>);
  }

  return <div key={id} onClick={() => ref.current.focus()}><ContentEditor {...block} ref={ref} id={id} /></div>;
};

export default ShallowBlock;
