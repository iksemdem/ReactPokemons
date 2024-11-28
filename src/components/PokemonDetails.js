import React from "react";

const PokemonDetails = ({ pokemon }) => {
    return (
        <div className="pokemon-details">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Typ: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
            <p>Staty:</p>
            <ul>
                {pokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetails;