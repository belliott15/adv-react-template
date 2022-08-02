const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const SHAPES_URL = `${API_URL}/shapes`;

//catch all get function that pulls from the api
export default async function get(url) {
  const res = await fetch(url);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}

//gets all pokemon
export async function getPokedex(search, pagingOptions = {}){
  const params = new URLSearchParams(search);
  const { page, perPage } = pagingOptions; 
  if(page) params.set('page', page);
  if(perPage) params.set('perPage', perPage);

  return await get(`${API_URL}?${params.toString()}`);
}

//gets the shapes of pokemon and their counts
export async function getShapes(){
  return await get(SHAPES_URL);
}
