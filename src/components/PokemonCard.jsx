import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: white;
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

function PokemonCard({ poke, addPokemon }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${poke.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <img src={poke.img_url} alt={poke.korean_name} />
      <PokemonName>{poke.korean_name}</PokemonName>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          addPokemon(poke);
        }}
      >
        추가
      </AddButton>
    </Card>
  );
}

export default PokemonCard;
