import axios from 'axios';
import React, { useState } from 'react';
import "./todo.css";
function Updatemodel(props) {

  const [updatedata,setupdatedata] =useState(" ")
  const [updatedatabody,setupdatedatabody]= useState("")
        const handleUpdate = async (event)=>{
          event.preventDefault();
                   props.setcarttextdata(" ")
                   props.setmessagebody("")
                   setupdatedatabody("")

                   try {
                        await axios.put(`http://localhost:3001/datas/${props.idUpdate}`, {data:updatedata,message:updatedatabody});
                        console.log('Data updated successfully');
                    } catch (error) {
                        console.error('Error updating data:', error);
                    }
                    props.setshowUpdate("none")
                    setupdatedata("")
                    const fetchData = async () => {
                      try {
                          const response = await axios.get('http://localhost:3001/datas');
                          props.setData(response.data);
                        } catch (error) { 
                          console.error('Error fetching data:', error);
                      } 
                  };
              
                  fetchData();

        }
        
        const handleclose =()=>{
          props.setshowUpdate("none")
          props.setcarttextdata("")
          setupdatedata("")
          setupdatedatabody("")

        }
        const handlechange =(e)=>{
          setupdatedata(e.target.value)
        }
        const handlechangebody =(e)=>{
          setupdatedatabody(e.target.value)
        }
        console.log(props.carttextdata + "this is data");
  return (

    <div className="modal h-80 w-100 my-4 " tabindex="-1" style={{display:props.showUpdate}} >
  <div className="modal-dialog">
    <div className="modal-content   bg-primary p-2 text-dark bg-opacity-20 ">
      <div className="modal-header">
        <h5 className="modal-title">Update Your Data Here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={handleclose} ></button>
      </div>
      <div className="modal-body d-flex flex-column ">
      
        {/* <input type='text' name="data"  value={props.carttext} onChange={(e)=>setupdatedata(e.target.value)}/> */}
        <input
        // style={colorsn}
          type="text"
          value={props.carttextdata}
          placeholder={props.carttextdata}
          // onChange={textsinput}
          className="inputclass   "
          
          name="data"
          // onChange={handlechange}
          // className="my-2"
        />
        <input
        // style={colorsn}
          type="text"
          value={props.messagebody}
          placeholder={props.messagebody}
          // onChange={textsinput}
          className="inputclass   "
          
          name="message"
          // onChange={handlechangebody}
          // className="my-2"
        />
        <input
        // style={colorsn}
          type="text"
          // defaultValue={props.carttextdata}
          // placeholder={props.carttextdata}
          // onChange={textsinput}
          value={updatedata}
          className="inputclass   my-2"
          
          name="data"
          onChange={handlechange}
        />
         <textarea
        // style={colorsn}
          type="text"
          // defaultValue={props.carttextdata}
          // placeholder={props.carttextdata}
          // onChange={textsinput}
          value={updatedatabody}
          className="inputclass   my-2"
          
          name="message"
          onChange={handlechangebody}
        />
        {/* <p>Modal body text goes here.</p> */}
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleclose}>Close</button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Updatemodel
