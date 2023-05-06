import styled from "styled-components";
import { Logo } from "../icons";
import CTAButton from "./CTAButton";

const HeaderConponent = styled.header`
    color: ${props => props.theme.colors.text};

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

    @media (max-width: 1000px) {
        ul {
            display: none;
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 3rem;
        justify-content: center;

        button {
            display: none;
        }
    }
`;

const Header: React.FC<{ setShow: (v: boolean) => void }> = ({ setShow }) => {
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
            <CTAButton onClick={() => setShow(true)}/>
        </HeaderConponent>
    );
};

export default Header;
