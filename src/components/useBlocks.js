import { useContext } from 'react';
import Blocks from './Blocks';

const useBlocks = (id) => {
  const [blocks] = useContext(Blocks);

  if (!id) {
    return blocks.filter(block => !block.parent);
  }

  return blocks.filter(block => block.parent === id);
};

export default useBlocks;
