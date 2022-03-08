import ApiUrl from "../../constants/apiUrl";
import * as types  from '../types'

export const toggleSiteLoading = (status = false) => ({
    type: types.TOGGLE_SITE_LOADING,
    payload: status
})


export const fetchDistricts = () => dispatch => {
    dispatch(toggleSiteLoading(true))
    fetch(ApiUrl.site.districts, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_DISTRICTS,
                    payload: res.data
                })
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}


export const fetchAreasByDistrict = (data) => dispatch => {
    dispatch(toggleSiteLoading(true))
    fetch(ApiUrl.site.areasByDistrict.replace(':districtId', data), {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_AREAS,
                    payload: res.data
                })
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}

export const fetchHospitals = () => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.site.hospitals, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.status === 'success'){
                dispatch({
                    type: types.FETCH_HOSPITALS,
                    payload: res.data
                })
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}


export const upload = (data, cb = (prop) => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    let formData = new FormData()
    formData.append('file', data)

    fetch(ApiUrl.uploader.image, {
        method: "POST",
        headers: {
            Accept: 'application/json',
        },
        body: formData,

    })
        .then(res => res.json())
        .then(res => {
            console.log("res", res)
            if (res.status === 'success') {

                // dispatch({
                //     type: types.UPDATE_USER,
                //     payload: {
                //         currentUser: res.data,
                //         isAuthenticate: true,
                //     }
                // })

                cb(res.data)
            }

            dispatch(toggleSiteLoading(false))


        })
        .catch(err => console.log(err))
}
