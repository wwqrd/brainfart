import { useContext } from 'react';
import { Context } from '../store/Blocks';

const useBlocks = (id) => {
  const [blocks, setBlocks] = useContext(Context);

  if (!id) {
    return [blocks.filter(block => !block.parent), setBlocks];
  }

  return [blocks.filter(block => block.parent === id), setBlocks];
};

export default useBlocks;
