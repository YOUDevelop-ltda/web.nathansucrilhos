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
        padding: 2rem 3rem;

        h1 {
            font-size: 2rem;
        }

        div > p {
            font-size: 1rem;
        }
    }
`;

const WhoAmI: React.FC<{ setShow: (v: boolean) => void }> = ({ setShow }) => {
    return (
        <WhoAmIContainer>
            <h1>Quem sou eu?</h1>
            <div>
                <p>
                    Olá, meu nome é Natan Sucrilhos, especialista em tráfego orgânico e vendas online. Desde pequeno, percebi que eu teria que criar minhas próprias oportunidades, em 2016 observei que o Instagram seria a próxima rede social a se tornar a maior do brasil, e durante 4 anos seguidos errei de todas as formas possíveis, ate que em 2020 compilei todos meus erros e comecei a aplicar todas as estratégias que me fizeram sair de uma base de 500 mil seguidores para mais de 30 milhões e desbravar ate então uma esteira de produtos que não existia no mercado, me tornando um dos maiores copywriters do brasil, em relação a páginas de Instagram .  E AGORA, vou revelar tudo pra vocês .... mais de 7 anos de erros e acertos e vou te ajudar a transformar seu Instagram em uma maquina de vendas.
                </p>
                <img src="/car.png" />
            </div>
            <div>
                <img src="/friends.png" />
                <p>
                    e nesse processo pude realizar um dos maiores sonhos da minha vida : dar uma casa para minha mãe , aposentar meus pais, que ate então vendiam bombons nos bares e investir na carreira de cantora da minha irmã Vitoria Montes .... Meu propósito agora e te ajudar a concretizar seus maiores sonhos.
                </p>
            </div>
            <CTAButton onClick={() => setShow(true)} />
        </WhoAmIContainer>
    );
};

export default WhoAmI;
