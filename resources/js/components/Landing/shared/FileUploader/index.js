import React, {useRef} from 'react'
import {Avatar, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/system";

const useStyles =makeStyles(() => ({
    avatar: {
        width: 100,
        height: 100,
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
    input: {
        display: 'none'
    }
}))

const FileUploader = ({avatar, changer}) => {
    const classes = useStyles()
    const fileRef = useRef(null)

    const dialogShow = () => {
        fileRef.current.click()
    }

    const changeHandler = (e) => {
        if(e.target.files.length > 0){
            changer(e.target.files[0])
        }
    }

    return(
        <Box textAlign="center">
            {avatar &&
                <Box mb={2}>
                    <Avatar className={classes.avatar} src={avatar}/>
                </Box>
            }

            <input
                ref={fileRef}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                className={classes.input}
                onChange={changeHandler}
            />

            <Button variant="contained" onClick={dialogShow}>
                Upload
            </Button>
        </Box>
    )
}

export default FileUploader
