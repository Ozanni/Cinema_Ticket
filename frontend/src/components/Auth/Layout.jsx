import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { Header } from "../Header/Header";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <StyledLayout>
        <Login onSuccess={() => navigate("/home")} />
        <Register onSuccess={() => navigate("/home")} />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  // position: absolute;
  background-color: #1a1d29;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  width: 100%;
  padding: 0.5em 3em;
`;
