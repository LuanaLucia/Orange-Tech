import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea
            cupiditate quis error non natus! Dolores, ad iste.
          </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu Cadastro</TitleLogin>
                <SubtitleLogin>Faça o seu login e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />}/>   
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>   
                    <Button title="Entrar" variant="secondary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
