import React from "react";

// Tools
import { navigate } from "gatsby";
import theme from "../../utils/theme";
import styled from "styled-components";

// Containers
import TopBar from "../TopBar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: Column;
`;

const Menu = () => {
  return (
    <Container>
      <TopBar />
      <MenuDiv>
        <h1 onClick={() => navigate('/solo')}>Solo</h1>
        <h1>Multiplayer</h1>
        <h1>Settings</h1>
      </MenuDiv>
    </Container>
  );
}

export default Menu;