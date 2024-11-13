import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffebcd;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const PokemonName = styled.h2`
  font-size: 1.8rem;
  color: #d32f2f;
  margin: 10px 0;
`;

const PokemonType = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: aliceblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rosybrown;
  }
`;

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <p>포켓몬을 찾을 수 없습니다.</p>;
  }

  return (
    <PageWrapper>
      <Container>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonType>{pokemon.types.join(", ")}</PokemonType>
        <PokemonType>{pokemon.description}</PokemonType>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </Container>
    </PageWrapper>
  );
}

export default PokemonDetail;
