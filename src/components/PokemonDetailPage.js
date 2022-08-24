import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// importing axios so we can make a get request for more poke details
import axios from "axios"

function PokemonDetailPage() {
    const routeParams = useParams();
    // When using useState use: like and setLike
    const [pokemon, setPokemon] = useState(null);


// getting details other than just name. 
// will include pic, weight, and type
  useEffect(() => {
async function getPokemonDeets() {
const pokemonResponse = await axios.get(
`https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
);
setPokemon(pokemonResponse.data);
 }
getPokemonDeets();
}, []);


return pokemon ? (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} />
      <p>Types: {pokemon.types.map((typeObj) => <span>{typeObj.type.name} </span>)}</p>
      <p>Weight: {pokemon.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}

export default PokemonDetailPage;