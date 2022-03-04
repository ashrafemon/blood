import React from 'react'
import {makeStyles} from "@mui/styles";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/lab";

const useStyles = makeStyles(() => ({}))

const alertMessage = () => {
    const classes = useStyles()
    return (
        <Snackbar
            autoHideDuration={6000}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
            <Alert>

            </Alert>
        </Snackbar>
    )
}

export default alertMessage
