

export default function Pokedex() {
const { pokedex } = usePokedex();

  return (
    <div>
        <PokemonList pokedex={pokedex}/>
    </div>
  )
}
