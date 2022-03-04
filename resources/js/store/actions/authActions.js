import ApiUrl from "../../constants/apiUrl";
import {toggleSiteLoading} from "./siteActions";
import * as types from "../types";

export const validateAuthErrors = (data) => ({
    type: types.TOGGLE_VALIDATE_ERRORS,
    payload: data
})

export const login = (data, cb = () => {
}) => async dispatch => {
    dispatch(toggleSiteLoading(true))

    await fetch(ApiUrl.auth.login, {
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

                dispatch(validateAuthErrors({}))

                cb()
            } else if (res.status === 'validate_error') {
                dispatch(validateAuthErrors(res.data))
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
            console.log("res", res)
            if (res.status === 'success') {

                dispatch({
                    type: types.REGISTRATION,
                    payload: true
                })

                localStorage.setItem("token", res.data.token);

                dispatch({
                    type: types.LOGIN,
                    payload: {
                        token: res.data.token,
                        currentUser: res.data.data,
                        isAuthenticate: true,
                    }
                })

                dispatch(validateAuthErrors({}))

                cb()
            } else if (res.status === 'validate_error') {
                dispatch(validateAuthErrors(res.data))
            }
            dispatch(toggleSiteLoading(false))
        })
        .catch(err => console.log(err))
}


export const fetchMe = () => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.me, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        },

    })
        .then(res => res.json())
        .then(res => {
            if (res.status === 'success') {
                dispatch({
                    type: types.FETCH_USER,
                    payload: {
                        isAuthenticate: true,
                        currentUser: res.data,
                    }
                })
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}


export const update = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.update, {
        method: "PATCH",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(data),

    })
        .then(res => res.json())
        .then(res => {
            console.log("res", res)
            if (res.status === 'success') {

                dispatch({
                    type: types.UPDATE_USER,
                    payload: {
                        currentUser: res.data,
                        isAuthenticate: true,
                    }
                })

                cb()
            }

            dispatch(toggleSiteLoading(false))

            cb()

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

                cb()
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}


export const resetRequestByPhone = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.request, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {
            if (res.status === 'success') {
                dispatch({
                    type: types.RESET_REQUEST,
                    payload: {
                        phone: res.data.phone
                    }
                })

                cb()
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}

export const resetVerifyOtp = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.otpVerify, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {


            if (res.status === 'success') {
                dispatch({
                    type: types.RESET_OTP_VERIFY,
                    payload: {
                        phone: res.data.phone
                    }
                })

                cb()
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}
export const resetPassword = (data, cb = () => {
}) => dispatch => {
    dispatch(toggleSiteLoading(true))

    fetch(ApiUrl.auth.resetPassword, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {


            if (res.status === 'success') {
                dispatch({
                    type: types.RESET_PASSWORD,
                    payload: {
                        message: res.message
                    }
                })

                cb()
            }

            dispatch(toggleSiteLoading(false))

        })
        .catch(err => console.log(err))
}
