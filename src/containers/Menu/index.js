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
  overflow: hidden;
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


const StyledUL = styled.ul`
  position: relative;
  padding: 0;

  &:hover {
    color: #0002;
  }

  li {
    list-style: none;
    text-align: center;
    cursor: pointer;

  }

  li a {
    color: #fff;
    text-decoration: none;
    font-size: 3em;
    padding: 5px 20px;
    display: inline-flex;
    font-weight: 700;
    transition: 0.5s;
    margin: 5px 20px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3em;
      color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      z-index: -1;
      opacity: 0;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 200px;
      transition: letter-spacing 0.5s, left 0.5s;
    }

    &:hover:before {
      content: attr(data-text);
      opacity: 1;
      left: 50%;
      letter-spacing: 10px;
      width: 1300px;
      height: 1300px;
    }

    &:hover {
      color: #000;
      margin: 5px 20px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
    }
  }

  li:nth-child(6n + 1) a:before {
    background-color: #81ecec;
  }

  li:nth-child(6n + 2) a:before {
    background-color: #ff7675;
  }

  li:nth-child(6n + 3) a:before {
    background-color: #55efc4;
  }

  li:nth-child(6n + 4) a:before {
    background-color: #a29bfe;
  }

  li:nth-child(6n + 5) a:before {
    background-color: #fd79a8;
  }

  li:nth-child(6n + 6) a:before {
    background-color: #ffeaa7;
  }
`;

const Menu = () => {
  return (
    <Container>
      <TopBar menu={true}/>
      <MenuDiv>
        <StyledUL>
          <li onClick={() => navigate('/solo')} >
            <a data-text="Solo">Solo</a>
          </li>
          <li>
            <a data-text="Multijoueur">Multijoueur</a>
          </li>
          <li>
            <a data-text="Bonus">Bonus</a>
          </li>
          <li>
            <a data-text="Classement">Classement</a>
          </li>
          <li>
            <a data-text="Paramètres">Paramètres</a>
          </li>
      {/* Ajoutez les autres éléments de la liste ici */}
    </StyledUL>
      </MenuDiv>
    </Container>
  );
}

export default Menu;