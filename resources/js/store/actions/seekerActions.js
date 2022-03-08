import * as types from '../types'
import ApiUrl from "../../constants/apiUrl";
import {toggleSiteLoading} from "./siteActions";

export const fetchBloodRequests = (cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))
    const token = localStorage.getItem('token') || null

    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    if(token){
        headers['Authorization'] = token
    }

    fetch(ApiUrl.seeker.index, {
        method: "GET",
        headers: headers,
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_BLOOD_REQUESTS,
                    payload: res.data
                })
                cb()
            }


            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}

export const fetchBloodRequest = (id, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.seeker.show.replace(':id', id), {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_BLOOD_REQUEST,
                    payload: res.data
                })
                cb()
            }

            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}

export const requestSeeker = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.seeker.index, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)

            if(res.status === 'success'){
                cb()
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}


export const seekerFilter = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.seeker.filter, {
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
                    type: types.FILTER_BLOOD_REQUESTS,
                    payload: res.data
                })
                cb()
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}


export const donation = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))



    fetch(ApiUrl.seeker.commit, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            // if(res.status === 'success'){
            //     dispatch({
            //         type: types.FILTER_BLOOD_REQUESTS,
            //         payload: res.data
            //     })
            //     cb()
            // }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}
