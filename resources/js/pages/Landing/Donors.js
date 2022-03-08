import React, {useCallback, useEffect} from 'react'
import {Button, Container, Grid, Typography} from "@mui/material";
import Donor from "../../components/Landing/Donor";
import {useDispatch, useSelector} from "react-redux";
import {fetchDonors} from "../../store/actions/donorActions";
import Wrapper from "../../components/Landing/shared/Wrapper";
import DonorSearch from "../../components/Landing/Donor/Search";
import RequestForm from "../../components/Landing/Seeker/RequestForm";
import * as types from "../../store/types";


const Donors = () => {

    const {donors, searchDonorsData} = useSelector((state) => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDonors())
    }, [dispatch])

    const clearSearch = useCallback(() => {
        dispatch({
            type: types.SEARCH_DONORS,
            payload: {
                searchDonorsData: {},
                formData: {}
            }
        })
    }, [dispatch])

    useEffect(() => {
        return () => {
            clearSearch()
        }
    }, [])


    return (
        <Wrapper>
            <Container maxWidth="xl">

                <DonorSearch/>


                {Object.keys(searchDonorsData).length > 0 ? (
                    <>
                        <Grid container>
                            <Grid item lg={8}>
                                <Typography variant='h3' color='primary'>
                                    {searchDonorsData?.total === 0 ? `Currently, there are no donors available; make a post to seek donors.` : `Found ${searchDonorsData?.total} Donors in your search area`}
                                </Typography>
                            </Grid>

                            <Grid item lg={4} textAlign='end'>
                                <Button variant='text' color='primary' onClick={clearSearch}>
                                    Clear Search List
                                </Button>
                            </Grid>
                        </Grid>

                        {searchDonorsData?.total === 0 && <RequestForm/>}


                        <Grid container spacing={3}>
                            {searchDonorsData?.data?.map((data, i) => (
                                <Grid item lg={4} sm={6} xs={12} key={i}>
                                    <Donor item={data}/>
                                </Grid>
                            ))}
                        </Grid>
                    </>

                ) : (
                    <Grid container spacing={12}>
                        {donors?.data?.map((data, i) => (
                            <Grid item lg={4} sm={6} xs={12} key={i}>
                                <Donor item={data}/>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Wrapper>
    )
}

export default Donors
