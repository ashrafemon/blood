import React from "react";
import Hero from "../../components/Landing/Home/Hero";
import HowWork from "../../components/Landing/Home/HowWork";
import Counter from "../../components/Landing/Home/Counter";
import Campaign from "../../components/Landing/Home/Campaign";
import Reviews from "../../components/Landing/Home/Reviews";
import Volunteers from "../../components/Landing/Home/Volunteers";
import Blog from "../../components/Landing/Home/Blog";
import Gellary from "../../components/Landing/Home/Gellery";
import Sponsor from "../../components/Landing/Home/Sponsor";
import Contact from "../../components/Landing/Home/Contact";
import AppStore from "../../components/Landing/Home/AppStore";

const Home = () => {
    return (
        <>
            <Hero/>
            <HowWork />
            <Counter />
            <AppStore/>
            <Campaign />
            <Reviews/>
            <Volunteers/>
            <Blog/>
            <Gellary/>
            <Sponsor/>
            <Contact/>
        </>
    );
};

export default Home;
