import React from 'react'
import "./todo.css"
const Todoadd = (props) => {
  return (
    <div>
       <div className=" d-flex  flex-column align-items-center m-4 todoaddcss"    style={props.colorsn}>
      <form className=" " style={props.colorsn}>
      <div  className='d-flex justify-content-center align-content-center'>
      <h1 className="   todolist">To-Do List</h1>
      </div>
      <div className="d-flex ">
        <div className='d-flex flex-column'>
        <input
        style={props.colorsn}
          type="text"
          value={props.carttext}
          className="inputclass  h-35 mx-2 border-2 border-primary m-2"
          name="data"
          onChange={(e)=> props.setcarttext(e.target.value)}
          placeholder='Title'
        />
        {/* <input type='textarea' className='my-2' placeholder='Body'/> */}
        <textarea id="message"className="inputclass  h-35 mx-2 border-2 border-primary m-2"
 placeholder="Body" name="message" rows="4" cols="48"
 onChange={(e)=> props.setcarttextbody(e.target.value)}
 value={props.carttextbody}

 ></textarea>

        </div>
    

        <button  className="inputclass1 mx-2  border-2 border-danger m-5 w-75 "  style={{width:"10p"}} onClick={props.adding}> Add</button>
      </div>
      </form>
        
    {/* </div> */}
    </div>
    </div>
  )
}

export default Todoadd
