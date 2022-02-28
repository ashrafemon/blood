import React from 'react'
import {Box} from "@mui/system";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete} from "@mui/lab";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import BloodDrop from "../../../../assets/images/blood-drop-2.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
const Seekers = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <Typography variant='h3' color='primary'>
                            1,223 people are searching for A+ Blood in your area
                        </Typography>
                    </Grid>


                    <Grid item lg={6} xs={12}>
                        <Grid container spacing={3}>
                            {/* ===== All District ===== */}
                            <Grid item lg={2.5} xs={6}>
                                <Autocomplete
                                    disablePortal
                                    renderInput={(params) => <TextField {...params} label="All District"/>}
                                />
                            </Grid>


                            {/* ===== All Area ===== */}
                            <Grid item lg={2.5} xs={6}>
                                <Autocomplete
                                    disablePortal
                                    renderInput={(params) => <TextField {...params} label="All Area"/>}
                                />
                            </Grid>

                            {/* ===== Blood group ===== */}
                            <Grid item lg={2.5} xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Male</MenuItem>
                                        <MenuItem value={'Borishal'}>Female</MenuItem>
                                        <MenuItem value={'Cumilla'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                            {/* ===== Gender ===== */}
                            <Grid item lg={2} xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Male</MenuItem>
                                        <MenuItem value={'Borishal'}>Female</MenuItem>
                                        <MenuItem value={'Cumilla'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                            {/* ===== Seeker Type ===== */}
                            <Grid item lg={2.5} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Seeker Type</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Emergency</MenuItem>
                                        <MenuItem value={'Borishal'}>Regular</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid container spacing={5} my={3} >
                    <Grid item lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={4}>
                                        <Avatar className={classes.seekerImg}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>

                                        <IconButton color='primary'>
                                            <MailOutlineIcon/>
                                        </IconButton>


                                        <IconButton color='primary'>
                                            <LocalPhoneIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop} className={classes.bloodIcon}/>
                                    </Grid>


                                    <Grid item lg={12}>

                                        <Box my={2}>
                                            <Typography variant='h4'>
                                                Shashwata Chowdhury
                                            </Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Typography variant='h6'>
                                                Labaid Hospital
                                            </Typography>
                                        </Box>

                                        <Typography variant='body1'>
                                            Science Lab, Dhaka 1205 <br/>
                                            Time: 02.00 PM, 19 January 2022
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Box my={1}>
                                            <Button variant='text' color='primary' onClick={handleClickOpen}>
                                                View details <ArrowRightAltIcon/>
                                            </Button>


                                            <Dialog open={open} onClose={handleClose}>

                                                <DialogContent>

                                                    <DialogTitle> Seeker requests</DialogTitle>

                                                    <Grid container>
                                                        <Grid item lg={4}>
                                                            <Avatar className={classes.seekerImg}/>
                                                        </Grid>

                                                        <Grid item lg={8}>
                                                            <Grid container alignItems='center'>

                                                                <Grid item lg={8}>
                                                                    <Typography variant='h4'>
                                                                        Shashwata Chowdhury
                                                                    </Typography>
                                                                </Grid>

                                                                <Grid item lg={4}>
                                                                    <IconButton color='primary'>
                                                                        <MailOutlineIcon/>
                                                                    </IconButton>

                                                                    <IconButton color='primary'>
                                                                        <LocalPhoneIcon/>
                                                                    </IconButton>
                                                                </Grid>


                                                                <Grid item lg={12} my={1}>

                                                                    <Typography>
                                                                        <RoomOutlinedIcon/>
                                                                        Labaid HospitalScience Lab, Dhaka 1205
                                                                    </Typography>
                                                                </Grid>

                                                                <Grid item lg={12} my={1}>


                                                                    <Typography>
                                                                        <WatchLaterOutlinedIcon/>
                                                                        Time: 02.00 PM, 19 January 2022
                                                                    </Typography>

                                                                </Grid>

                                                                <Grid item lg={12} my={1}>
                                                                    <Typography>
                                                                        <TransgenderOutlinedIcon/>
                                                                        Female, Muslim
                                                                    </Typography>
                                                                </Grid>

                                                            </Grid>


                                                        </Grid>

                                                        <Grid item lg={12}>
                                                            <Box my={2}>
                                                                <Typography variant='h3'>
                                                                    Description
                                                                </Typography>
                                                            </Box>


                                                            <Typography variant='body1'>
                                                                I need blood for my father. He is an cancer paitent and needs to
                                                                operate immediately.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>



                                                </DialogContent>

                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                    <Button onClick={handleClose}>Donate</Button>
                                                </DialogActions>

                                            </Dialog>

                                        </Box>

                                    </Grid>


                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card className={classes.cardEmergency}>
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={4}>
                                        <Avatar className={classes.seekerImg}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>

                                        <IconButton color='primary'>
                                            <MailOutlineIcon/>
                                        </IconButton>


                                        <IconButton color='primary'>
                                            <LocalPhoneIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop} className={classes.bloodIcon}/>
                                    </Grid>


                                    <Grid item lg={12}>

                                        <Box my={2}>
                                            <Typography variant='h4'>
                                                Shashwata Chowdhury
                                            </Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Typography variant='h6'>
                                                Labaid Hospital
                                            </Typography>
                                        </Box>

                                        <Typography variant='body1'>
                                            Science Lab, Dhaka 1205 <br/>
                                            Time: 02.00 PM, 19 January 2022
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Box my={1}>
                                            <Button variant='text' color='primary'>
                                                View details <ArrowRightAltIcon/>
                                            </Button>
                                        </Box>

                                    </Grid>


                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={4}>
                                        <Avatar className={classes.seekerImg}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>

                                        <IconButton color='primary'>
                                            <MailOutlineIcon/>
                                        </IconButton>


                                        <IconButton color='primary'>
                                            <LocalPhoneIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop} className={classes.bloodIcon}/>
                                    </Grid>


                                    <Grid item lg={12}>

                                        <Box my={2}>
                                            <Typography variant='h4'>
                                                Shashwata Chowdhury
                                            </Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Typography variant='h6'>
                                                Labaid Hospital
                                            </Typography>
                                        </Box>

                                        <Typography variant='body1'>
                                            Science Lab, Dhaka 1205 <br/>
                                            Time: 02.00 PM, 19 January 2022
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Box my={1}>
                                            <Button variant='text' color='primary'>
                                                View details <ArrowRightAltIcon/>
                                            </Button>
                                        </Box>

                                    </Grid>


                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={4}>
                        <Card className={classes.cardEmergency}>
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={4}>
                                        <Avatar className={classes.seekerImg}/>
                                    </Grid>

                                    <Grid item lg={4} textAlign='center'>

                                        <IconButton color='primary'>
                                            <MailOutlineIcon/>
                                        </IconButton>


                                        <IconButton color='primary'>
                                            <LocalPhoneIcon/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item lg={4}>
                                        <Avatar src={BloodDrop} className={classes.bloodIcon}/>
                                    </Grid>


                                    <Grid item lg={12}>

                                        <Box my={2}>
                                            <Typography variant='h4'>
                                                Shashwata Chowdhury
                                            </Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Typography variant='h6'>
                                                Labaid Hospital
                                            </Typography>
                                        </Box>

                                        <Typography variant='body1'>
                                            Science Lab, Dhaka 1205 <br/>
                                            Time: 02.00 PM, 19 January 2022
                                        </Typography>
                                    </Grid>

                                    <Grid item lg={12}>
                                        <Box my={1}>
                                            <Button variant='text' color='primary'>
                                                View details <ArrowRightAltIcon/>
                                            </Button>
                                        </Box>

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

export default Seekers;
