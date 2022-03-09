import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {
    Avatar,
    Card,
    CardContent,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    List,
    ListItem,
    Stack,
    Switch,
    Tooltip,
    Typography
} from "@mui/material";
import {useStyles} from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch, useSelector} from "react-redux";
import {fetchMe, update} from "../../../../store/actions/authActions";
import {AUTH_FORM_TYPE, TOGGLE_PROFILE_DIALOG} from "../../../../store/types";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ProfileEdit from "../ProfileEdit";
import CloseIcon from '@mui/icons-material/Close';
import {BloodDropHand, BloodWhiteIcon} from "../../../../constants/_icons";



const ShowProfile = () => {
    const classes = useStyles()

    const {currentUser, authFormType} = useSelector((state) => state.auth)
    const {toggleProfileDialog} = useSelector((state) => state.site)

    const dispatch = useDispatch()
    const [days] = useState(['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'])

    useEffect(() => {
        dispatch(fetchMe())
    }, [dispatch])


    const [form, setForm] = useState({
        phone_publicly: false,
        available_donate: false,
        emergency_donate: false,
        available_donate_schedule: []
    })

    const changeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value
        }))

        dispatch(update({[field]: value}))
    }

    useEffect(() => {
        if (currentUser && Object.keys(currentUser).length > 0) {
            setForm((prevState) => ({
                phone_publicly: currentUser?.profile?.phone_publicly,
                available_donate: currentUser?.profile?.available_donate,
                emergency_donate: currentUser?.profile?.emergency_donate,
                available_donate_schedule: currentUser?.profile.available_donate_schedule || []
            }))
        }
    }, [currentUser])

    const isAvailable = (day) => {
        if (form && form.available_donate_schedule) {
            return form.available_donate_schedule.includes(day) ? classes.selectedButton : ''
        } else {
            return ''
        }
    }

    const setAvailableDay = (day) => {
        let availableDonateDates = [...form.available_donate_schedule]

        if (availableDonateDates.includes(day)) {
            availableDonateDates = availableDonateDates.filter((item) => item !== day)
        } else {
            availableDonateDates.push(day)
        }

        dispatch(update({available_donate_schedule: availableDonateDates}, () => {
            setForm((prevState) => ({
                ...prevState,
                available_donate_schedule: availableDonateDates
            }))
        }))
    }


    const toggleDialog = (status, content) => {
        dispatch({
            type: TOGGLE_PROFILE_DIALOG,
            payload: status
        })

        dispatch({
            type: AUTH_FORM_TYPE,
            payload: content
        })

    }

    return (
        <Box>
            <List>
                <ListItem>
                    <Grid container>
                        <Grid item lg={10}>
                            <Typography variant='h2'>
                                {currentUser?.name}
                            </Typography>

                            <Typography variant='h6' color='primary'>
                                # {currentUser?.id}
                            </Typography>
                        </Grid>

                        <Grid item lg={2}>
                            <Tooltip title='Edit Profile'>
                                <IconButton color='primary' onClick={() => toggleDialog(true, 'profile')}>
                                    <EditIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </ListItem>

                <ListItem>
                    <Card className={classes.card} elevation={0}>
                        <CardContent>
                            <Stack direction='row' alignItems='center' justifyContent='space-around'>

                                <Stack direction='column' alignItems='center' justifyContent='center'>
                                    <Avatar src={BloodWhiteIcon} className={classes.cardIcon} />

                                    <Box my={1}>
                                        <Typography color='white' variant='h3'>
                                            {currentUser?.profile?.blood_group}
                                        </Typography>
                                    </Box>


                                    <Typography color='white' variant='h5'>
                                        Group
                                    </Typography>
                                </Stack>


                                <Stack direction='column' alignItems='center' justifyContent='center'>
                                    <Avatar src={BloodDropHand} className={classes.cardIcon} />

                                    <Box my={1}>
                                        <Typography color='white' variant='h3'>
                                            5
                                        </Typography>
                                    </Box>


                                    <Typography color='white' variant='h5'>
                                        Life Saved
                                    </Typography>
                                </Stack>
                            </Stack>

                        </CardContent>
                    </Card>
                </ListItem>


                <ListItem>
                    <Grid container alignItems='center'>
                        <Grid item lg={1}>
                            <LocalPhoneIcon/>
                        </Grid>

                        <Grid item lg={9}>
                            <Typography variant='h4'>
                                {currentUser?.phone}
                            </Typography>
                        </Grid>

                        <Grid item lg={2}>
                            <Switch
                                checked={form.phone_publicly}
                                onChange={(e, value) => changeHandler('phone_publicly', value)}
                            />
                        </Grid>
                    </Grid>
                </ListItem>


                {currentUser?.email && (
                    <ListItem>
                        <Grid container alignItems='center'>
                            <Grid item lg={1}>
                                <EmailIcon/>
                            </Grid>

                            <Grid item lg={9}>
                                <Typography variant='h4'>
                                    {currentUser?.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                )}


                <ListItem>
                    <Grid container alignItems='center'>
                        <Grid item lg={10}>
                            <Typography variant='h4'>
                                Available To Donate
                            </Typography>
                        </Grid>

                        <Grid item lg={2}>
                            <Switch
                                checked={form.available_donate}
                                onChange={(e, value) => changeHandler('available_donate', value)}
                            />
                        </Grid>
                    </Grid>
                </ListItem>

                {form.available_donate && (
                    <ListItem>
                        <Stack direction="row" spacing={2}>
                            {days.map((item, i) => (
                                <Box className={`${classes.button} ${isAvailable(item)}`} key={i}
                                     onClick={() => setAvailableDay(item)}>
                                    {item}
                                </Box>
                            ))}
                        </Stack>
                    </ListItem>
                )}

                <ListItem>
                    <Grid container alignItems='center'>
                        <Grid item lg={10}>
                            <Typography variant='h4'>
                                Emergency Donate
                            </Typography>
                        </Grid>

                        <Grid item lg={2}>
                            <Switch
                                checked={form.emergency_donate}
                                onChange={(e, value) => changeHandler('emergency_donate', value)}
                            />
                        </Grid>
                    </Grid>
                </ListItem>

                <ListItem>
                    <Typography variant='h4'>
                        Address:
                    </Typography>

                    <Typography variant='h6' mx={2}>
                        area, district
                    </Typography>


                </ListItem>
            </List>


            <Dialog
                open={toggleProfileDialog}
                maxWidth="sm"
                fullWidth
                className={classes.modal}
                onClose={() => toggleDialog(false)}
            >
                <DialogContent>
                    <Grid container alignItems='center'>
                        <Grid item lg={11}>

                            <Typography variant='h4'>
                                Update Your Profile
                            </Typography>
                        </Grid>

                        <Grid item lg={1}>
                            <IconButton onClick={() => toggleDialog(false)}>
                                <CloseIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>

                    {authFormType === 'profile' && <ProfileEdit/>}

                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default ShowProfile;
