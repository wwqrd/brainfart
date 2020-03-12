import defaultBlocks from './defaultBlocks.json';

const useBlock = (id) => {
  if (!id) {
    return defaultBlocks.find(block => !block.parent);
  }
  return defaultBlocks.find(block => block.id === id);
};

export default useBlock;
