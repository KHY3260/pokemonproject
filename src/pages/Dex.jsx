import { useSelector } from "react-redux";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MOCK_DATA";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8eacb;
  min-height: 100vh;
  padding: 40px 0;
`;

function Dex() {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  return (
    <PageWrapper>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemon={MOCK_DATA} />
    </PageWrapper>
  );
}

export default Dex;
