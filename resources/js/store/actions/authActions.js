import ApiUrl from "../../constants/apiUrl";
import {toggleSiteLoading} from "./siteActions";
import * as types from "../types";


export const login = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.login, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'success') {
                localStorage.setItem("token", res.data.token);

                dispatch({
                    type: types.LOGIN,
                    payload: {
                        token: res.data.token,
                        currentUser: res.data.data,
                        isAuthenticate: true,
                    }
                })


                dispatch({
                    type: types.TOGGLE_DIALOG,
                    payload: false
                })
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}



export const register = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.register, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

    })
        .then(res => res.json())
        .then(res => {
            console.log("res",res)
            if (res.status === 'success') {

                dispatch({
                    type: types.REGISTRATION,
                    payload: true
                })

            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}



export const logout = (cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.logout, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        },

    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'success') {
                localStorage.removeItem("token");

                dispatch({
                    type: types.LOGOUT
                })
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}
