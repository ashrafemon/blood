import React from 'react'
import {Avatar, Card, CardContent, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {useStyles} from "./styled";
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const Donor = ({item}) => {
    const classes = useStyles()

    return (
        <Card>
            <CardContent>
                <Grid container>

                    <Grid item lg={4}>
                        <Avatar src={item?.profile?.avatar} className={classes.donorImg}/>
                    </Grid>

                    <Grid item lg={4}>
                        <Typography variant='h4'>
                            {item?.name}
                        </Typography>

                        <IconButton color='primary'>
                            <LocalPostOfficeOutlinedIcon/>
                        </IconButton>

                        {item?.profile?.phone_publicly === 'true' && (
                            <Tooltip title={item?.phone}>
                                <IconButton color='primary'>
                                    <LocalPhoneOutlinedIcon/>
                                </IconButton>
                            </Tooltip>
                        )}

                    </Grid>

                    <Grid item lg={4}>
                        <Typography>{item?.profile?.blood_group}</Typography>
                        {/*<Avatar src={BloodDrop2} className={classes.bloodIcon}/>*/}
                    </Grid>

                    <Grid item lg={4} textAlign='center'>
                        <RoomOutlinedIcon color='primary' fontSize='large'/>
                    </Grid>

                    <Grid item lg={8}>
                        <Typography variant='body1'>
                            {item?.profile?.area?.name}, <br/>
                            {item?.profile?.district?.name} Bangladesh
                        </Typography>
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
    )
}

export default Donor;
