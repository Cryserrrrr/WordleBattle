import React, { useEffect, useState } from "react";

// Tools
import { navigate } from "gatsby";
import theme from "utils/theme";
import styled from "styled-components";

// Containers
import TopBar from "../TopBar";

// Components
import Keyboard from "components/keyboard";
import Grid from "components/grid";
import Popup from "components/popup";

// Words
import words from 'utils/words.json'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const Solo = () => {

  const [letter, setLetter] = useState("")
  const [value, setValue] = useState("")
  const [result, setResult] = useState({})
  const [tryNb, setTryNb] = useState(0)
  const [notFound, setNotFound] = useState(false)
  const [end, setEnd] = useState("")
  const [word, setWord] = useState("")
  const [letterNb, setLetterNb] = useState(5)

  const chance = 6;

  const getWord = () => {
    // there is an exemple of the words.json file 
    // {"M": "abyssal", "no": "2", "CONT": "mesure adj", "DOM": {"code": "QUAt", "nom": "quantité, quantitatif", "niveau-de-langue": "litteraire"}, "OP": "st", "SENS": "très grd,insondable", "OP1": "cn", "CA": {"code": "A-", "categorie": "A", "type": "animal", "genre": "MF"}, "ID": 1412, "LVF": false}
    const randomLine = words[Math.floor(Math.random() * words.length)]
    const tempWord = randomLine.M
    if ((tempWord?.length === 5 || tempWord?.length === 6) && tempWord.match(/^[a-zA-Z]+$/)) {
      setWord("abysal")
      setLetterNb(6)
    } else {
      getWord()
    }
  }

  // get keyboard input
  useEffect(() => {
    getWord()
    const handleKeyDown = (event) => {
      setValue(event.key)
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // set letter
  useEffect(() => {
    if (!end) {
      if (value.length === 1 && value.match(/[a-z]/i) && letter.length < letterNb) {
        setLetter(letter + value)
        setValue("")
      } else if (value === "Backspace" || value === "retour") {
        setLetter(letter.slice(0, -1))
        setValue("")
        setNotFound(false)
      } if (letter.length === letterNb && value === "Enter" || value === "Entrée") {
        if (words.find((word) => word.M === letter)) {
          verify()
        } else {
          setNotFound(true)
        }
      }
    }
  }, [value])

  useEffect(() => {
    if (tryNb === chance) {
      loose()
    }
  }, [tryNb])

  // verify
  const verify = () => {
    if (letter === word) {
      win()
    }
    let rowResult = []
    for (let i = 0; i < letter.length; i++) {
      if (letter[i] === word[i]) {
        rowResult.push({ color: "g", letter: letter[i] })
      } else if (word.includes(letter[i])) {
        if (letter.indexOf(letter[i]) !== letter.lastIndexOf(letter[i]) && rowResult.find((result) => result.letter === letter[i]) && word.indexOf(letter[i]) !== word.lastIndexOf(letter[i])) {
          rowResult.push({ color: "y", letter: letter[i] }) 
        } else if (letter.indexOf(letter[i]) !== letter.lastIndexOf(letter[i]) && rowResult.find((result) => result.letter === letter[i]) && word.indexOf(letter[i]) === word.lastIndexOf(letter[i])) {
          rowResult.push({ color: "r", letter: letter[i] })
        } else {
          rowResult.push({ color: "y", letter: letter[i] })
        }
      } else {
        rowResult.push({ color: "r", letter: letter[i] })
      }
    }
    console.log('rowResult', rowResult)
    setResult({ ...result, [tryNb]: {result: rowResult, letter} })
    setLetter("")
    if (chance > tryNb) {
      setTryNb(tryNb + 1)
    }
  }

  // win
  const win = () => {
    setEnd("Gagnée !")
  }

  // loose
  const loose = () => {
    setEnd("Perdue !")
  }

  // Reset
  const reset = () => {
    setLetter("")
    setResult({})
    setTryNb(0)
    setNotFound(false)
    setEnd("")
    getWord()
  }

  return (
    <Container>
      <TopBar />
      {end && <Popup title={end} word={word} reset={reset} end={end}/>}
      <Grid letter={letter} letterNb={letterNb} chance={chance} tryNb={tryNb} word={word} result={result}/>
      <Keyboard setValue={setValue} result={result}/>
    </Container>
  );
}

export default Solo;