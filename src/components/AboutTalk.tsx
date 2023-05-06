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
            <h1>Sobre a mentoria</h1>
            <p>
                Você sonha em ter milhares de seguidores no Instagram e transformar sua paixão em uma fonte de renda? Então, a minha Mentoria  é exatamente o que você precisa! Aprenda comigo, especialista que já conquistou mais de 30 milhões de seguidores em minhas páginas e me tornei um dos maiores do Brasil em quantidade de seguidores e páginas no Instagram.
            </p>
            <img src="/talk.png" />
            <p>
            🚀 Desafio 100 mil seguidores em 30 dias 🚀
            <br/><br/>
            Como prova da eficácia de sua metodologia, Natan Sucrilhos vai criar um desafio e alcançar mais de 100 mil seguidores em menos de 30 dias. Acompanhe esse incrível processo e descubra como você também pode atingir o sucesso no Instagram!
            <br/><br/>
            ✨ O que você vai aprender na Mentoria do Natan Sucrilhos? ✨
            <br/><br/>
            1️⃣ A metodologia exclusiva que levou Natan ao sucesso, comprovada pelo desafio de 100 mil seguidores em 30 dias;
            2️⃣ Estratégias de tráfego orgânico para crescer seu perfil de forma consistente e sustentável;
            3️⃣ Dicas e técnicas para criar conteúdos virais que engajam seu público e atraem novos seguidores;
            4️⃣ Como monetizar seu Instagram através de parcerias, publicidade e vendas de produtos;
            5️⃣ Acesso a um grupo exclusivo de alunos para networking e troca de experiências.
            <br/><br/>
            🎯 Não perca esta oportunidade única de aprender com o mestre do Instagram e transformar sua paixão em lucro! 🎯
            <br/><br/>
            ⏰ As vagas são limitadas, então não perca tempo! Clique no botão abaixo e garanta a sua vaga na Mentoria Exclusiva do Natan Sucrilhos! ⏰
            </p>
            <CTAButton onClick={() => setShow(true)} />
        </AboutTalkContainer>
    );
};

export default AboutTalk;
