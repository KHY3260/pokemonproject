import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPokemon } from "../redux/pokemonSlice";

const Card = styled.div`
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 150px;
  margin: 8px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonName = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
`;

const PokemonNumber = styled.p`
  font-size: 0.9em;
  color: #777;
  margin: 5px 0;
`;

const AddButton = styled.button`
  padding: 5px 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;

function PokemonCard({ poke }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${poke.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImage src={poke.img_url} alt={poke.korean_name} />
      <PokemonName>{poke.korean_name}</PokemonName>
      <PokemonNumber>No. {poke.id.toString().padStart(3, "0")}</PokemonNumber>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addPokemon(poke));
        }}
      >
        추가
      </AddButton>
    </Card>
  );
}

export default PokemonCard;
