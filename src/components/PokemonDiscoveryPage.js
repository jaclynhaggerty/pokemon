import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PokemonBlock from "../components/PokemonBlock";

function PokemonDiscoveryPage() {
    const [pokeList, setPokeList] = useState(null);
    // filtering in search 
    const [filter, setFilter] = useState("");
    const params = useParams()
    // load data by making an html GET request to the below URL. 
    // want to happen at page load so utilize useEffect
    // async and await w axios
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            const pokeResponse = await axios.get(
                // limiting pokemon to 200 instead of over 1k
                "https://pokeapi.co/api/v2/pokemon?limit=200"
            );
            setPokeList(pokeResponse.data.results);
        }
        getPokemon();
        // adding more to the filter
        if (params.filter) {
            setFilter(params.filter)
        }
        else {
            setFilter("");
        }
    }, []);

    // def const for updating filter
    const updateFilter = (e) => {
        setFilter(e.target.value);
        navigate(`/${e.target.value}`);
    }

    return (
        <div>
            <input type='text' value={filter} onChange={updateFilter} />
            {/* use map to render pokemon names*/}
            {pokeList ? (
                pokeList.filter((pokeObj) => pokeObj.name.startsWith(filter)).map((pokeObj, i) => <PokemonBlock key={i} name={pokeObj.name} />)
            ) : (
                <p>Loading ..</p>
            )}
        </div>
    );
}

export default PokemonDiscoveryPage;