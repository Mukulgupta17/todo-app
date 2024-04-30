import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./todo.css";

const Signin = () => {
    const [names,setnames] =useState('')
    const [emails,setemails] =useState('')
    const [passwords,setpasswords] =useState('')
    const [cpasswords,setcpasswords] =useState('')
    const [error ,setError] = useState("")
    const navigate = useNavigate();


       const  newdata ={
        name:names,
        email:emails,
        password:passwords,
        cpassword:cpasswords

       }
 const handleSubmit = async(e)=>{
    
    e.preventDefault();
    try{
          const response = await axios.post('http://localhost:3001/users', newdata);
            console.log("data submitted successfully");
            console.log(response);
            navigate("/login")


    } catch(error){
        // console.log("error occured");
        // console.log('error'+e);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error response status:', error.response.status);
            console.error('Error response data:', error.response.data);
            setError(error.response.data.message); // Set error message received from the server
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
    }
    setnames("")
    setemails("")
    setpasswords("")
    setcpasswords("")
 }


  return (


    <div className=' container'>
        {/* <form className='row' action='/Signin' method="POST"> */}
        <form className='row' action='/Signin' method="POST">

<div className='col-8 d-flex  flex-column bg-primary-subtle  justify-content-center align-content-center'> 
<h1 className='d-flex  justify-content-center mx-5 '>Sign-In</h1>
<div className='d-flex flex-column   bg-danger-subtle justify-content-center align-items-center'>
<input  type='text' name='name' placeholder='Enter Name' value={names} onChange={(e)=>  setnames(e.target.value)} className=' form-control w-50 my-2 input-group-text inputclass'/>
<input  type='email' name='email' placeholder='Enter Email' value={emails} onChange={(e)=>  setemails(e.target.value)}  className='w-50 my-2 input-group-text inputclass'/>
<input  type='password' name='password' placeholder='Enter Password' value={passwords}   onChange={(e)=>  setpasswords(e.target.value)}  className='w-50 my-2 input-group-text inputclass'/>
<input  type='password' name='cpassword' placeholder='ReEnter  Password' value={cpasswords} onChange={(e)=>  setcpasswords(e.target.value)}  className='w-50 my-2 input-group-text inputclass'/>
 
 
 {/* <button type='button' onClick={handleSubmit}> Sign - In</button> */}
 <button type='button' onClick={handleSubmit}>Sign-In</button>
 <div>{error}</div>

</div>
</div>
<div className='col-md-4 signintag d-flex justify-content-center align-items-center bg-primary-subtle'>
    <div className='d-flex  flex-column justify-content-center align-items-center '>
    <h1 className=' text-danger font-weight-bold  mx-3 p-3 signinname'>Sign - In </h1>
<h5 className='display-6 text-primary d-flex justify-content-center align-items-center mx-3'>Sign in for more option </h5>
    </div>


</div>

</form>

    </div>
  )
}

export default Signin
