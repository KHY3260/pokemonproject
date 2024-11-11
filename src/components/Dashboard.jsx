import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  width: 100%;
`;

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const PokemonItem = styled.div`
  padding: 10px;
  background-color: rgb(224, 224, 224);
  border-radius: 5px;
`;
const PokemonImage = styled.img`
  width: 50px;
  height: 50px;
`;

function Dashboard() {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      <PokemonList>
        {selectedPokemon.map((pokemon) => (
          <PokemonItem key={pokemon.id}>
            <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
            <div>{pokemon.korean_name}</div>
            <button onClick={() => removePokemon(pokemon.id)}>제거</button>
          </PokemonItem>
        ))}
      </PokemonList>
    </DashboardContainer>
  );
}

export default Dashboard;
