import {Box} from "@mui/material";
import React from "react";
import Navbar from "../components/Landing/shared/Navbar";

const LandingLayout = ({children}) => {
    return (
        <Box>
            <Navbar/>
            {children}
        </Box>
    );
};

export default LandingLayout;
