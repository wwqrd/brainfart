import React, { useState } from 'react';
import defaultBlocks from './defaultBlocks.json';

const defaultValue = [[], () => {}];

const Blocks = React.createContext(defaultValue);

export const BlocksProvider = ({ children }) => {
  const [state, setState] = useState(defaultBlocks);

  return (
    <Blocks.Provider value={[ state, setState ]}>
      {children}
    </Blocks.Provider>
  );
};

export default Blocks;
