import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

//how we get the data from the url
export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const setSearch = (search) => {
    const clean = removeEmptyKeys(search);
    setSearchParams(clean);
  };
  
  return { search, setSearch };
}

//used to clean the search params in case a search is left empty
export function removeEmptyKeys(obj){
  const filter = Object.entries(obj).filter(
    ([, value]) =>
      value !== undefined && value !== null && value !== ''
  );
  return Object.fromEntries(filter);
}
