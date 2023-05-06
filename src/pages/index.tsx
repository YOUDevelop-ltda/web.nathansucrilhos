import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DataBar from "../components/DataBar";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <DataBar/>
        </>
    );
};

export default Home;
