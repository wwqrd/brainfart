import React from 'react';
import ShallowBlock from './ShallowBlock';
import { Link, useParams } from 'react-router-dom';
import useBlock from './useBlock';
import useBlocks from './useBlocks';
import BlockContainer from './BlockContainer';
import ContentEditor from './ContentEditor';

const DeepBlock = () => {
  const { id } = useParams();
  const [block] = useBlock(id);
  const blocks = useBlocks(id);

  return (
    <div key={id}>
      { block && !block.parent &&
        <Link to={`/`}>ROOT</Link>
      }
      { block && block.parent &&
        <Link to={`/block/${block.parent}`}>{block.value}</Link>
      }
      { id &&
        <BlockContainer>
          <ContentEditor id={id} />
        </BlockContainer>
      }
      {blocks.map((props) => (
        <BlockContainer>
          <ShallowBlock {...props} key={props.id} />
        </BlockContainer>
      ))}
    </div>
  );
};

export default DeepBlock;
