import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";

import PlayStoreImg from '../../../../assets/images/playStore.png';
import AppStoreImg from '../../../../assets/images/appStore.png';

const AppStore = () => {
    const classes = useStyles()


    return (
        <Box py={5} my={5} className={classes.storeBox}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={6} sm={6}>
                        <Typography variant='h2' color='white'>
                            Download our <br/> Mobile App to get the best <br/> experience
                        </Typography>

                        <Button>
                            <Avatar src={PlayStoreImg} className={classes.avatar}/>
                        </Button>

                        <Button>
                            <Avatar src={AppStoreImg}/>
                        </Button>

                        {/*<Grid container>*/}
                        {/*    <Grid item lg={4}>*/}
                        {/*        <Button>*/}
                        {/*            <Avatar src={PlayStoreImg}/>*/}
                        {/*        </Button>*/}
                        {/*    </Grid>*/}

                        {/*    <Grid item lg={4}>*/}
                        {/*        <Button>*/}
                        {/*            <Avatar src={AppStoreImg}/>*/}
                        {/*        </Button>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
}

export default AppStore;
