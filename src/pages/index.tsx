import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DataBar from "../components/DataBar";
import WhoAmI from "../components/WhoAmI";
import AboutTalk from "../components/AboutTalk";
import Divisor from "../components/Divisor";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import Modal from "../components/FormModal";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [show]);

    return (
        <>
            <Modal show={show} setShow={setShow}/>
            <Header setShow={setShow} />
            <Hero setShow={setShow} />
            <DataBar/>
            <WhoAmI setShow={setShow} />
            <AboutTalk setShow={setShow} />
            <Divisor/>
            <FollowMe/>
            <Footer/>
        </>
    );
};

export default Home;
