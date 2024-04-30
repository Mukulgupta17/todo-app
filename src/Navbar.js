// import React from 'react';
// import { Button } from 'react-bootstrap';
// import "./todo.css";

// function Navbar(props) {
//   return (
//     <div  className='navbar shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
//       <nav className='mainNavbar w-100 mx-2'style={props.colorsn}>
//         <div className='subNavbar '>
//             <div className='navitems'>
//         <ul style={{display:"flex"}}  >
//     <li style={{marginRight:"40px"}} className='my-1'><a href="#home">Home</a></li>
//     <li style={{marginRight:"40px"}}  className='my-1'><a href="#about">About</a></li>
//     <li style={{marginRight:"40px"}} className='my-1'><a href="#services">Services</a></li>
//     <li style={{marginRight:"40px"}} className='my-1'><a href="#contact">Contact</a></li>
//     <Button className='my-1' onClick={props.changemode}> {props.btntxt}</Button>

//   </ul>
//   </div>
//   <div style={{display:"flex" ,padding:"10px"}} className='mx-2 '>
//     <input className='navbarsearch' type='search' placeholder='Enter Text' style={{marginRight:"1.3rem"}}/>
//     <button className='navbarsearch' > Submit</button>
//   </div>
//         </div>

//       </nav>
//     </div>
//   )
// }

// export default Navbar















// import { Button } from 'bootstrap'
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navbar = (props) => {

  const handlelogout = () => {
    localStorage.removeItem("token");

    // if (alert("Are you sure you want to delete this item?")) {
    //     // Code to execute if the user clicks "OK"
    //     // localStorage.removeItem('token');
    //     console.log("User clicked OK");
    // } else {
    //     // Code to execute if the user clicks "Cancel"
    //     console.log("User clicked Cancel");
    // }
    alert("Are you sure you want to delete this item?")
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
  {/* <div className="container-fluid" style={props.colorsn}> */}
    <h1 className="navbar-brand " href="#">ToDo</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/" >Home </Link>
        </li>
        <li className="nav-item mx-3">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="signin" >  Sign-In</Link>

        </li>
        <li className="nav-item mx-3">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="login" >  Log-In</Link>

        </li>
        <li className='nav-items mx-3'>
          <Button className='my-1 mx-3' onClick={props.changemode}> {props.btntxt}</Button>
</li>
<li>
  {/* <Router> */} 

       <Link to="todo" >  Todo</Link>
</li>

<li className="nav-item mx-3">
          {/* <a className="nav-link" href="#">Link</a> */}
          {/* <Link to="login" >  Log-In</Link> */}
          <Button onClick={handlelogout}>Log-Out</Button>

        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
