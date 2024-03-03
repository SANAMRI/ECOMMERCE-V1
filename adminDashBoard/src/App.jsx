import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './layout/SideBar';
import './App.css';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import { Outlet } from 'react-router-dom';



function App() {
 

  
  return (
    <div>
    <SideBar/>
    <div style={{paddingLeft:"300px"}}>
    <NavBar/>
    <div style={{paddingTop:"70px"}}><Outlet/></div>
    <Footer/>
    
    </div>
    </div>                            
  )
}

export default App
