import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer L7ZthuwIY-H3laUHw91s3Ue8DJN2enYwLM7fgutEJqkxFwMxFaMkx3-L-N7U7vdJ7D2E4B3OTQ_S6yJ5II9Wn3vUMGYh0w8bnSYnZIhG7U4Ppi98FCBnjyATir93XnYx'
    }
});