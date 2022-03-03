import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar} from "@mui/material";
import Congratulation from "../../../../assets/images/congratulation.png"
import {TOGGLE_DIALOG} from "../../../../store/types";
import {useDispatch} from "react-redux";


const Complete = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const closeDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: false
        })

    }


    return (
        <Box>
            {/*<form  id='form-step2' onSubmit={closeDialog}>*/}
                <Avatar src={Congratulation} className={classes.congratesLogo}/>
            {/*</form>*/}

        </Box>
    );
};

export default Complete;
