import React, { useState } from 'react'
import { Input } from '../Input/Input'

export const Password = () => {

    const form = {
        password:{
            value:'',
            isValid: false,
            showError: false
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
    }
        const [formData, setFormData] = useState(form)

        const handleValueChange = (value, field)=>{
            setFormData((prevData)=>(
                {
                    ...prevData,
                    //Inyeccionde nuevo valor
                    [field]: {
                        ...prevData[field],
                        value
                    }
    
                }
            ))
        }

  return (
    <>  
        <form onSubmit={handleSubmit}> 
            <Input
                field='password'
                label='Password'
                value={formData.password.value}
                type='text'
                onChangeHandler={handleValueChange}
                showErrorMessage={formData.password.showError}
            />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
