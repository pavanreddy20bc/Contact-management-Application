import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/form.css'

const Register = () => {
  const [values,setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({})
  const handleInput =(event)=>{
    setValues({...values,[event.target.name]:event.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
	<div className='form-container'  >
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <div className="form-group">
        <label htmlFor=" name" className='form-label'> Name</label>
        <input type="text" placeholder='Enter  Name' className='form-control' name='name' onChange={handleInput}/>
      </div>

      <div className="form-group">
        <label htmlFor="email" className='form-label'>email</label>
        <input type="email" placeholder='Enter email' className='form-control' name='email' autoComplete="off" onChange={handleInput}/>
      </div>
      <div className="form-group">
        <label htmlFor="password" className='form-label'>password</label>
        <input type="" placeholder='********' className='form-control' name='password' onChange={handleInput}/>
      </div>
      <button className="form-btn">Register</button>
      <p>Already Registered?<Link to="/login">Login</Link></p>


    </form>
  </div>
  )
}

export default Register
