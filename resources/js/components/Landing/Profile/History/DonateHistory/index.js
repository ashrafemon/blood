import React, {useEffect} from 'react'
import {Avatar, Card, CardContent, Grid, List, ListItem, Stack, Typography} from "@mui/material";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchDonateHistory} from "../../../../../store/actions/authActions";

const DonateHistory = () => {
    const classes = useStyles()

    const {donateHistory} = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDonateHistory())
    }, [dispatch])

    return (
        <Grid container>
            {donateHistory.length > 0  ? (
                donateHistory?.map((item, i) => (
                    <Grid item lg={4} sm={6} xs={12} key={i}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Stack direction='row'>
                                    <Avatar className={classes.avatar}/>

                                    <List>
                                        <ListItem>
                                            <Typography>
                                                Blood Group: {item?.blood_request?.blood_group}
                                            </Typography>
                                        </ListItem>

                                        <ListItem>
                                            <Typography>
                                                Location
                                            </Typography>
                                        </ListItem>

                                        <ListItem>
                                            <Typography>
                                                Donation
                                            </Typography>
                                        </ListItem>

                                    </List>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ): (
                <Typography variant='h6' color='primary'> Currently, you don't have any donate history. Please try to donate & save life</Typography>
            )}

        </Grid>
    )
}

export default DonateHistory
