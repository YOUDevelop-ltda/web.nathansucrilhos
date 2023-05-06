import styled from "styled-components";
import CTAButton from "./CTAButton";

const AboutTalkContainer = styled.div`
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundMuted};
    padding: 4rem 8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    h1 {
        font-weight: 700;
        font-size: 3.25rem;
    }

    p {
        font-weight: 400;
        font-size: 1.5rem;
    }

    img {
        width: 100%;
    }

    @media (max-width: 600px) {
        padding: 2rem 3rem;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

const AboutTalk: React.FC<{ setShow: (v: boolean) => void }> = ({ setShow }) => {
    return (
        <AboutTalkContainer>
            <h1>Sobre a palestra</h1>
            <p>
                O <strong>Experience 2023</strong> é uma oportunidade única para expandir seus horizontes e se conectar com ideias e pessoas inspiradoras. Reunindo alguns dos principais especialistas em suas áreas de atuação, este evento proporcionará uma imersão completa em tópicos importantes e relevantes para nossas vidas e carreiras.
            </p>
            <img src="/talk.png" />
            <p>
                Mas o evento não se trata apenas de aprendizado. É também um momento para conhecer novas pessoas, <strong>fazer networking e estabelecer conexões valiosas</strong> que podem ajudá-lo a crescer e a se destacar em sua carreira.
                Este é um evento que irá desafiar sua mente, energizar sua criatividade e inspirá-lo a fazer mudanças positivas em sua vida pessoal e profissional. Então, junte-se a nós e prepare-se para uma <strong>experiência inesquecível de aprendizado, conexão e colaboração</strong>.
            </p>
            <CTAButton onClick={() => setShow(true)} />
        </AboutTalkContainer>
    );
};

export default AboutTalk;
