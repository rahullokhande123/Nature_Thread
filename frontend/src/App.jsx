import { useState } from "react"
import axios from "axios";
import Navbar from "./components/CustomNavbar";
import Home from "./Pages/Home";

const App=()=>{

  const [input,setInput]=useState({})

  const handlClick=()=>{
    let url="http://127.0.0.1:8000";
    axios.post(url,input).then((res)=>{
      alert("DATA POSTED SUCCESSFULLY")
      setInput({});
    }).catch((err)=>{
      console.log("Error",err);
    })
  }

  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  }

  return(
    <>
    <Navbar/><br />
    {/* <div align="center">
      Name <input type="text" name="name" value={input.name} onChange={handlechange} /> <br />
      Position <input type="text" name="position" value={input.position} onChange={handlechange} /> <br />
      <button onClick={handlClick}>Submit</button> 

      <Home/>
    </div> */}
    <Home/>
    </>
    
  )
}
export default App;