import styled from "styled-components";
import CTAButton from "./CTAButton";

const WhoAmIContainer = styled.div`
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.text};
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

    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        p {
            font-weight: 400;
            font-size: 1.5rem;
        }

        img {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        div {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 4rem;
    }
`;

const WhoAmI: React.FC<{ setShow: (v: boolean) => void }> = ({ setShow }) => {
    return (
        <WhoAmIContainer>
            <h1>Quem sou eu?</h1>
            <div>
                <p>
                    Olá, meu nome é Natan, especialista em tráfego orgânico e vendas online. Desde pequeno, sempre tive um grande interesse pela internet e pelo mundo das redes sociais. Passava horas navegando no Facebook e Instagram, e aos poucos fui descobrindo a possibilidade de criar conteúdo e compartilhar com outras pessoas. Foi então que comecei a experimentar o mundo da fotografia e edição de vídeo, criando pequenos projetos que compartilhava com meus amigos e familiares.
                </p>
                <img src="/car.png" />
            </div>
            <div>
                <img src="/friends.png" />
                <p>
                    Com o tempo, minha audiência começou a crescer e comecei a receber oportunidades de trabalhar com marcas que admirava. Foi incrível poder transformar minha paixão em uma carreira e ter a chance de fazer o que amo todos os dias. Hoje, como influenciador digital, tenho um compromisso com meus seguidores de criar conteúdo autêntico, honesto e relevante. Meu objetivo é inspirar e motivar as pessoas, e ajudá-las a descobrir novas maneiras de se expressar e se conectar com o mundo.
                </p>
            </div>
            <CTAButton onClick={() => setShow(true)} />
        </WhoAmIContainer>
    );
};

export default WhoAmI;
