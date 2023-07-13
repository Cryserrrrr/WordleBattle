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

const Button = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <TopBar menu={true}/>
      <MenuDiv>
        <Button onClick={() => navigate('/solo')}>Solo</Button>
        <Button>Multiplayer</Button>
        <Button>Settings</Button>
      </MenuDiv>
    </Container>
  );
}

export default Menu;