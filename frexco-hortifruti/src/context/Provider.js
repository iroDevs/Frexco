/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import Context from './HortContext';

export default function Provider({ children }) {
  const contextValue = {

  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}
