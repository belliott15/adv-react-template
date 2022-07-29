
import styles from './PokemonList.css';

export default function PokemonList({ pokedex }) {
  return (
    <ul className={styles.PokemonList}>
      {pokedex.map((pokemon) => 
        <Card 
          key={pokemon._id}
          pokemon={pokemon}
        />
      )}
    </ul>
  );
}

function Card({ pokemon }){
  const { url_image, pokemon: name, type_1, type_2, id } = pokemon;

  return (
    <li className={styles.Card}>
      <p>ID: {id}</p>
      <img src={url_image} alt={name} />

      <h2 className={styles.Header} title={name}>
        {name}
      </h2>

      <div>
        <span>{type_1}</span>
        <span>{type_2}</span>
      </div>
    </li>
  );
}
