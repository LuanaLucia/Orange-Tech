import bannerImage from "../../assets/images/professional-challenges.png"
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";

import {Container, TextContent, TitleHighlight, Title} from "./styles"

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                <TitleHighlight>
                    Implemente</TitleHighlight> <br />
                
                    o seu futuro global agora!
                
                </Title>
                <TextContent>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea cupiditate quis error non natus! Dolores, ad iste.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={()=>null} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }