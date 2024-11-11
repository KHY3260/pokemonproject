import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("6개의 포켓몬을 초과할 수 없습니다.");
      return;
    }
    if (!selectedPokemon.find((p) => p.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemonId) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
