import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useBlock from '../hooks/useBlock';
import useBlocks from '../hooks/useBlocks';
import ShallowBlock from './ShallowBlock';
import Sortable from './Sortable';
import BlockContainer from './BlockContainer';
import ContentEditor from './ContentEditor';
import './DeepBlock.scss';

/**
 * render a block and it's children
 */
const DeepBlock = () => {
  const { id } = useParams();
  const [block] = useBlock(id);
  const [blocks, setBlocks] = useBlocks(id);

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
      {/* { blocks.length > 0 &&

          {blocks.map((props) => (
            <BlockContainer>
              <ShallowBlock {...props} key={props.id} />
            </BlockContainer>
          ))}
        </div>
      } */}
      <div className="DeepBlock__children">
        <Sortable items={blocks} setItems={setBlocks} component={ShallowBlock} />
      </div>
    </div>
  );
};

export default DeepBlock;
