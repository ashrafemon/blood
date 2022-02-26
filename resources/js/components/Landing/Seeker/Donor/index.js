import React from 'react'
import {Box} from "@mui/system";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid, IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField, Typography
} from "@mui/material";
import {useStyles} from "./styled";
import {DateTimePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BloodDrop2 from '../../../../assets/images/blood-drop-2.png';

const Donor = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState(new Date());

    return (
        <Box py={2}>
            <Container maxWidth="xl">
                <Box my={2}>
                    <Typography variant='h3' color='primary'>
                        Found 1,223 Donors in your search area
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={4}>
                        <Card>
                            <CardContent>

                                <Grid container alignItems='center' justifyContent='center'>

                                    <Grid item lg={4} textAlign='center'>
                                        <Avatar/>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Typography variant='h4' >
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
                                </Grid>

                                <Box mt={2}>
                                    <Grid container alignItems='center'>

                                        <Grid item lg={4} textAlign='center'>
                                            <IconButton color='primary'>
                                                <RoomOutlinedIcon/>
                                            </IconButton>
                                        </Grid>


                                        <Grid item lg={8}>
                                            <Typography variant='body1' >
                                                Khilkhet, rd:832, <br/>
                                                Dhaka-1229Bangladesh
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card>
                            <CardContent>

                                <Grid container alignItems='center' justifyContent='center'>

                                    <Grid item lg={4} textAlign='center'>
                                        <Avatar/>
                                    </Grid>


                                    <Grid item lg={4}>
                                        <Typography variant='h4' >
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
                                </Grid>

                                <Box mt={2}>
                                    <Grid container alignItems='center'>

                                        <Grid item lg={4} textAlign='center'>
                                            <IconButton color='primary'>
                                                <RoomOutlinedIcon/>
                                            </IconButton>
                                        </Grid>


                                        <Grid item lg={8}>
                                            <Typography variant='body1' >
                                                Khilkhet, rd:832, <br/>
                                                Dhaka-1229Bangladesh
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card>
                            <CardContent>

                                <Grid container alignItems='center' justifyContent='center'>

                                    <Grid item lg={4} textAlign='center'>
                                        <Avatar/>
                                    </Grid>


                                    <Grid item lg={4}>
                                        <Typography variant='h4' >
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
                                </Grid>

                                <Box mt={2}>
                                    <Grid container alignItems='center'>

                                        <Grid item lg={4} textAlign='center'>
                                            <IconButton color='primary'>
                                                <RoomOutlinedIcon/>
                                            </IconButton>
                                        </Grid>


                                        <Grid item lg={8}>
                                            <Typography variant='body1' >
                                                Khilkhet, rd:832, <br/>
                                                Dhaka-1229Bangladesh
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card>
                            <CardContent>

                                <Grid container alignItems='center' justifyContent='center'>

                                    <Grid item lg={4} textAlign='center'>
                                        <Avatar/>
                                    </Grid>


                                    <Grid item lg={4}>
                                        <Typography variant='h4' >
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
                                </Grid>

                                <Box mt={2}>
                                    <Grid container alignItems='center'>

                                        <Grid item lg={4} textAlign='center'>
                                            <IconButton color='primary'>
                                                <RoomOutlinedIcon/>
                                            </IconButton>
                                        </Grid>


                                        <Grid item lg={8}>
                                            <Typography variant='body1' >
                                                Khilkhet, rd:832, <br/>
                                                Dhaka-1229Bangladesh
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>



            </Container>
        </Box>
    )
}

export default Donor;
