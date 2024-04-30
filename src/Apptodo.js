import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Signin from './Signin'
import Todo from './Todo'

const Apptodo = () => {
  // const[accessdata ,setaccessuser]=useState('')
  const token = localStorage.getItem('token');
  // const navigate = useNavigate(); 

    // if(token){
    //   navigate("/todo")
    // }
  return (
    <div>
        <Navbar/>
      <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/todo' element={<Todo />}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
    </div>
  )
}

export default Apptodo
