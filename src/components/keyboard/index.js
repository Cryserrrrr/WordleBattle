import React, { useEffect, useState } from "react";

// Tools
import theme from "../../utils/theme";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  width: 600px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Key = styled.div`
  width: ${props => props.letter?.length !== 1 ? "110px" : "50px"};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  background-color: ${props => props.color === "g" ? theme.colors.green : props.color === "y" ? theme.colors.yellow : props.color === "r" ? theme.colors.primary : theme.colors.secondary};
  border-radius: 10px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => !props.color && theme.colors.tertiary};
  }
`;


const Keyboard = ({setValue, result}) => {

  const firstRow = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"]
  const secondRow = ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"]
  const thirdRow = ["Entrée" ,"w", "x", "c", "v", "b", "n", "retour"]
  const [allResult, setAllResult] = useState({})

  useEffect(() => {
    let tempsAllResult = {}
    for (let i = 0; i < Object.keys(result).length; i++) {
      for (let index = 0; index < result[i].letter.length; index++) {
        tempsAllResult = { ...tempsAllResult, [result[i].letter[index]]: result[i].result[index].color}
      }
    }
    setAllResult(tempsAllResult)
  }, [result])



  const displayLetter = (row) => {
    return (
      <Row>
      {row.map((letter, index) => {
        return (
          <Key key={index} letter={letter} onClick={() => setValue(letter)} color={allResult[letter]}>{letter}</Key>
        )
      })}
      </Row>
    )
  }

  return (
    <Container>
      {displayLetter(firstRow)}
      {displayLetter(secondRow)}
      {displayLetter(thirdRow)}
    </Container>
  );
}

export default Keyboard;