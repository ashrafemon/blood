import React from 'react'
import {Box} from "@mui/system";
import {Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";


const AppStore = () => {
    const classes = useStyles()


    return (
        <Box py={5} my={5} className={classes.storeBox}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={6} sm={6}>
                        <Typography variant='h2' color='white'>
                            Download our <br/> Mobile App to get the best <br/> experience
                        </Typography>
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
}

export default AppStore;
