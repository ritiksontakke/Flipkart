import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}


export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api', error);
    }
}