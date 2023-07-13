import React from "react";

// Tools
import theme from "utils/theme";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  width: ${props => props.letterNb * 75}px;
  height: ${props => props.chance * 75}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Letter = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 2px solid ${theme.colors.secondary};
  border-radius: 10px;
  font-size: 35px;
  font-weight: bold;
  background-color: ${props => props.result === "g" ? theme.colors.green : props.result === "y" ? theme.colors.yellow : theme.colors.primary};
  text-transform: uppercase;
  transition: all 0.3s ease;
`;

const Grid = ({ letterNb, tryNb, letter, chance, word, result }) => {

  const displayLetter = (letter, index, i) => {
    if (tryNb === index && letter[i]) {
      return letter[i]
    } else if (result[index] && result[index].letter[i]) {
      return result[index].letter[i]
    } else {
      return ""
    }
  }

  return (
    <Container>
      {Array.from(Array(chance), (e, index) => {
        return (
          <Row key={index} letterNb={letterNb} chance={chance}>
            {Array.from(Array(letterNb), (e, i) => {
              return (
                <Letter key={i} result={result[index] && result[index].result[i].color} index={index}>
                  {displayLetter(letter, index, i)}
                </Letter>
              )
            })}
          </Row>
        )
      })}
    </Container>
  );
}

export default Grid;