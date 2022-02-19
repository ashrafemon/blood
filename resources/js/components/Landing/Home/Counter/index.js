import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import Emoji from '../../../../assets/images/emoji.png'
import {useStyles} from "./styled";

const Counter = () => {
    const classes = useStyles()
    return(
        <Box py={10} className={classes.wrapper}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <Card className={classes.counterCard}>
                            <CardContent>
                                <Avatar src={Emoji} className={classes.counterAvatar}/>
                                <Box textAlign="center" mt={2}>
                                    <Typography className={classes.counterTitle} variant="h2" color="primary" mb={3}>1,250</Typography>
                                    <Typography variant="h3">Happy Donors</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card className={classes.counterCard}>
                            <CardContent>
                                <Avatar src={Emoji} className={classes.counterAvatar}/>
                                <Box textAlign="center" mt={2}>
                                    <Typography className={classes.counterTitle} variant="h2" color="primary" mb={3}>1,250</Typography>
                                    <Typography variant="h3">Happy Donors</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card className={classes.counterCard}>
                            <CardContent>
                                <Avatar src={Emoji} className={classes.counterAvatar}/>
                                <Box textAlign="center" mt={2}>
                                    <Typography className={classes.counterTitle} variant="h2" color="primary" mb={3}>1,250</Typography>
                                    <Typography variant="h3">Happy Donors</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card className={classes.counterCard}>
                            <CardContent>
                                <Avatar src={Emoji} className={classes.counterAvatar}/>
                                <Box textAlign="center" mt={2}>
                                    <Typography className={classes.counterTitle} variant="h2" color="primary" mb={3}>1,250</Typography>
                                    <Typography variant="h3">Happy Donors</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Counter
