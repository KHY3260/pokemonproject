import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
`;

function PokemonList({ pokemon, addPokemon }) {
  return (
    <ListContainer>
      {pokemon.map((poke) => {
        return (
          <PokemonCard key={poke.id} poke={poke} addPokemon={addPokemon} />
        );
      })}
    </ListContainer>
  );
}

export default PokemonList;
