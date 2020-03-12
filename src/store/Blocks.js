import React, { useState } from 'react';
import defaultBlocks from './defaultBlocks.json';

const defaultValue = [[], () => {}];

export const Context = React.createContext(defaultValue);

export const Blocks = ({ children }) => {
  const [state, setState] = useState(defaultBlocks);

  return (
    <Context.Provider value={[ state, setState ]}>
      {children}
    </Context.Provider>
  );
};

export default Blocks;
