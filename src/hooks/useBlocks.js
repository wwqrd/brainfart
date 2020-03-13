import { useContext } from 'react';
import { Context } from '../store/Blocks';

const useBlocks = (id) => {
  const [blocks, setBlocks] = useContext(Context);
  let related;
  let unrelated;

  if (!id) {
    related = blocks.filter(block => !block.parent);
  } else {
    related = blocks.filter(block => block.parent === id);
  }

  return [related, setBlocks];
};

export default useBlocks;
