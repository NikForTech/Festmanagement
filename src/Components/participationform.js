import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Form ,Button} from 'react-bootstrap'
import { addnewparticipant } from '../Action/formsaction';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function () {
   const dispatch = useDispatch()
   const [name,setname] = useState('');
   const [iuno,setiuno] = useState('');
   const [semester,setsemester] = useState('');
   const [email,setemail] = useState('');
   const [phone,setphone] = useState('');
   const [departement,setdepartment] = useState('');
   
   function submit(e){
    const participants = {
      name,iuno,semester,email,phone,departement
    }
    console.log(participants);

   dispatch(addnewparticipant(participants))
  }




  return (
    <form>
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput id='form6Example1' label='your name' onChange={e=>setname(e.target.value)} />
      </MDBCol>
      
    </MDBRow>

    <MDBInput wrapperClass='mb-4' id='form6Example3' label='IU-NO' onChange ={e=>setiuno(e.target.value)} />
    <MDBInput wrapperClass='mb-4' id='form6Example4' label='Semester' onChange={e=>setsemester(e.target.value)} />
    <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email'onChange={e=>setemail(e.target.value)} />
    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' onChange={e=>setphone(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Department' onChange={e=>setdepartment(e.target.value)}/>

    

    <MDBCheckbox
      wrapperClass='d-flex justify-content-center mb-4'
      id='form6Example8'
      label='Confirm'
      defaultChecked
    />

    <MDBBtn className='mb-4' type='submit' block onClick={submit}>
      Participate
    </MDBBtn>
  </form>
  )
}
