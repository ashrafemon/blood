import React from 'react'
import {Box} from "@mui/system";
import {BallTriangle} from "react-loader-spinner";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const Loader = () => {
    const classes = useStyles()
    return(
        <Box className={classes.wrapper}>
            <BallTriangle
                height="100"
                width="100"
                color='red'
                ariaLabel='loading'
            />
        </Box>
    )
}

export default Loader
