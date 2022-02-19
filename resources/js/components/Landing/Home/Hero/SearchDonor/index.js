import React from 'react'
import {Button, CardContent, Grid, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {SiteCard} from "../../../../../styles/globalStyles";
import {useStyles} from "./styled";

const SearchDonor = () => {
    const classes = useStyles()

    return(
        <SiteCard>
            <CardContent>
                <Box>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <TextField label="District" fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField label="Blood Group" fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField label="Blood Needed" fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <TextField label="Description" multiline maxRows={5} minRows={5} fullWidth variant="outlined" placeholder="Write description" />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Button className={classes.button} variant="contained" color="primary" size="large">Search Donor</Button>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </SiteCard>
    )
}

export default SearchDonor
