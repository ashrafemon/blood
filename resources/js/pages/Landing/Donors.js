import React, {useCallback, useEffect} from 'react'
import {Button, Container, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Donor from "../../components/Landing/Donor";
import {useDispatch, useSelector} from "react-redux";
import {fetchDonors} from "../../store/actions/donorActions";
import {SEARCH_DONORS} from "../../store/types";

const Donors = () => {
    const {donors, searchDonors} = useSelector((state) => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDonors())
    }, [dispatch])

    const clearSearch = useCallback(() => {
        dispatch({
            type: SEARCH_DONORS,
            payload: {}
        })
    }, [dispatch])

    useEffect(() => {
        return () => {
            clearSearch()
        }
    }, [])


    return (
        <Box py={15}>
            <Container maxWidth="xl">

                {Object.keys(searchDonors).length > 0 ? (
                    <>
                        <Grid container>
                            <Grid item lg={8}>
                                <Typography variant='h3' color='primary'>
                                    Found {searchDonors?.total} Donors in your search area
                                </Typography>
                            </Grid>

                            <Grid item lg={4} textAlign='end'>
                                <Button variant='text' color='primary' onClick={clearSearch}>
                                    Clear Search List
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            {searchDonors?.data?.map((data, i) => (
                                <Grid item lg={4} sm={6} xs={12} key={i}>
                                    <Donor item={data} />
                                </Grid>
                            ))}
                        </Grid>
                    </>

                ): (
                    <Grid container spacing={3}>
                        {donors?.data?.map((data, i) => (
                            <Grid item lg={4} sm={6} xs={12} key={i}>
                                <Donor item={data} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    )
}

export default Donors
