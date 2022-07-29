import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//how we get the data from the url
export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({});

  useEffect(() => {
    setParams(Object.fromEntries(searchParams.entries()));
  }, [searchParams.toString()]);
  
  //cleaning the params bar to restrict any undefined or null values
  const setParameters = (search) => {
    const clean = removeEmptyKeys(search);
    setSearchParams(clean);
  };
  
  return { params, setParameters };
}

//used to clean the search params in case a search is left empty
export function removeEmptyKeys(obj){
  const filter = Object.entries(obj).filter(
    ([, value]) =>
      value !== undefined && value !== null && value !== ''
  );
  return Object.fromEntries(filter);
}
