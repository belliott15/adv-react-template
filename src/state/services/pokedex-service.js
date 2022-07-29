const TYPES_URL = `${process.env.API_URL}/types`;

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
export async function getPokedex(){
  return await get(`${process.env.API_URL}`);
}

//gets the types of pokemon and their counts
export async function getTypes(){
  return await get(TYPES_URL);
}
