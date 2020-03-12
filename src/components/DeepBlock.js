import React from 'react';
import ShallowBlock from './ShallowBlock';
import { Link, useParams } from 'react-router-dom';
import useBlock from './useBlock';
import useBlocks from './useBlocks';
import BlockContainer from './BlockContainer';
import ContentEditor from './ContentEditor';
import './DeepBlock.scss';

const DeepBlock = () => {
  const { id } = useParams();
  const [block] = useBlock(id);
  const blocks = useBlocks(id);

  return (
    <div className="DeepBlock" key={id}>
      { block && !block.parent &&
        <div className="DeepBlock__breadcrumb">
          <Link to={`/`}>ROOT</Link>
        </div>
      }
      { block && block.parent &&
        <div className="DeepBlock__breadcrumb">
          <Link to={`/block/${block.parent}`}>{block.value}</Link>
        </div>
      }
      { id &&
        <div className="DeepBlock__container">
          <ContentEditor id={id} />
        </div>
      }
      { blocks.length > 0 &&
        <div className="DeepBlock__children">
          {blocks.map((props) => (
            <BlockContainer>
              <ShallowBlock {...props} key={props.id} />
            </BlockContainer>
          ))}
        </div>
      }
    </div>
  );
};

export default DeepBlock;
