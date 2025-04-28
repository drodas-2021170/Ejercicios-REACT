import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({field, label,value,onChangeHandler, showErrorMessage,validationMessage,type,onBlurHandler}) => { 
    const handleValueChange = (event) =>{
        onChangeHandler(event.target.value, field)
    }

    const handleOnBlur = (event) =>{
        onBlurHandler(event.target.value, field)
    }

    return (
    <>
        <div>
            <span>{label}</span>
            <input type={type} value={value} onChange={handleValueChange} onBlur={handleOnBlur}/>
            <span>{showErrorMessage && validationMessage}</span>
        </div>
    </>
  )
}


