import styled from "styled-components";

const FooterContainer = styled.footer`
    padding: 2rem 4rem;
    padding-bottom: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 500;
        font-size: 1.25rem;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>{new Date().getFullYear()} © <a href="https://youdevelop.app/">YOUDevelop</a>. Todos os direitos reservados.</p>
        </FooterContainer>
    );
};

export default Footer;
