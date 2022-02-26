import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";
import SponsorImg1 from "../../../../assets/images/sponsor-1.png";

const Sponsor = () => {
    const classes = useStyles()


    return (
        <Box py={5}>
            <Container maxWidth="lg">


                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Our
                    sponsors</Typography>

                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5} lg={3}>
                            <Typography variant="body1" color="lightgray" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem
                                pretium mi cursus diam. Arcu
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2}>
                    <Grid item lg={3}>
                        <Avatar src={SponsorImg1} className={classes.avatar}/>
                    </Grid>

                    <Grid item lg={3}>
                        <Avatar src={SponsorImg1} className={classes.avatar}/>
                    </Grid>

                    <Grid item lg={3}>
                        <Avatar src={SponsorImg1} className={classes.avatar}/>
                    </Grid>
                    <Grid item lg={3}>
                        <Avatar src={SponsorImg1} className={classes.avatar}/>
                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default Sponsor;
