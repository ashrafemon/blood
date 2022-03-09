import React, {useEffect} from 'react'
import {Card, CardContent, Grid, List, ListItem, Typography} from "@mui/material";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostHistory} from "../../../../../store/actions/authActions";

const PostHistory = () => {

    const {history} = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostHistory())
    }, [dispatch])


    const classes = useStyles()
    return (
        <Grid container>
            {history.length > 0 ? (
                history?.map((item, key) => (
                    <Grid item lg={4} sm={6} xs={12} key={key}>
                        <Card className={classes.card}>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <Typography>
                                            Blood Group: {item?.blood_group}
                                        </Typography>
                                    </ListItem>

                                    <ListItem>
                                        <Typography>
                                            Hospital: {item?.hospital}
                                        </Typography>
                                    </ListItem>

                                    <ListItem>
                                        <Typography>
                                            Gender: {item?.gender}
                                        </Typography>
                                    </ListItem>

                                    <ListItem>
                                        <Typography>
                                            Description
                                        </Typography>

                                        <br/>
                                        <Typography>
                                            {item?.description}
                                        </Typography>
                                    </ListItem>
                                </List>


                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ): (
                <Typography variant='h6' color='primary'> Currently, you don't have any seeker posted history.</Typography>
            )}

        </Grid>
    )
}

export default PostHistory
