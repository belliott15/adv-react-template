import { useEffect, useState } from 'react';
import get from '../services/pokedex-service.js';


export function usePokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await get();
      if(data){
        const { results, count } = data;
        setPokedex(results);
        setCount(count);
        setError(null);
      }
      if (error){
        setError(error);
      }
    };
    fetch();
  }, []) ;


  return { pokedex, error, count };
}