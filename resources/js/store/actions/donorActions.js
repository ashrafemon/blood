import * as types from '../types'
import ApiUrl from "../../constants/apiUrl";
import {toggleSiteLoading} from "./siteActions";

export const fetchDonors = (cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.donors.index, {
        method: "GET"
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_DONORS,
                    payload: res.data
                })
            }

            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}

export const searchDonors = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.donors.search, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.SEARCH_DONORS,
                    payload: {
                        searchDonorsData: res.data,
                        formData: data
                    }
                })
                cb()
            }

            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}
