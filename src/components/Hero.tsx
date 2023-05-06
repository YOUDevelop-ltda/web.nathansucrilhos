import styled from "styled-components";
import CTAButton from "./CTAButton";

const HeroContainer = styled.div`
    padding: 2rem 8rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    z-index: 1;

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
            z-index: -1;
        }
    }

    @media (max-width: 1000px) {
        .big {
            display: none;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 2rem;

        h1 {
            font-size: 3rem;
        }

        img {
            width: 100%;
            margin-top: -3rem;
            margin-bottom: -10rem;
            z-index: -1;
        }

        p {
            font-weight: 500;
            font-size: 1.25rem;
        }
    }
    
    @media (min-width: 1000px) {
        .mid {
            display: none;
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 4rem;
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroContainer>
            <div className="content big">
                <h1>Domine a arte da Influência Digital</h1>
                <p>Não perca a oportunidade de ser um mentorado e conhecer mais sobre a incrível trajetória de Natan Sucrilhos, um influenciador digital que soma mais de 30 milhões de seguidores em suas redes sociais. Além de 180 perfis com mais de 100 mil seguidores!</p>
                <CTAButton />
            </div>
            <div className="picture big">
                <img 
                    src="/hero-busto.png"
                    width={899}
                    height={937}
                />
            </div>
            <h1 className="mid">Domine a arte da Influência Digital</h1>
            <p className="mid">Não perca a oportunidade de ser um mentorado e conhecer mais sobre a incrível trajetória de Natan Sucrilhos, um influenciador digital que soma mais de 30 milhões de seguidores em suas redes sociais. Além de 180 perfis com mais de 100 mil seguidores!</p>
            <CTAButton className="mid" />
            <img 
                src="/hero-busto.png"
                className="mid"
            />
        </HeroContainer>
    );
};

export default Hero;
