import React from 'react'
import {Avatar, Card, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {useStyles} from "./styled";
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {Box} from "@mui/system";
import RoomIcon from '@mui/icons-material/Room';


const Donor = ({item}) => {
    const classes = useStyles()

    return (
        <Card elevation={0} className={classes.card} p={0}>

            <Stack direction='row' justifyContent='space-around' alignItems='center' borderBottom='1px solid red' p={2}>
                <Avatar src={item?.profile?.avatar} className={classes.avatar}/>

                <Box>
                    <Typography variant='h3'>
                        {item?.name}
                    </Typography>

                    <Tooltip title='Message'>
                        <IconButton color='primary'>
                            <LocalPostOfficeOutlinedIcon/>
                        </IconButton>
                    </Tooltip>

                    {item?.profile?.phone_publicly === 'true' && (
                        <Tooltip title={item?.phone}>
                            <IconButton color='primary'>
                                <LocalPhoneOutlinedIcon/>
                            </IconButton>
                        </Tooltip>
                    )}


                </Box>

                <Box className={classes.bloodGroupIcon}>
                    <Typography variant='h4' color='white'>
                        {item?.profile?.blood_group}
                    </Typography>
                </Box>
            </Stack>

            <Stack direction='row' alignItems='center' p={2}>
                <Box mx={6}>
                    <RoomIcon fontSize='large' color='primary'/>
                </Box>

                <Typography variant='h5'>
                    {item?.profile?.area?.name} {item?.profile?.district?.name}
                </Typography>

            </Stack>



        </Card>
    )
}

export default Donor;
