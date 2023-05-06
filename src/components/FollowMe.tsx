import styled from "styled-components";
import { Instagram, TikTok, YouTube } from "../icons";

const FollowMeContainer = styled.div`
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

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10rem;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

const FollowMe: React.FC = () => {
    return (
        <FollowMeContainer>
            <h1>Siga-me nas redes sociais</h1>
            <ul>
                <li>
                    <YouTube/>
                    <p>natansucrilhos</p>
                </li>
                <li>
                    <Instagram/>
                    <p>natansucrilhos</p>
                </li>
                <li>
                    <TikTok/>
                    <p>natansucrilhos</p>
                </li>
            </ul>
        </FollowMeContainer>
    );
};

export default FollowMe;
