import { useContext } from 'react';
import { Context } from '../store/Blocks';

const useBlock = (id) => {
  const [blocks, setBlocks] = useContext(Context);

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
