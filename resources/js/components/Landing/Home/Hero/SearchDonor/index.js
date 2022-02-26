import React from 'react'
import {Button, CardContent, Grid, TextField} from "@mui/material";
import {Box} from "@mui/system";
import Autocomplete from '@mui/material/Autocomplete';
import {SiteCard} from "../../../../../styles/globalStyles";
import {useStyles} from "./styled";

const SearchDonor = () => {
    const classes = useStyles()

    return(
        <SiteCard>
            <CardContent>
                <Box>
                    <Grid container spacing={3} alignItems="center">

                        <Grid item xs={12} lg={4}>

                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Select District" />}
                            />

                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                renderInput={(params) => <TextField {...params} fullWidth label="Select Area" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                renderInput={(params) => <TextField {...params} fullWidth label="Blood Needed At" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Blood Group Needed" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Gender" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Religion" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <Button className={classes.button} variant="contained" color="primary" fullWidth>Search Donor</Button>
                        </Grid>

                    </Grid>
                </Box>
            </CardContent>
        </SiteCard>
    )
}

export default SearchDonor
