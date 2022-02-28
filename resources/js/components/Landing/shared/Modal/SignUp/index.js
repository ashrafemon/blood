import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import GeneralInfo from "./GeneralInfo";
import PersonalInfo from "./PersonalInfo";

import Logo from "../../../../../assets/images/login-logo.png"
import Complete from "./Complete";


const steps = ['General Information', 'Personal Information', 'Completed Signup'];

function stepContent(step) {
    switch (step) {
        case 0:
            return <GeneralInfo/>;
        case 1:
            return <PersonalInfo/>;
        case 2:
            return <Complete/>;
    }
}

const SignUp = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
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
                {stepContent(activeStep)}

                <Button
                    variant="contained"
                    onClick={handleNext}
                    fullWidth
                >
                    {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
                </Button>
            </Box>

            {/*<Box>*/}
            {/*    {activeStep === steps.length ? (*/}
            {/*        <Box>*/}
            {/*            /!*<Avatar src={Congratulation}/>*!/*/}
            {/*            <Typography>*/}
            {/*                hello*/}
            {/*            </Typography>*/}
            {/*        </Box>*/}

            {/*    ) : (*/}
            {/*        <Box>*/}
            {/*            {stepContent(activeStep)}*/}

            {/*            <Button*/}
            {/*                variant="contained"*/}
            {/*                onClick={handleNext}*/}
            {/*                fullWidth*/}
            {/*            >*/}
            {/*                {activeStep === steps.length - 1 ? 'Complete' : 'Next'}*/}
            {/*            </Button>*/}
            {/*        </Box>*/}
            {/*    )}*/}
            {/*</Box>*/}
        </Box>
    );
};

export default SignUp;
