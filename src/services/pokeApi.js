const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 20, offset = 0) => {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return response.json();
};

export const getPokemonByName = async (name) => {
    const response = await fetch(`${API_URL}/pokemon/${name}`);
    if (!response.ok) throw new Error('Pokemon not found');
    return response.json();
};