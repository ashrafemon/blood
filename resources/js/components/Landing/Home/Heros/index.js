import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Container, Grid, IconButton, Typography} from "@mui/material";
import {useStyles} from "./styled";
import VolunteerImg1 from "../../../../assets/images/volunteer-1.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Heros = () => {
    const classes = useStyles()


    return(
        <Box py={5}>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Our Heroes</Typography>

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
                        <Box className={classes.volunteerCard}>
                            <Avatar src={VolunteerImg1} className={classes.avatar} />

                            <Box className={classes.overlay}>
                                <Typography variant='h4'>
                                    Zulekha Akhter
                                </Typography>

                                <Typography variant='body1'>
                                    15 Lives saved
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box className={classes.volunteerCard}>
                            <Avatar src={VolunteerImg1} className={classes.avatar} />

                            <Box className={classes.overlay}>
                                <Typography variant='h4'>
                                    Zulekha Akhter
                                </Typography>

                                <Typography variant='body1'>
                                    15 Lives saved
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box className={classes.volunteerCard}>
                            <Avatar src={VolunteerImg1} className={classes.avatar} />

                            <Box className={classes.overlay}>
                                <Typography variant='h4'>
                                    Zulekha Akhter
                                </Typography>

                                <Typography variant='body1'>
                                    15 Lives saved
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box textAlign='center' mt={10}>
                    <Button variant='outlined'>
                        Become a Hero
                    </Button>
                </Box>

            </Container>




        </Box>
    )
}

export default Heros;
