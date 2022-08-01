import { usePokedex } from '../../state/hooks/Pokedex.js';
import PokemonList from './PokemonList';
import Search from './Search';
import styles from './Pokedex.css';


export default function Pokedex() {

  return (
    <section className={styles.Pokedex}>
      <Search />
      <PokemonList /> 
    </section>
  );
}
