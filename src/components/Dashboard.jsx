import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 80%;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  border: 1px solid rgb(250, 249, 249);
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
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

function Dashboard({ selectedPokemons }) {
  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      <PokemonList>
        {selectedPokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id}>{pokemon.name}</PokemonItem>
        ))}
      </PokemonList>
    </DashboardContainer>
  );
}

export default Dashboard;
