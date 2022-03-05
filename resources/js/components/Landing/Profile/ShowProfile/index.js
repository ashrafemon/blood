import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Button,
    Card,
    CardContent,
    Container,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    Stack,
    Switch,
    Tooltip,
    Typography
} from "@mui/material";
import {useStyles} from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import bloodDropIcon from '../../../../assets/images/blood-drop-white.png';
import SafHand from '../../../../assets/images/safe-hand.png';
import DefaultAvatar from '../../../../assets/images/default_avatar.gif';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import {useDispatch, useSelector} from "react-redux";
import {fetchMe, update} from "../../../../store/actions/authActions";
import {AUTH_FORM_TYPE, TOGGLE_PROFILE_DIALOG} from "../../../../store/types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ProfileEdit from "../ProfileEdit";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Address from "../Address";


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

    const label = {inputProps: {'aria-label': 'Switch demo'}};
    return (
        <Box py={5}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Grid container>
                            <Grid item lg={6}>
                                <Typography variant='h2'>
                                    {currentUser?.name}
                                </Typography>

                                <Typography variant='h6' color='primary'>
                                    #{currentUser?.id}
                                </Typography>
                            </Grid>

                            <Grid item lg={6}>
                                <Tooltip title='Edit Profile'>
                                    <IconButton color='primary' onClick={() => toggleDialog(true, 'profile')}>
                                        <EditIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>


                        <Card className={classes.card} elevation={0}>
                            <CardContent>
                                <Grid container alignItem='center'>
                                    <Grid item lg={6}>
                                        <Avatar src={bloodDropIcon} className={classes.cardIcon}/>

                                        <Typography color='white' variant='h5'>
                                            {currentUser?.profile?.blood_group}
                                        </Typography>

                                        <Typography color='white' variant='h5'>
                                            Group
                                        </Typography>
                                    </Grid>


                                    <Grid item lg={6}>
                                        <Avatar src={SafHand} className={classes.cardIcon}/>

                                        <Typography color='white' variant='h5'>
                                            5
                                        </Typography>

                                        <Typography color='white' variant='h5'>
                                            Life Saved
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>

                        <Grid container my={1} alignItems='center'>
                            <Grid item lg={1}>
                                <LocalPhoneIcon/>
                            </Grid>

                            <Grid item lg={3}>
                                {currentUser?.phone}
                            </Grid>
                            <Grid item lg={3}>
                                <Switch
                                    {...label}
                                    checked={form.phone_publicly}
                                    onChange={(e, value) => changeHandler('phone_publicly', value)}
                                />
                            </Grid>
                        </Grid>


                        <Grid container my={1}>
                            <Grid item lg={1}>
                                <MarkunreadIcon/>
                            </Grid>

                            <Grid item lg={3}>
                                {currentUser?.email}
                            </Grid>

                        </Grid>

                        <Box>
                            <Grid container my={2} alignItems="center">

                                <Grid item lg={3}>
                                    <Typography variant='h4'>
                                        Available To Donate
                                    </Typography>
                                </Grid>
                                <Grid item lg={1}>
                                    <Switch
                                        {...label}
                                        checked={form.available_donate}
                                        onChange={(e, value) => changeHandler('available_donate', value)}
                                    />
                                </Grid>
                            </Grid>

                            {form.available_donate && (
                                <Stack direction="row" spacing={2}>
                                    {days.map((item, i) => (
                                        <Box className={`${classes.button} ${isAvailable(item)}`} key={i}
                                             onClick={() => setAvailableDay(item)}>
                                            {item}
                                        </Box>
                                    ))}

                                </Stack>
                            )}
                        </Box>


                        <Grid container my={2} alignItems='center'>

                            <Grid item lg={3}>
                                <Typography variant='h4'>
                                    Emergency Donate
                                </Typography>

                            </Grid>
                            <Grid item lg={1}>
                                <Switch
                                    {...label}
                                    checked={form.emergency_donate}
                                    onChange={(e, value) => changeHandler('emergency_donate', value)}
                                />
                            </Grid>

                        </Grid>

                        <Box>
                            <Typography>
                                Address
                            </Typography>

                            <Typography>
                                {currentUser?.profile?.address}
                            </Typography>
                        </Box>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Manage Address</Typography>

                            </AccordionSummary>

                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>

                    </Grid>

                    <Grid item lg={6}>
                        <Avatar src={DefaultAvatar} className={classes.profileImg}/>
                    </Grid>


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
                                        <CloseOutlinedIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>

                            {authFormType === 'profile' && <ProfileEdit/>}
                            {authFormType === 'address' && <Address/>}

                        </DialogContent>
                    </Dialog>

                </Grid>
            </Container>
        </Box>
    )
}

export default ShowProfile;
