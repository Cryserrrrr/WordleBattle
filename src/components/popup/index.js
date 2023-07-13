import React from "react";

// Tools
import styled from "styled-components";
import theme from "utils/theme";
import { navigate } from "gatsby";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.secondary};
  opacity: 0.5;
`;

const PopupContainer = styled.div`
  width: 30%;
  height: 50%;
  background-color: ${theme.colors.tertiary};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  transition: all 0.3s ease;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Button = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${theme.colors.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`;

const WordContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Word = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = ({ title, word, reset, end }) => {

  return (
    <Container>
      <Background />
      <PopupContainer>
        <Title>{title}</Title>
        <Content>
          <WordContainer>
            Le mot était : 
            <Word>{word}</Word>
          </WordContainer>
        <ButtonContainer>
          <Button onClick={() => reset()}>Rejouer</Button>
          <Button onClick={() => navigate('/')}>Quitter</Button>
        </ButtonContainer>
        </Content>
      </PopupContainer>
    </Container>
  )
}

export default Popup;