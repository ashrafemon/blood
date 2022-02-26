import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";
import CampaignImg1 from '../../../../assets/images/campaign-1.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const Campaign = () => {
    const classes = useStyles()

    return(
        <Box py={5}>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Campaign</Typography>

                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5} lg={3}>
                            <Typography variant="body1" color="lightgray" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem pretium mi cursus diam. Arcu
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={3} alignItems="center">

                    <Grid item lg={6}>
                        <Card className={classes.campaignCard}>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={6}>

                                        <Typography variant="h6" margin={2}  >
                                            14th Feb, 2022
                                        </Typography>


                                        <Typography variant='h2' color="primary" marginX={2}>
                                            world blood donors day
                                        </Typography>


                                        <Typography variant='body1' margin={2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vivamus sollicitudin interdum morbi sed varius vestibulum et, lectus. Vel porta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.

                                            Lorem ipsum dolor sit amet, consectetur ta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.
                                        </Typography>


                                        <Typography margin={2}>
                                           <AccessTimeIcon/> 10.00am - 3.00pm | <RoomOutlinedIcon/> Dhaka, Bangladesh
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={6}>
                                        <Avatar src={CampaignImg1} className={classes.avatar} />
                                    </Grid>
                                </Grid>


                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={6}>
                        <Card className={classes.campaignCard}>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={6}>

                                        <Typography variant='h6' margin={2}  >
                                            14th Feb, 2022
                                        </Typography>


                                        <Typography variant='h2' color="primary" marginX={2}>
                                            world blood donors day
                                        </Typography>


                                        <Typography variant='body1' margin={2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vivamus sollicitudin interdum morbi sed varius vestibulum et, lectus. Vel porta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.
                                            Lorem ipsum dolor sit amet, consectetur ta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.
                                        </Typography>


                                        <Typography margin={2}>
                                            <AccessTimeIcon/> 10.00am - 3.00pm | <RoomOutlinedIcon/> Dhaka, Bangladesh
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={6}>
                                        <Avatar src={CampaignImg1} className={classes.avatar} />
                                    </Grid>
                                </Grid>


                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                <Box mt={10} textAlign='center'>
                    <Button  variant="outlined">
                        View all campigns
                    </Button>
                </Box>


            </Container>
        </Box>
    )
}

export default Campaign;
