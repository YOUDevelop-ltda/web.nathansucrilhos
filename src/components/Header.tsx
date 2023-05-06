import styled from "styled-components";
import { Logo } from "../icons";
import CTAButton from "./CTAButton";

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
            <CTAButton/>
        </HeaderConponent>
    );
};

export default Header;
