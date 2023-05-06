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

    a {
        color: ${props => props.theme.colors.text};
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>{new Date().getFullYear()} © <a href="https://youdevelop.app/" target="_blank">YOUDevelop</a>. Todos os direitos reservados.</p>
        </FooterContainer>
    );
};

export default Footer;
