import React from 'react'
import { passwordRequest } from '../../services/api'

export const usePassword = () => {
    const[isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const passwordF =async(password) =>{
        setIsLoading(true)
        const pass = {
            password
        }

        const response = await passwordRequest(pass)
        setIsLoading(false)

        if(response.error){
            setError(true)
            if(response?.err?.response.data?.errors){
                let arrayErrors = response?.err?.response.data?.errors
                for(const error of arrayErrors){
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response.data?.msg ||
                response?.err?.data?.msg ||
                'Error general intente registrar. El usuario De nuevo, todo mal'
            )
        }
        setError(false)
        return toast.success('Todo Good')
    }

  return {
    passwordF,
    isLoading,
    error,
    setError
  }
}
