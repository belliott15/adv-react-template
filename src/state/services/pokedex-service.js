const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
// const TYPES_URL = `${API_URL}/types`;

//catch all get function that pulls from the api
export default async function get() {
  const res = await fetch(API_URL);
  const body = await res.json();
  // console.log('res.ok', res.ok);
  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}

// //gets all pokemon
// export async function getPokedex(){
//   return await get(API_URL);
// }

// //gets the types of pokemon and their counts
// export async function getTypes(){
//   return await get(TYPES_URL);
// }
