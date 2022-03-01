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
    seeker:{
        index: ROOT_URL + 'blood-requests',
        show: ROOT_URL + 'blood-requests/:id',
    }
}

export default ApiUrl
