import React from 'react'
import { Link } from 'react-router-dom'

function FormSuccess() {
  return (
    <div className='form' style={{margin:"170px auto",width:"200px"}}>
        Form Success
        <h3><Link to="/">come back</Link></h3>
    </div>
  )
}

export default FormSuccess