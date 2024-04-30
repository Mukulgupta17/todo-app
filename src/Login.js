import axios from 'axios';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import "./todo.css";

import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Login = ( props) => {
    // const history = useHistory();
    const navigate = useNavigate();


    const [emails,setemails] =useState("")
    const [passwords,setpasswords] =useState("")
    const [userData,setuserData] =useState()
    const [errors ,seterrors]   =useState()


    const newdata={
        email:emails,
        password:passwords
    }
    let userdatapasssword;
    let istrue;
    const handlesubmit =async(e)=>{
        e.preventDefault();
        console.log(emails+ passwords  +"newdqtaatttttaaaaaaaaaaaaaa");

        try{
            const response = await axios.post(`http://localhost:3001/users/login`,{emails,passwords});
             setuserData(response.data.password)
             console.log(response.data.token +"tokenssssssssssssssssssssssss");
             userdatapasssword = response.data.user.password
            //  console.log(userdatapasssword  +""+"userdatapassowowooowowowoo");
               console.log(response.data.user.password+" responseeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                 const token = response.data.token
               localStorage.setItem('token', token);

             if(userdatapasssword==passwords){
                navigate("/todo")
             }
             else{
                navigate("/login")
                seterrors("email or password does not match")
                props.setaccessuser("First You Have To Login To Access Todo Data")


             }
            //  const istrue  =   if(userdatapasssword==passwords)       return true

            //  console.log(passwords +"passwoerds  livein login");
            //  console.log(userData +" "+"userdata   setuserdata");
            //  console.log(userData);
            //  console.log(userData.password+"password of user");


        //     if (userdatapasssword == passwords) {
        // //         // Navigate to Todo page
        // //         // history.push('/Todo');
        // //         // Navigate("/Todo")
        // console.log(true);
        // //  istrue=true
        // //  console.log(istrue +"istrue value");
        // //  console.log("usetdataSSSEOJCUUHUBSUIUBIU");
        //       }
        //       else{
        //         console.log(false +"its not true");
        //       }
        }catch(error){
            console.log("Error is "+error);

        }
       
        //    else {
            // Navigate to login page (can be '/' or '/login' depending on your route setup)
            // history.push('/Login');
            // Navigate("/Login")
        //   }
        // setuserData("")
    }
  return  (
//    userdatapasssword==passwords ?
//    (
// //    <Navigate to={"/todo"}  />
//    navigate("/todo")

//    ):
//    (
    // {userdatapasssword==passwords ? <div>password match </div> :<div>password not match</div> }
    <div className=' container'>
        {/* <form className='row' action='/login' method='POST' > */}
        <form className='row' name='form' >


<div className='col-8 d-flex  flex-column bg-info-subtle  justify-content-center align-content-center'> 
<h1 className='d-flex  justify-content-center mx-5 '>Log-In</h1>
<div className='d-flex flex-column   bg-danger-subtle justify-content-center align-items-center'>
{/* <input  type='text' name='name' placeholder='Enter Name' className=' form-control w-50 my-2 input-group-text inputclass'/> */}
<input  type='email' name='email' placeholder='Enter Email' value={emails} onChange={(e)=>{setemails(e.target.value); seterrors("")}} className='w-50 my-2 input-group-text inputclass'/>
   <p style={{color:"red"}}>{errors}</p>
<input  type='password' name='password' placeholder='Enter Password'value={passwords} onChange={(e)=>setpasswords(e.target.value)}  className='w-50 my-2 input-group-text inputclass'/>
{/* <input  type='password' name='cpassword' placeholder='ReEnter  Password' className='w-50 my-2 input-group-text inputclass'/> */}
<Button type='Button ' onClick={handlesubmit}> Log - In</Button>

</div>
</div>
<div className=' bg-primary-subtle col-md-4 signintag d-flex justify-content-center align-items-center'>
    <div className='d-flex  flex-column justify-content-center align-items-center'>
    <h1 className='signinname text-danger font-weight-bold '>Log - In </h1>
<h5 className='display-6 text-primary '>Log in for access your Acount  </h5>
    </div>


</div>

</form>

    </div>
  )
}

export default Login
