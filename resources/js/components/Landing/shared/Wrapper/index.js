import React from 'react'
import {Box} from "@mui/system";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme)=>({
    wrapper: {
        width: '100%',
        height: '100%',
        minHeight: '87.2vh !important',
        padding: '100px 0px !important'
    }
}))

const Wrapper = ({children}) =>{
    const classes = useStyles()
    return(
        <Box className={classes.wrapper}>
            {children}
        </Box>
    )
}

export default Wrapper;
