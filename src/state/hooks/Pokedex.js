import { useEffect, useState } from 'react';
import { getPokedex, getShapes } from '../services/pokedex-service.js';


export function usePokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await getPokedex();
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

export function useShapes(){
  const [shapes, setShapes] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function fetch(){
      const { data, error } = await getShapes();

      if (data){
        setShapes(data);
        setError(null);
      }
      if (error) {
        setError(error);
      }
    }
    fetch();
  }, []);

  return { shapes, error };
}
