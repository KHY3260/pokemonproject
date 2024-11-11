import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffebcd;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #d32f2f;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Dex() {
  const { selectedPokemon, addPokemon, removePokemon } =
    useContext(PokemonContext);

  return (
    <PageWrapper>
      <Container>
        <Title>나만의 포켓몬</Title>
        <Dashboard
          selectedPokemon={selectedPokemon}
          removePokemon={removePokemon}
        />
        <PokemonList pokemon={MOCK_DATA} addPokemon={addPokemon} />
      </Container>
    </PageWrapper>
  );
}

export default Dex;
