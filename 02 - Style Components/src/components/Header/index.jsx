import React from "react";
import { Button } from "../Button";
import logo from "../../assets/images/logo.png";

import {
  BuscarInputContainer,
  Input,
  MenuRight,
  Menu,
  Row,
  Wrapper,
  Container,
} from "./styles";

const Header = () => {
  return (
  <Wrapper>
    <Container>
        <Row>
            <img src={logo} alt="Logo da dio" height="35px" />
            <BuscarInputContainer>
                <Input placeholder="Buscar..." />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
            <MenuRight href="#">Home</MenuRight>
            <Button title="Entrar"/>
            <Button title="Cadastrar"/>
        </Row>
    </Container>
  </Wrapper>
  )
};

export { Header };
