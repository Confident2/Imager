import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: "Client-ID C0EYb6L-ssWeFMsoozc7BlWGQ17oR4SaQN35EmHNRxw"
       } 
})