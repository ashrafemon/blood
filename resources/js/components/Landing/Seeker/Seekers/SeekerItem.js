import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardContent, Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {Box} from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchBloodRequest} from "../../../../store/actions/seekerActions";
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

    return (
        <Card className={`${item.emergency === 'true' ? classes.cardEmergency : classes.card}`}>
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
                        <Box>
                            <Typography variant='h4'>
                                {item?.blood_group}
                            </Typography>
                            {/*<Avatar src={BloodDrop} className={classes.bloodIcon}/>*/}
                        </Box>
                    </Grid>

                    <Grid item lg={12}>

                        <Box my={2}>
                            <Typography variant='h4'>
                                {item?.profile?.name}
                            </Typography>
                        </Box>

                        <Box mb={1}>
                            <Typography variant='h6'>
                                {item?.hospital}
                            </Typography>
                        </Box>

                        <Typography variant='body1'>
                            {item?.area?.name} <br/>
                            Time: {item?.formatted_acceptable_date}
                        </Typography>
                    </Grid>

                    <Grid item lg={12}>
                        <Box my={1}>
                            <Button variant='text' color='primary' onClick={() => viewItem(item.id)}>
                                View details <ArrowRightAltIcon/>
                            </Button>
                        </Box>

                    </Grid>


                    <Dialog open={bloodRequestDialog} onClose={closeDialog}>

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
                                                {bloodRequest?.user?.name}
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
                                                {bloodRequest?.hospital}, {bloodRequest?.area?.name} {bloodRequest?.district?.name}
                                            </Typography>
                                        </Grid>

                                        <Grid item lg={12} my={1}>


                                            <Typography>
                                                <WatchLaterOutlinedIcon/>
                                                Time: {bloodRequest?.accepted_date}
                                            </Typography>

                                        </Grid>

                                        <Grid item lg={12} my={1}>
                                            <Typography>
                                                <TransgenderOutlinedIcon/>
                                                {bloodRequest?.gender}, {bloodRequest?.religion}
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
                                        {bloodRequest?.description}
                                    </Typography>
                                </Grid>
                            </Grid>


                        </DialogContent>

                        <DialogActions>
                            <Button onClick={closeDialog}>Close</Button>
                            <Button >Donate</Button>
                        </DialogActions>

                    </Dialog>


                </Grid>

            </CardContent>
        </Card>
    )
}

export default SeekerItem
