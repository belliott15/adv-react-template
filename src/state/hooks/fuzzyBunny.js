import { useState } from 'react';
import { getFamiliesWithBunnies } from "../services/fuzzy-bunny-service";


export default function useFamilies() {
    const [error, setError] = useState(null);


  return (
    <div>fuzzyBunny</div>
  )
}
