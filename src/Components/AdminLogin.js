import React, { useEffect, useState } from 'react'

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { loginaction } from '../Action/login'


  

export default function AdminLogin() {
  
const [email,setEmail] = useState();
const [password,setPassword] = useState()
const dispatch = useDispatch();

useEffect (()=>{
  if(localStorage.getItem(currentUser)){
    console.log("login info")
  }
},[]);
const loginhandler = ()=>{
  const user = {email,password}
  dispatch(loginaction(user))
}
  

  

  return (
    <form>
    <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address'onChange={e=>setEmail(e.target.value)} />
    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' onChange={e=>setPassword(e.target.value)} />

    <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
      </MDBCol>
      <MDBCol>
        <a href='#!'>Forgot password?</a>
      </MDBCol>
    </MDBRow>

    <MDBBtn type='submit' className='mb-4' block>
      Sign in
    </MDBBtn>

    <div className='text-center'>
      <p>
        Not a member? <a href='#!'>Register</a>
      </p>
      <p>or sign up with:</p>

      <MDBBtn floating color="secondary" className='mx-1'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn floating color="secondary" className='mx-1'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn floating color="secondary" className='mx-1'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn floating color="secondary" className='mx-1'>
        <MDBIcon fab icon='github' />
      </MDBBtn>
    </div>
  </form>
  )
}
