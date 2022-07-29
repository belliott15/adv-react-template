import { useState } from "react";


export default function usePokedex() {
const [pokedex, setPokedex] = useState([]);
const [error, setError] = useState(null);

return { pokedex, error }
}
