import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Contariner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Contariner>
      <h1>pokémon 백과사전</h1>
      <Button onClick={() => navigate("/dex")}>백과사전 시작</Button>
    </Contariner>
  );
}

export default Home;
