import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonLogo from "../assets/pokemon-logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 700px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 200px;
  padding: 20px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={pokemonLogo} alt="Pokemon Logo" />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}

export default Home;
