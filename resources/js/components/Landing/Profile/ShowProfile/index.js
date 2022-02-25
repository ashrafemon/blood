import React from 'react'
import {Box} from "@mui/system";
import {
    Avatar,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    Typography
} from "@mui/material";
import {useStyles} from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import bloodDropIcon from '../../../../assets/images/blood-drop-white.png';
import SafHand from '../../../../assets/images/safe-hand.png';
import ProfileImg from '../../../../assets/images/profile-img.png';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const ShowProfile = () => {
    const classes = useStyles()

    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={6}>

                        <Grid container>
                            <Grid item lg={6}>
                                <Typography variant='h3'>
                                    John Doe
                                </Typography>

                                <Typography variant='h6' color='primary'>
                                    #B12DS34
                                </Typography>
                            </Grid>

                            <Grid item lg={6}>

                                <IconButton color='primary'>
                                    <EditIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>


                        <Card className={classes.card} elevation={0}>
                            <CardContent>
                                <Grid container alignItem='center'>
                                    <Grid item lg={6}>
                                        <Avatar src={bloodDropIcon} className={classes.cardIcon}/>

                                        <Typography color='white' variant='h5'>
                                            B+
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

                        <List>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <LocalPhoneIcon/>
                                </ListItemIcon>

                                <Typography>
                                    Add Phone Number
                                </Typography>
                            </ListItemButton>


                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <MarkunreadIcon/>
                                </ListItemIcon>

                                <Typography>
                                    johndoe@gmail.com
                                </Typography>
                            </ListItemButton>
                        </List>
                    </Grid>

                    <Grid item lg={6}>
                        <Avatar src={ProfileImg} className={classes.profileImg}/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default ShowProfile;
