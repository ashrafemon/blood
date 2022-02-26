import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Card, CardContent, Container, Grid, IconButton, Typography} from "@mui/material";
import {useStyles} from "./styled";
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BloodDrop2 from '../../../assets/images/blood-drop-2.png';


function Gird(props) {
    return null;
}

const Donor = () => {
    const classes = useStyles()


    return (
        <Box py={15}>
            <Container maxWidth="xl">


                <Grid container>
                    <Grid item lg={8}>
                        <Typography variant='h3' color='primary'>
                            Found 1,223 Donors in your search area
                        </Typography>
                    </Grid>

                    <Grid item lg={4} textAlign='end'>
                        <Button variant='text' color='primary'>
                            Clear Search List
                        </Button>
                    </Grid>
                </Grid>


                <Grid container spacing={3}>

                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImgEmergency}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item lg={4}>

                        <Card>
                            <CardContent>
                                <Grid container>

                                    <Grid item lg={4}>
                                        <Avatar className={classes.donorImg}/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4'>
                                            Ahmed Jesper
                                        </Typography>

                                        <IconButton color='primary'>
                                            <LocalPostOfficeOutlinedIcon/>
                                        </IconButton>

                                        <IconButton color='primary'>
                                            <LocalPhoneOutlinedIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop2} className={classes.bloodIcon}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>
                                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                                    </Grid>

                                    <Grid item lg={8}>
                                        <Typography variant='body1'>
                                            Khilkhet, rd:832, <br/>
                                            Dhaka-1229Bangladesh
                                        </Typography>
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

export default Donor;
