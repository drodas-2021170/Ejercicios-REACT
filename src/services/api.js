import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:3641/v1',
        timeoutErrorMessage:2000
    }
)

export const passwordRequest = async() =>{
    try {
        return await apiClient.post('/securePassword/validate-password')
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

