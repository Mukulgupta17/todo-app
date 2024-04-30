import React, { useEffect, useState } from "react";
// import Textcomp from './Todo1';
import axios from "axios";
// import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Todoadd from "./Todoadd";
import Todolist from "./Todolist";
import Updatemodel from "./Updatemodel";
import "./todo.css";
// import { useNavigate } from 'react-router-dom';


function Todo() {
  const [carttext, setcarttext] = useState([]);
  const [carttextbody ,setcarttextbody] =useState([])
  const [texts, settexts] = useState(" ");
  const [num, setnum] = useState();
  const [btntxt, setbtntxt] = useState("Dark mode");
const [data,setData]  =useState([])
const[showUpdate,setshowUpdate] = useState("none")
const [carttextdata, setcarttextdata] = useState();
const [idUpdate, setidUpdate] = useState();
const [messagebody , setmessagebody] =useState()
const navigate = useNavigate();

    const token = localStorage.getItem('token');

  const [colorsn , setcolorsn] = useState({
    color :"black",
    backgroundColor :"white"
  })
  const textsinput = (e) => {
    return (settexts(e.target.value));
  };
    //  console.log(carttextbody+"data of body");
     

 
  const newdata = {
    data: carttext,
    message:carttextbody
  }
  useEffect  (() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/datas');
            setData(response.data);
          //  console.log(response);
          } catch (error) { 
            console.error('Error fetching data:', error);
        } 
    };

    fetchData();
}, []);


const deletetext = async (id) => {
  try {
      const response = await axios.delete(`http://localhost:3001/datas/${id}`);
      console.log(response.data); // Log success message
      // fetchData()
      // location.reload()

      const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/datas');
            setData(response.data);
          //  console.log(response);
          } catch (error) { 
            console.error('Error fetching data:', error);
        } 
    };

    fetchData();
  } catch (error) {
      console.error('Error deleting data:', error);
  }
  // fetchData()

};
 
console.log(`data is fetch ${data}`);

  // const adding = (e) => {
  //   e.preventDefault();
  //   setcarttext([{ id: `${texts}-${Date.now()}`, texts },...carttext]);
  //   //  console.log(carttext);
  //   // setnum(num+1)
  //   settexts(" ");
  // };

  const adding = async (e) => {
    e.preventDefault();
        // setcarttext(texts)
    try {
        await axios.post('http://localhost:3001/datas', newdata);

        console.log(carttext);
        console.log(carttextbody+ "bodydatas");
        console.log(newdata+"newdata");
      console.log('Data submitted successfully');
      // fetchdata()
      const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/datas');
            setData(response.data);
          //  console.log(response);

          } catch (error) { 
            console.error('Error fetching data:', error);
        } 
    };

    fetchData();

    } catch (error) {
      console.error('Error submitting data:', error);
    };
        setcarttext(" ")
        // setcarttextbody(" ")
        setmessagebody("")
        // setcarttextbody("")
  };
  // const deletetext = (id) => {
  //   const del = carttext.filter((to) => to.id !== id);
  //   setcarttext([...del]);
  // };
  // const edittext = (tx, id) => {
  //   // settexts(tx);
  //   // deletetext(id);
  // };
  const edittext   =  ( datas,message,id) => {
        
        // setcarttext(data)
          setcarttextdata(datas)
        setidUpdate(id)
        setshowUpdate("block")
        setmessagebody(message)
      
};
     const changemode = ()=>{
   if(colorsn.color=="white"){
    setcolorsn({
      color :"black",  
      backgroundColor :"white"
  
    })
    setbtntxt("light moddde")
   
   }
   else{
    setcolorsn({
      color :"white",
      backgroundColor :"black"
  
    })
    setbtntxt("dark mode")

   }

  }
  return !token ? ( <div> Log in first</div>): (

    <div className=" maintodocss">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    {/* <Navbar  colorsn={colorsn} changemode={changemode}  btntxt={btntxt}  style={{display:"none"}}/> */}
    <Updatemodel showUpdate={showUpdate} setData={setData} idUpdate={idUpdate} setmessagebody={setmessagebody} messagebody={messagebody} setcarttextdata={setcarttextdata} carttextdata={carttextdata} carttext={carttext} setshowUpdate={setshowUpdate} setcarttext={setcarttext} />
    {/* <div  className="maincontainer "  style={{display:"flex",justifyContent:"center",position:""}}> */}
    <Todoadd  className="todoaddcss" setcarttextbody={setcarttextbody} colorsn={colorsn} carttext={carttext} setcarttext={setcarttext} adding={adding}  />
    <Todolist   data={data}  colorsn={colorsn}  edittext={edittext} deletetext={deletetext}  />
    </div>

  )
}

export default Todo;






