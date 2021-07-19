import axios from 'axios'

// creates an instance of axios client with some defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID INSERT-UNSPLASH-ID-HERE'
    }

})
