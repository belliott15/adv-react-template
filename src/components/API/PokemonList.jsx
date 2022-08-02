
import { useInView } from 'react-intersection-observer';
import useSearch from '../../state/hooks/url';
import { usePokedex } from '../../state/hooks/Pokedex';
import styles from './PokemonList.css';

export default function PokemonList() {
  const [searchParams] = useSearch();
  const { pokedex, addPage } = usePokedex(searchParams);

  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) addPage();
    },
  });

  return (
    <ul className={styles.PokemonList}>
      {pokedex.map((pokemon, i) => (
        <Card 
          key={pokemon._id}
          pokemon={pokemon}
          loadRef={i === pokemon.length - 3 ? ref : null}
        />
      ))}
    </ul>
  );
}

function Card({ pokemon, loadRef }){
  const { url_image, pokemon: name, type_1, type_2, id } = pokemon;

  return (
    <li className={styles.Card} ref={loadRef}>
      <p>ID: {id}</p>
      <img src={url_image} alt={name} />

      <h2 className={styles.Header} title={name}>
        {name}
      </h2>

      <div className={styles.Types}>
        <Type type={type_1} />
        <Type type={type_2} />
      </div>
    </li>
  );
}
//created to prevent NA types from showing up
function Type({ type }){
  return type === 'NA' ? null : <span>{type}</span>;
}
