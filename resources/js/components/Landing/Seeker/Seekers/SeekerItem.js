import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    List,
    ListItem,
    Stack,
    Typography
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {Box} from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {donation, fetchBloodRequest} from "../../../../store/actions/seekerActions";
import {TOGGLE_BLOOD_REQUEST_DIALOG} from "../../../../store/types";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import TransgenderOutlinedIcon from "@mui/icons-material/TransgenderOutlined";

const SeekerItem = ({item}) => {
    const {bloodRequests, bloodRequest, bloodRequestDialog} = useSelector((state) => state.site)
    const classes = useStyles()
    const dispatch = useDispatch()

    const viewItem = (id) => {
        dispatch(fetchBloodRequest(id, () => {
            dispatch({
                type: TOGGLE_BLOOD_REQUEST_DIALOG,
                payload: true
            })
        }))
    }

    const closeDialog = () => {
        dispatch({
            type: TOGGLE_BLOOD_REQUEST_DIALOG,
            payload: false
        })
    }

    const donateHandler = (id) => {

        let data = {
            blood_request_id: id,
            status: 'committed'
        }

        dispatch(donation(data))
    }

    return (
        <Card className={`${item.emergency === 'true' ? classes.cardEmergency : classes.card}`}>
            <CardContent>
                <Stack direction='row' justifyContent='space-around'>
                    <Avatar className={classes.avatar}/>

                    <IconButton color='primary'>
                        <MailOutlineIcon/>
                    </IconButton>

                    <IconButton color='primary'>
                        <LocalPhoneIcon/>
                    </IconButton>

                    <Box className={classes.bloodGroupIcon}>
                        <Typography>
                            {item?.blood_group}
                        </Typography>
                    </Box>
                </Stack>

                <List>
                    <ListItem>
                        <Typography variant='h4'>
                            {item?.user?.name}
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <Typography variant='body1'>
                            {item?.hospital}
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <Typography variant='body2'>
                            Location: {item?.area?.name}, {item?.district?.name}
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <Typography variant='body2'>
                            Time: {item?.formatted_acceptable_date}
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <Button variant='text' color='primary' onClick={() => viewItem(item.id)}>
                            View details <ArrowRightAltIcon/>
                        </Button>
                    </ListItem>

                </List>


                <Dialog open={bloodRequestDialog} onClose={closeDialog}>

                    <DialogContent>
                        <Box my={1}>
                            <Typography variant='h4'>Seeker requests</Typography>
                        </Box>

                        <Divider/>

                        <Stack direction='row' justifyContent='space-around'>
                            <Avatar className={classes.dialogAvatar}/>

                            <List>
                                <ListItem>
                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                        <Typography variant='h4'>
                                            {bloodRequest?.user?.name}
                                        </Typography>

                                        <Box>
                                            <IconButton color='primary'>
                                                <MailOutlineIcon/>
                                            </IconButton>

                                            <IconButton color='primary'>
                                                <LocalPhoneIcon/>
                                            </IconButton>
                                        </Box>

                                    </Stack>
                                </ListItem>

                                <ListItem>
                                    <Typography>
                                        <RoomOutlinedIcon mr={2}/>
                                        {bloodRequest?.hospital}, {bloodRequest?.area?.name} {bloodRequest?.district?.name}
                                    </Typography>
                                </ListItem>


                                <ListItem>
                                    <Typography>
                                        <WatchLaterOutlinedIcon mr={2}/>
                                        Time: {bloodRequest?.accepted_date}
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography>
                                        <TransgenderOutlinedIcon mr={2}/>
                                        {bloodRequest?.gender}, {bloodRequest?.religion}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Stack>

                        <Box my={2}>
                            <Typography variant='h3'>
                                Description
                            </Typography>

                            <Typography variant='body1'>
                                {bloodRequest?.description}
                            </Typography>
                        </Box>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={closeDialog}>Close</Button>
                        <Button variant='contained' onClick={() => donateHandler(item.id)}>Donate</Button>
                    </DialogActions>

                </Dialog>

            </CardContent>
        </Card>
    )
}

export default SeekerItem
