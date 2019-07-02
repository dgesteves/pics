import axios from 'axios'

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2fef29a94d48247a7915f6377be834e9bc82d855098f670ccb9cdc9ae3951a96'
    }
} )