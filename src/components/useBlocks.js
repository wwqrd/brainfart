import defaultBlocks from './defaultBlocks.json';

const useBlocks = (id) => {
  return defaultBlocks.filter(block => block.parent === id);
};

export default useBlocks;
