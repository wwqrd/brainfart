import { useContext } from 'react';
import Blocks from './Blocks';

const useBlock = (id) => {
  const [blocks, setBlocks] = useContext(Blocks);

  if (!id) { return [null, () => {}]; }

  const block = blocks.find(block => block.id === id);

  const setBlock = (updates) => {
    const updatedBlocks = blocks.map((b) => {
      if (b.id !== id) { return b; }
      return {
        ...b,
        ...updates,
      };
    });

    setBlocks(updatedBlocks);
  };

  return [block, setBlock];
};

export default useBlock;
