import { createContext, useReducer } from 'react';

export const FuzzyBunnyContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load': 
      return payload;
    case 'add':
      return [...list, payload];
    case 'update': 
      return list.map((fam) => (fam.id === payload.id ? payload : fam));
    case 'remove': 
      return list.filter((fam) => fam.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, familyDispatch] = useReducer(reducer, null);

  const value = {
    families,
    familyDispatch
  };

  return (
    <FuzzyBunnyContext.Provider value={value}>
      {children}
    </FuzzyBunnyContext.Provider>
  );

    
}
