import styled from "styled-components";

const DataBarContainer = styled.div`
    padding: 2rem 8rem;
    z-index: 2;

    ul {
        color: ${props => props.theme.colors.background};
        background: ${props => props.theme.colors.text};
        padding: 2rem 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 1.5rem;
        
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            p.data {
                font-weight: 700;
                font-size: 3.25rem;
            }
            
            p.description {
                font-weight: 500;
                font-size: 1.75rem;
            }
        }
    }

    @media (max-width: 1000px) {
        ul {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 3rem;

        ul {
            
        padding: 2rem;
            div {
                p.data {
                    font-size: 2rem;
                }

                p.description {
                    font-size: 1rem;
                }
            }
        }
    }
`;

const DataBar: React.FC = () => {
    return (
        <DataBarContainer>
            <ul>
                <div>
                    <p className="data">10 mil</p>
                    <p className="description">inscritos no YouTube</p>
                </div>
                <div>
                    <p className="data">700 mil</p>
                    <p className="description">seguidores no Instagram</p>
                </div>
                <div>
                    <p className="data">200 mil</p>
                    <p className="description">seguidores no TikTok</p>
                </div>
            </ul>
        </DataBarContainer>
    );
};

export default DataBar;
