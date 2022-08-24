import { NavLink } from 'react-router-dom'


function PokemonBlock({ name }) {
    return (
        <div>
            {/* makes pokemon names clickable. when click on, route 
            should be /details/nameofpokemon */}
            <NavLink to={`/details/${name}`}>{name}</NavLink>
        </div>
    )
}

export default PokemonBlock