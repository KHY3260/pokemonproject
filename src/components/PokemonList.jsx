import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 16px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

function PokemonList({ pokemon, addPokemon }) {
  return (
    <ListContainer>
      {pokemon.map((poke) => (
        <PokemonCard key={poke.id} poke={poke} addPokemon={addPokemon} />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
