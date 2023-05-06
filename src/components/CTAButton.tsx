import styled from "styled-components";
import { Arrow } from "../icons";
import { ButtonHTMLAttributes } from "react";

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
    cursor: pointer;

    p {
        font-weight: 500;
        font-size: 1rem;
    }
`;

const CTAButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <ButtonContainer {...props}>
            <p>Quero participar do sorteio</p> <Arrow/>
        </ButtonContainer>
    );
};

export default CTAButton;
