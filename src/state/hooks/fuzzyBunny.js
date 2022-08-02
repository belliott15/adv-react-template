import { useContext, useEffect, useState } from 'react';
import { FuzzyBunnyContext } from '../context/FuzzyBunnyContext';
import { getFamiliesWithBunnies } from '../services/fuzzy-bunny-service';


export default function useFamilies() {
  const [error, setError] = useState(null);
  const { families, familyDispatch } = useContext(FuzzyBunnyContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;

    async function fetch() {
      const { data, error } = await getFamiliesWithBunnies();
      if (ignore) return;

      if(error){
        setError(error);
      }
      if(data){
        familyDispatch({ type: 'load', payload: data });
      }
    }

    fetch();
    return () => (ignore = true);
  }, []);
    


  return { families, error };
}

// create an actions function that follows CRUD 
