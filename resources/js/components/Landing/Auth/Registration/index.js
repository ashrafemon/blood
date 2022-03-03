import React, {useEffect, useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import GeneralInfo from "./GeneralInfo";
import PersonalInfo from "./PersonalInfo";

import Logo from "../../../../assets/images/login-logo.png"
import Complete from "./Complete";
import {AUTH_FORM_TYPE, TOGGLE_DIALOG} from "../../../../store/types";
import {useDispatch} from "react-redux";


const steps = ['General Information', 'Personal Information', 'Completed Signup'];

function stepContent(step, props) {
    switch (step) {
        case 0:
            return <GeneralInfo {...props} />;
        case 1:
            return <PersonalInfo {...props} />;
        default:
            return <Complete/>;
    }
}


const Registration = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);


    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const closeDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: false
        })
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'login'
        })
    }

    return (
        <Box>
            <Box textAlign='center'>
                <Typography variant='h2'>
                    Please Sign up
                </Typography>

                <Avatar src={Logo} className={classes.loginLogo}/>
            </Box>


            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box>
                {stepContent(activeStep, {handleNext})}
            </Box>

            <Button
                variant="contained"
                fullWidth
                type={activeStep === steps.length - 1 ? 'button' : 'submit'}
                onClick={activeStep === steps.length - 1 ? closeDialog : ''}
                form={`form-step${activeStep}`}
            >
                {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
            </Button>

        </Box>
    );
};

export default Registration;
