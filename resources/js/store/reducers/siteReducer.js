import * as types from '../types'

const initialState = {
    donors: {},
    donor: {},
    searchDonorsData: {},
    donorDialog: false,
    siteLoading: false,

    formData: {},

    districts: [],
    areas: [],

    hospitals: [],

    bloodRequests: [],
    bloodRequest: {},
    bloodRequestDialog: false,


    toggleDialog: false,
    toggleProfileDialog: false,

    toggleDropdownMenu: null,
    toggleDropdown: false,


    expandContent: '',
    expandStatus: false,



    toggleMenu: {
        status: false,
        content: ''
    }

}

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DONORS:
            return {
                ...state,
                donors: action.payload
            }
        case types.FETCH_DONOR:
            return {
                ...state,
                donor: action.payload
            }
        case types.SEARCH_DONORS:
            return {
                ...state,
                searchDonorsData: action.payload.searchDonorsData,
                formData: action.payload.formData
            }
        case types.TOGGLE_DONOR_DIALOG:
            return {
                ...state,
                donorDialog: action.payload
            }
        case types.TOGGLE_DROPDOWN:
            return {
                ...state,
                toggleDropdown: action.payload.toggleDropdown,
                toggleDropdownMenu: action.payload.toggleDropdownMenu,
            }
        case types.TOGGLE_SITE_LOADING:
            return {
                ...state,
                siteLoading: action.payload
            }
        case types.FETCH_DISTRICTS:
            return {
                ...state,
                districts: action.payload
            }
        case types.FETCH_AREAS:
            return {
                ...state,
                areas: action.payload
            }
        case types.FETCH_HOSPITALS:
            return {
                ...state,
                hospitals: action.payload
            }
        case types.FETCH_BLOOD_REQUESTS:
            return {
                ...state,
                bloodRequests: action.payload
            }
        case types.FILTER_BLOOD_REQUESTS:
            return {
                ...state,
                bloodRequests: action.payload
            }
        case types.FETCH_BLOOD_REQUEST:
            return {
                ...state,
                bloodRequest: action.payload
            }
        case types.TOGGLE_BLOOD_REQUEST_DIALOG:
            return {
                ...state,
                bloodRequestDialog: action.payload
            }

        case types.TOGGLE_DIALOG:
            return {
                ...state,
                toggleDialog: action.payload
            }
        case types.TOGGLE_PROFILE_DIALOG:
            return {
                ...state,
                toggleProfileDialog: action.payload
            }

        case types.TOGGLE_REGISTER_FORM:
            return {
                ...state,
                toggleRegister: action.payload
            }
        case types.TOGGLE_LOGIN_FORM:
            return {
                ...state,
                toggleLogin: action.payload
            }
        case types.EXPAND_DATA:
            return {
                ...state,
                expandContent: action.payload.expandContent,
                expandStatus: action.payload.expandStatus
            }
        case types.TOGGLE_MENU:
            return {
                ...state,
                toggleMenu: {
                    status: action.payload.status,
                    content: action.payload.content
                }

            }

        default:
            return state
    }
}


export default siteReducer
