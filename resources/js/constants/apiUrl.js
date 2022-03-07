const ROOT_URL = 'http://127.0.0.1:8000/api/v1/'

const ApiUrl = {
    donors: {
        index: ROOT_URL + 'donors',
        show: ROOT_URL + 'donors/:id',
        search: ROOT_URL + 'search-donors'
    },
    site: {
        districts: ROOT_URL + 'site/districts',
        areasByDistrict: ROOT_URL + 'site/areas-by-district/:districtId',
        hospitals: ROOT_URL + 'site/hospitals',
    },
    uploader: {
        image: ROOT_URL + 'file-uploader'
    },
    seeker:{
        index: ROOT_URL + 'blood-requests',
        show: ROOT_URL + 'blood-requests/:id',
        filter: ROOT_URL + 'filter-blood-requests',
        commit: ROOT_URL + 'commit-donate'
    },
    auth:{
        login: ROOT_URL + 'auth/login',
        register: ROOT_URL + 'auth/register',
        update: ROOT_URL + 'auth/update',
        logout: ROOT_URL + 'auth/logout',
        request: ROOT_URL + 'auth/reset-request',
        otpVerify: ROOT_URL + 'auth/reset-otp-verify',
        resetPassword: ROOT_URL + 'auth/reset-new-password',
        post: ROOT_URL + 'my-blood-requests',

        me: ROOT_URL + 'auth/me'
    }
}

export default ApiUrl
