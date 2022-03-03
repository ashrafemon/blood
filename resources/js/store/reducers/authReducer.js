import * as types from '../types'

const initialState = {
    token: null,
    currentUser: null,
    isAuthenticated: false,
    toggleDialog: false,
    validateErrors: {},
    authFormType: 'login'
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
        default:
            return state
    }
}


export default authReducer
