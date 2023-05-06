import { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { ref, set } from "firebase/database";
import { nanoid } from "nanoid";
import { Instagram } from "../icons";

const ModalContainer = styled.div`
    color: ${props => props.theme.colors.text};

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    width: 100vw;
    height: 100vh;

    padding: 2rem 8rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        input {
            padding: 0.75rem;
            border-radius: 0.25rem;
            font-size: 1rem;
        }
    }

    a {
        color: ${props => props.theme.colors.text};
    }

    @media (max-width: 600px) {
        padding: 2rem 3rem;
    }
`;

const Button = styled.button`
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

const BackButton = styled(Button)`
    filter: grayscale(0.75);
    opacity: 0.8;
`;

const Modal: React.FC<{
    show: boolean;
    setShow: (v: boolean) => void;
}> = ({ show, setShow }) => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();

    const [sent, setSent] = useState<boolean>(false);

    const back = () => {
        setShow(false);
    };

    return (
        <ModalContainer id="modal" style={show ? {
            display: "flex",
        } : {
            display: "none",
        }}>
            <form>
                {sent ? (
                    <>
                        <h1>Agora para finalizar, siga meu Instagram que confirmarei sua participação no sorteio</h1>
                        <a href="https://www.instagram.com/digitalinsano/" target="_blank">
                            <Instagram/>
                            <p>digitalinsano</p>
                        </a>
                    </>
                ) : (
                    <>
                        <h1>Confirme sua participação no sorteio da mentoria!</h1>
                        <div>
                            <label>Nome</label>
                            <input type="text" placeholder="Insira seu nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input type="mail" placeholder="Insira seu email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="text" placeholder="Insira seu telefone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                            set(ref(db, `respostas/${nanoid()}`), {
                                name, email, phone
                            }).then(() => setSent(true));
                        }}>Enviar</Button>
                    </>
                )}
                <BackButton onClick={(e) => {
                    e.preventDefault();
                    back();
                }}>Voltar</BackButton>
            </form>
        </ModalContainer>
    );
};

export default Modal;
