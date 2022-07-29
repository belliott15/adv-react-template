import { usePokedex } from '../../state/hooks/Pokedex.js';
import PokemonList from './PokemonList';
import styles from './Pokedex.css';

export default function Pokedex() {
  const { pokedex } = usePokedex();

  if (!pokedex) return null;

  return (
    <section className={styles.Pokedex}>
      <PokemonList pokedex={pokedex}/> 
    </section>
  );
}
