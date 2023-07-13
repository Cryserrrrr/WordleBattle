import React from "react";

// Tools
import { navigate } from "gatsby";
import theme from "utils/theme";
import styled from "styled-components";

// Icons
import Icon from "utils/icon";

const Container = styled.div`
  background-color: transparent;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: white;
  position: absolute;
  top: 0;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
`;

const UserDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  right: 0;
  position: absolute;
`;

const TopBar = () => {
  return (
    <Container>
      <TitleDiv>
        <h1>Wordle Battle</h1>
      </TitleDiv>
      <UserDiv>
        <Icon icon="User" />
        <h3>Username</h3>
      </UserDiv>
    </Container>
  );
}

export default TopBar;