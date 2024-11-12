import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import pokeballImage from "../assets/pokeball.png";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #d9534f;
  margin-bottom: 20px;
`;

const PokemonListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const PokemonSlot = styled.div`
  width: 100px;
  min-height: 130px;
  border: 2px dashed #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
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

const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 5px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c9302c;
  }
`;

function Dashboard() {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <PokemonListContainer>
        {Array.from({ length: 6 }).map((_, pokemon) => (
          <PokemonSlot key={pokemon}>
            {selectedPokemon[pokemon] ? (
              <>
                <PokemonImage
                  src={selectedPokemon[pokemon].img_url}
                  alt={selectedPokemon[pokemon].korean_name}
                />
                <PokemonName>
                  {selectedPokemon[pokemon].korean_name}
                </PokemonName>
                <PokemonNumber>No. {selectedPokemon[pokemon].id}</PokemonNumber>
                <RemoveButton
                  onClick={() => removePokemon(selectedPokemon[pokemon].id)}
                >
                  제거
                </RemoveButton>
              </>
            ) : (
              <PokemonImage src={pokeballImage} alt="빈 포켓몬 슬롯" />
            )}
          </PokemonSlot>
        ))}
      </PokemonListContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
