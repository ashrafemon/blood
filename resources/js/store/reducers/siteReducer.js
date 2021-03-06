import * as types from '../types'

const initialState = {
    donors: {},
    donor: {},
    searchDonors: {},
    donorDialog: false,
    siteLoading: false,

    districts: [],
    areas: [],

    hospitals: [],

    bloodRequests: {},
    bloodRequest: {},
    bloodRequestDialog: false
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
                searchDonors: action.payload
            }
        case types.TOGGLE_DONOR_DIALOG:
            return {
                ...state,
                donorDialog: action.payload
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
        default:
            return state
    }
}


export default siteReducer
