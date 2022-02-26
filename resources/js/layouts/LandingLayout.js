import {Box} from "@mui/material";
import React from "react";
import Navbar from "../components/Landing/shared/Navbar";
import Footer from "../components/Landing/shared/Footer";

const LandingLayout = ({children}) => {
    return (
        <Box>
            <Navbar/>
            {children}
            <Footer/>
        </Box>
    );
};

export default LandingLayout;
