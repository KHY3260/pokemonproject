import { useDispatch } from "react-redux";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { addPokemon } from "./redux/pokemonSlice";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 16px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

function PokemonList({ pokemon }) {
  const dispatch = useDispatch();

  return (
    <ListContainer>
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          poke={poke}
          addPokemon={() => dispatch(addPokemon(poke))}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
