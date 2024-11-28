import React, { useState, useEffect } from "react";
import { getPokemonList } from "../services/pokeApi";

const PokemonList = ({ onSelect }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // Funkcja do pobierania Pokemonów
    const fetchPokemonList = async (offset) => {
        setIsLoading(true);
        const data = await getPokemonList(20, offset); // Pobierz 20 Pokemonów na podstawie offsetu
        setPokemonList((prev) => [...prev, ...data.results]); // Dodaj nowe Pokemony do istniejących
        setIsLoading(false);
    };

    // Załaduj początkową listę Pokemonów
    useEffect(() => {
        fetchPokemonList(offset);
    }, [offset]); // Załaduj ponownie, gdy offset się zmieni

    // Funkcja do obsługi kliknięcia przycisku Load More
    const handleLoadMore = () => {
        setOffset((prev) => prev + 20); // Zwiększ offset o 20
    };

    return (
        <div>
            <ul className="pokemon-list">
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name} onClick={() => onSelect(pokemon.name)}>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
            <div className="load-more">
                <button onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Load More"}
                </button>
            </div>
        </div>
    );
};

export default PokemonList;