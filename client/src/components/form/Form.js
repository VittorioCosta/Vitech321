import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import { Navigate } from 'react-router-dom'
import './form.css'

function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitting() {
    setIsSubmitted(true)
  }
  

  return (
    <>
      {
        !isSubmitted
          ? <FormSignUp submitting={submitting} />
          : <Navigate to='form-success' />
      }
       
    </>
  )
}

export default Form