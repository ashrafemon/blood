import * as types from '../types'

const initialState = {
    token: null,
    currentUser: null,
    isAuthenticated: false,
    toggleDialog: false,
    validateErrors: {},
    authFormType: 'login',
    phone: null,
    history: [],
    donateHistory: [],
    notificationList: [],
    donateProfile: {}

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            }
        case types.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                currentUser: null,
            }
        case types.REGISTRATION:
            return {
                ...state,
                registered: action.payload
            }
        case types.UPDATE_USER:
            return {
                ...state,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            }
        case types.FETCH_USER:
            return {
                ...state,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            }
        case types.FETCH_NOTIFICATION_LIST:
            return {
                ...state,
                notificationList: action.payload
            }
        case types.FETCH_DONATE_PROFILE:
            return {
                ...state,
                donateProfile: action.payload
            }

        case types.TOGGLE_DIALOG:
            return {
                ...state,
                toggleDialog: action.payload
            }

        case types.TOGGLE_VALIDATE_ERRORS:
            return {
                ...state,
                validateErrors: action.payload
            }
        case types.AUTH_FORM_TYPE:
            return {
                ...state,
                authFormType: action.payload
            }
        case types.RESET_REQUEST:
            return {
                ...state,
                phone: action.payload
            }
        case types.RESET_OTP_VERIFY:
            return {
                ...state,
                phone: action.payload
            }
        case types.RESET_PASSWORD:
            return {
                ...state,
                message: action.payload.message
            }
        case types.FILE_UPLOAD:
            return {
                ...state,
                message: action.payload.message
            }
        case types.FETCH_POST_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case types.FETCH_DONATION_HISTORY:
            return {
                ...state,
                donateHistory: action.payload
            }

        default:
            return state
    }
}


export default authReducer
