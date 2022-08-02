import { useEffect, useState } from 'react';
import { getPokedex, getShapes } from '../services/pokedex-service.js';


export function usePokedex(search, options) {
  const [pokedex, setPokedex] = useState([]);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = options?.perPage ?? 20;

  useEffect(() => {
    setPage(1);
  }, [search]);


  useEffect(() => {
    let ignore = false;
    //gets the search information from params and 
    //destructures page and per page
    const fetch = async () => {
      const { data = {}, error } = await getPokedex(search, { 
        page,
        perPage 
      });

      if (ignore) return;

      if(data){
        const { results, count } = data;
        setPage(page);
        setCount(count);
        setError(null);
        //allows for previously loaded pokemon to remain
        if(page === 1){
          setPokedex(results);
        } else {
          setPokedex((pokedex) => [...pokedex, ...results]);
        }
      }
      if (error){
        setError(error);
      }
    };
    fetch();

    return () => (ignore = true);
  }, [search, page]) ;

  function addPage(){
    setPage((page) => {
      return page * perPage > count ? page : page + 1;
    });
  }


  return { pokedex, error, count, addPage };
}

export function useShapes(){
  const [shapes, setShapes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetch(){
      const { data, error } = await getShapes();
      if(ignore)return;
      setShapes(data);
      setError(error);
    }
    fetch();

    return () => (ignore = true);
  }, []);

  return { shapes, error };
}
