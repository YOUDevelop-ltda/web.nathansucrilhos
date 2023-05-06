import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DataBar from "../components/DataBar";
import WhoAmI from "../components/WhoAmI";
import AboutTalk from "../components/AboutTalk";
import Divisor from "../components/Divisor";
import FollowMe from "../components/FollowMe";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <DataBar/>
            <WhoAmI/>
            <AboutTalk/>
            <Divisor/>
            <FollowMe/>
        </>
    );
};

export default Home;
