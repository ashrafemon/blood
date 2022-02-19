import {Box} from "@mui/material";
import React from "react";
import Hero from "../../components/Landing/Home/Hero";
import HowWork from "../../components/Landing/Home/HowWork";
import Counter from "../../components/Landing/Home/Counter";

const Home = () => {
    return (
        <>
            <Hero/>
            <HowWork />
            <Counter />
        </>
    );
};

export default Home;
