import styled from "styled-components";

const DivisorContainer = styled.div`
    background: ${props => props.theme.colors.backgroundMuted};

    img {
        width: 100%;
    }
`;

const Divisor: React.FC = () => {
    return (
        <DivisorContainer>
            <img src="/div.png"/>
        </DivisorContainer>
    );
};

export default Divisor;
