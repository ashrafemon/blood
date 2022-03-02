import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar} from "@mui/material";
import Congratulation from "../../../../assets/images/congratulation.png"


const Complete = () => {
    const classes = useStyles();

    return (
        <Box>
            <Avatar src={Congratulation} className={classes.congratesLogo}/>
        </Box>
    );
};

export default Complete;
