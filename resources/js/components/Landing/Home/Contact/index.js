import React from 'react'
import {Box} from "@mui/system";
import {Button, Card, CardContent, Container, Grid, TextField, Typography} from "@mui/material";
import {useStyles} from "./styled";

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';


const Contact = () => {
    const classes = useStyles();

    return(
        <Box py={5} bgcolor='#F9FAFB'>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Contact us</Typography>

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
                    <Grid item xl={6}>
                        <Grid container spacing={2}>

                            <Grid item xl={6} spacing={3}>
                                <Card className={classes.contactCard} elevation={0}>
                                    <CardContent>
                                        <RoomOutlinedIcon color='primary' fontSize="large"/>

                                        <Typography variant='h2' py={1} color='primary'>
                                            Address
                                        </Typography>


                                        <Typography variant='h6'>
                                            House-22, Road-04, <br/>
                                            Nikunja-02, Dhaka - 1229
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xl={6} spacing={3}>
                                <Card className={classes.contactCard} elevation={0}>
                                    <CardContent>
                                        <CallOutlinedIcon color='primary' fontSize="large"/>

                                        <Typography variant='h2' py={1} color='primary'>
                                            Call Us
                                        </Typography>


                                        <Typography variant='h6'>
                                            01900-000000
                                            <br/>
                                            <br/>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>


                            <Grid item xl={6} spacing={3}>
                                <Card className={classes.contactCard} elevation={0}>
                                    <CardContent>
                                        <MailOutlineOutlinedIcon color='primary' fontSize="large"/>

                                        <Typography variant='h2' py={1} color='primary'>
                                            Email Us
                                        </Typography>


                                        <Typography variant='h6'>
                                            demo@demo.com
                                            <br/>
                                            <br/>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xl={6} spacing={3}>
                                <Card className={classes.contactCard} elevation={0}>
                                    <CardContent>
                                        <WatchLaterOutlinedIcon color='primary' fontSize="large"/>

                                        <Typography variant='h2' py={1} color='primary'>
                                            Open Hours
                                        </Typography>


                                        <Typography variant='h6'>
                                            Monday - Saturday<br/>
                                            10:00AM - 07:00PM
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xl={6}>
                        <Card className={classes.contactCard} elevation={0}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item spacing={2} xl={6}>
                                        <TextField label="Your Name *" fullWidth size='small' />
                                    </Grid>

                                    <Grid item spacing={2} xl={6}>
                                        <TextField label="Your Email *" fullWidth size='small' />
                                    </Grid>


                                    <Grid item spacing={2} xl={12}>
                                        <TextField label="Your Subject *" fullWidth size='small' />
                                    </Grid>

                                    <Grid item spacing={2} xl={12}>
                                        <TextField label="Description" multiline maxRows={6} minRows={6} fullWidth
                                                   variant="outlined" placeholder="Write description"/>
                                    </Grid>

                                    <Grid item spacing={2} xl={12} textAlign='center'>
                                        <Button variant='contained'>
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>


            </Container>
        </Box>
    )
}

export default Contact;
