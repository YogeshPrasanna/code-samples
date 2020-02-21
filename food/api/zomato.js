import axios from 'axios'

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    crossDomain: true,
    headers: {
        'user-key': 'c51e0805961b54c2c5fa9df8c3233bc4',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
