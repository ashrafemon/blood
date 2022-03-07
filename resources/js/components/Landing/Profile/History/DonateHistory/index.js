import React from 'react'
import {Avatar, Card, CardContent, Grid, List, ListItem, Stack, Typography} from "@mui/material";
import {useStyles} from "./styled";

const DonateHistory = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item lg={4} sm={6} xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <Stack direction='row'>
                            <Avatar className={classes.avatar}/>

                            <List>
                                <ListItem>
                                    <Typography>
                                        Name
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
        </Grid>
    )
}

export default DonateHistory
