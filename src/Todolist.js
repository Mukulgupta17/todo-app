import React from 'react'
import "./todo.css"
const Todolist = (props) => {
  return (      
       <div className="maincarttext d-flex justify-content-center align-items-center flex-row row my-4 flex-wrap p-5  w-100">
            {
            props.data.map((carttexts) => (

              <div className=" carttxt  col-5 p-3 m-5 " style={props.colorsn}>
              <div>
              <h5>{(carttexts.data)}</h5>
              <p>{carttexts.message}</p>
              </div>
                 <div className="mainbtn ">
                  <button  className='subbtn' onClick={() => props.edittext(carttexts.data,carttexts.message, carttexts._id)}>
                    Edit
                  </button>
               <button className='subbtn' onClick={() => props.deletetext(carttexts._id)}>Delete</button>
              </div>
               </div>
            )
            )}

            </div>
              )
}

export default Todolist
