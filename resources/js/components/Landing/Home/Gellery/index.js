import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Container, Grid, IconButton, Typography} from "@mui/material";
import {useStyles} from "./styled";
import GellaryImg1 from "../../../../assets/images/gellary-1.png";

const Gellary = () => {
    const classes = useStyles()


    return(
        <Box py={5}>
            <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Photo gallery</Typography>

            <Box mb={10}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={5} lg={3}>
                        <Typography variant="body1" color="lightgray" align="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem pretium mi cursus diam. Arcu
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

                <Grid item lg={4}>
                    <Avatar src={GellaryImg1} className={classes.avatar}/>
                </Grid>

            </Grid>

            <Box textAlign='center' mt={10}>
                <Button variant='outlined'>
                    Become a volunteer
                </Button>
            </Box>


        </Box>
    )
}

export default Gellary;
