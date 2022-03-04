import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";
import {AUTH_FORM_TYPE} from "../../../../../store/types";
import {useDispatch, useSelector} from "react-redux";
import OTPInput from "otp-input-react";
import {resetVerifyOtp} from "../../../../../store/actions/authActions";

const OTP = () => {
    const classes = useStyles();
    const {phone} = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        let phoneNum = null;
        Object.values(phone).map((item) => {
            phoneNum = item
        })

        let data = {
            code : otp,
            phone: phoneNum
        }

        dispatch(resetVerifyOtp(data, ()=>{
            dispatch({
                type: AUTH_FORM_TYPE,
                payload: 'password'
            })
        }))
    }



    return (
        <form onSubmit={submitHandler}>
            <Box textAlign='center'>
                <Typography variant='h3'>
                    We have sent a code to your phone number
                </Typography>


                <OTPInput
                    className={classes.otp}
                    inputClassName={classes.otpInput}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    value={otp}
                    onChange={setOtp}
                />
            </Box>

            <Button variant='contained' type='submit' fullWidth>Validate OTP</Button>

        </form>

    );
};

export default OTP;
