
import { Link,Outlet } from 'react-router-dom';
import Navbar from './components/CustomNavbar';


const Layout=()=>{
     return(
      <>
        <Navbar/>
        {/* ================================ */}
      
         <Outlet/>
      
      
      <div className='footer' style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"black"}}><h1 style={{color:"white"}}>This Is Footer Section</h1></div>
      </>
     )
}
export default Layout;

