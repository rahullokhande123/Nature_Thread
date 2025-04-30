import { BrowserRouter, Routes , Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
import WomansCategories from "./Pages/WomansCategories";
>>>>>>> 0abb4b4c3f4fa91c4fbb696f684b9054f23a9923


const  App=()=>{
  return(
    <>
<<<<<<< HEAD
    <Navbar/><br />
    {/* <div align="center">
      Name <input type="text" name="name" value={input.name} onChange={handlechange} /> <br />
      Position <input type="text" name="position" value={input.position} onChange={handlechange} /> <br />
      <button onClick={handlClick}>Submit</button> 

      <Home/>
    </div> */}
    <Home/>

=======
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path="home" element={<Home/>}/>
                  <Route path="womanscategories" element={<WomansCategories/>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
>>>>>>> 0abb4b4c3f4fa91c4fbb696f684b9054f23a9923
    </>
  )
}

export default App;