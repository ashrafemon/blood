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

                        <Grid item xs={12} lg={6}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Select District" />}
                            />

                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Select Area" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Blood Needed At" />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Blood Group Needed" />}
                            />
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
