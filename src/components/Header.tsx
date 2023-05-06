import styled from "styled-components";
import { Arrow, Logo } from "../icons";

const HeaderConponent = styled.header`
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    padding: 2rem 8rem;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        list-style: none;

        li {
            font-weight: 600;
            font-size: 1.25rem;
        }
    }
`;

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.highlights};
    box-shadow: 0px 2px 4px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15);
    border-radius: 0.2rem;

    p {
        font-weight: 500;
        font-size: 1rem;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderConponent>
            <div className="logo">
                <Logo/>
            </div>
            <ul className="links">
                <li>Quem sou eu?</li>
                <li>Sobre a palesta</li>
                <li>Contato</li>
            </ul>
            <ButtonContainer>
                <p>Torne-se um mentorado</p> <Arrow/>
            </ButtonContainer>
        </HeaderConponent>
    );
};

export default Header;
