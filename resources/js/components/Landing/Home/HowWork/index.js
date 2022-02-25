import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";
import WorkImg1 from '../../../../assets/images/work-1.png'
import WorkImg2 from '../../../../assets/images/work-2.png'
import WorkImg3 from '../../../../assets/images/work-3.png'

const HowWork = () => {
    const classes = useStyles()
    return(
        <Box py={5}>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>How It Works</Typography>

                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5} lg={3}>
                            <Typography variant="body1" color="lightgray" align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem pretium mi cursus diam. Arcu</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item lg={2}>
                        <Card className={classes.workCard}>
                            <CardContent>
                                <Avatar src={WorkImg1} className={classes.avatar} />
                                <Typography variant="body1" color="primary" align="center" mt={3}>
                                    Easily contribute as donor & patient through us
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={2}>
                        <Card className={classes.workCard}>
                            <CardContent>
                                <Avatar src={WorkImg3} className={classes.avatar} />
                                <Typography variant="body1" color="primary" align="center" mt={3}>
                                    Easily contribute as donor & patient through us
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={2}>
                        <Card className={classes.workCard}>
                            <CardContent>
                                <Avatar src={WorkImg2} className={classes.avatar} />
                                <Typography variant="body1" color="primary" align="center" mt={3}>
                                    Easily contribute as donor & patient through us
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default HowWork
