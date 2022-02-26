import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Container, Grid, TextField} from "@mui/material";
import {useStyles} from "./styled";


const EditProfile = () => {
    const classes = useStyles()

    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Avatar className={classes.avatar}/>

                <Grid container spacing={3}>

                    <Grid item lg={6}>
                        <TextField variant='outlined' label='Name' fullWidth margin='normal'/>
                        <TextField variant='outlined' label='Phone' fullWidth margin='normal'/>
                        <TextField variant='outlined' label='Email' fullWidth margin='normal'/>
                    </Grid>



                    <Grid item lg={6}>
                        <TextField variant='outlined' label='Current Password' fullWidth margin='normal'/>
                        <TextField variant='outlined' label='New Password' fullWidth margin='normal'/>
                        <TextField variant='outlined' label='Confirm Password' fullWidth margin='normal'/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default EditProfile;
