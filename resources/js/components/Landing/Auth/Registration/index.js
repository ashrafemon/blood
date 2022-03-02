import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import GeneralInfo from "./GeneralInfo";
import PersonalInfo from "./PersonalInfo";

import Logo from "../../../../assets/images/login-logo.png"
import Complete from "./Complete";


const steps = ['General Information', 'Personal Information', 'Completed Signup'];

function stepContent(step, props) {
    switch (step) {
        case 0:
            return <GeneralInfo {...props} />;
        case 1:
            return <PersonalInfo/>;
        case 2:
            return <Complete/>;
    }
}



const Registration = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);


    const handleNext = () => {
        setActiveStep(activeStep + 1);
        console.log(activeStep)
    };


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
                {/*{getStepContent(index, {checkoutForm, handleChange, handleNext})}*/}
                <Button
                    variant="contained"
                    fullWidth
                    type='submit'
                    form={`form-step${activeStep}`}
                >
                    {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
                </Button>
            </Box>

        </Box>
    );
};

export default Registration;
