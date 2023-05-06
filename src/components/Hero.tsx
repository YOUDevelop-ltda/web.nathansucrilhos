import styled from "styled-components";
import CTAButton from "./CTAButton";

const HeroContainer = styled.div`
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    padding: 2rem 8rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div {
        
    }

    div.content {
        grid-column-start: 1;
        grid-column-end: 3;

        max-width: 40rem;
        
        > * {
            margin: 2rem 0;
        }

        h1 {
            font-weight: 700;
            font-size: 4rem;
        }

        p {
            font-weight: 500;
            font-size: 1.25rem;
        }
    }

    div.picture {
        grid-column-start: 3;
        grid-column-end: 4;
        position: relative;

        img {
            position: absolute;
            top: -10rem;
            left: -20rem;
        }
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroContainer>
            <div className="content">
                <h1>Domine a arte da Influência Digital</h1>
                <p>Não perca a oportunidade de ser um mentorado e conhecer mais sobre a incrível trajetória de Natan Sucrilhos, um influenciador digital que soma quase 1 milhão de seguidores em suas redes sociais.</p>
                <CTAButton />
            </div>
            <div className="picture">
                <img 
                    src="/hero-busto.png"
                    width={899}
                    height={937}
                />
            </div>
        </HeroContainer>
    );
};

export default Hero;
