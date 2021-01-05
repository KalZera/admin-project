import React, { FunctionComponent } from "react";

import { Container } from "Styles/Container";
import { Content, Title, SubTitle } from "./styled";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  const ResetPassawordFunction = () => {
    //código para redifinir senha
  };

  return (
    <>
      <Container>
        <Content>
          <Title>Seja Bem Vindo!!</Title>
          <SubTitle>Você está logado</SubTitle>
          <button onClick={ResetPassawordFunction}>Redefinir Senha</button>
        </Content>
      </Container>
    </>
  );
};
