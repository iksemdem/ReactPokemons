import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemonByName } from "./services/pokeApi";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import SearchBar from "./components/SearchBar";
import RandomButton from "./components/RandomButton";
import "./App.css";

const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        loadPokemonList();
    }, [offset]);

    const loadPokemonList = async () => {
        const data = await getPokemonList(20, offset);
        setPokemonList((prev) => [...prev, ...data.results]);
    };

    const handleSearch = async (name) => {
        try {
            setError(null);
            const data = await getPokemonByName(name.toLowerCase());
            setSelectedPokemon(data);
        } catch {
            setError("Pokemon nie znaleziony");
        }
    };

    const handleRandom = async () => {
        const randomId = Math.floor(Math.random() * 898) + 1; // tu liczba ile jest pokemonow by wiecej randoma nie dawalo
        const data = await getPokemonByName(randomId);
        setSelectedPokemon(data);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <RandomButton onClick={handleRandom} />
            {error && <p>{error}</p>}
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
            <PokemonList pokemonList={pokemonList} onSelect={handleSearch} />
        </div>
    );
};

export default App;