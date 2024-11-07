import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PokemonName = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const AddButton = styled.button`
  padding: 5px 10px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(204, 0, 0);
  }
`;

function PokemonCard({ pokemon, addPokemon }) {
  return (
    <Card>
      <PokemonName>{pokemon.name}</PokemonName>
      <AddButton onClick={() => addPokemon(pokemon)}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard;
