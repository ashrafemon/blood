import React from 'react'
import {Avatar, Button, Card, CardContent, Grid, IconButton, Typography} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BloodDrop from "../../../../assets/images/blood-drop-2.png";
import {Box} from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {useStyles} from "./styled";
import {useDispatch} from "react-redux";
import {fetchBloodRequest} from "../../../../store/actions/seekerActions";
import {TOGGLE_BLOOD_REQUEST_DIALOG} from "../../../../store/types";

const SeekerItem = ({item}) => {
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

    return(
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


                </Grid>

            </CardContent>
        </Card>
    )
}

export default SeekerItem
