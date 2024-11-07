import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
`;

function PokemonList({ pokemons, addPokemon }) {
  return (
    <ListContainer>
      {pokemons.map((pokemon) => {
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />;
      })}
    </ListContainer>
  );
}

export default PokemonList;
