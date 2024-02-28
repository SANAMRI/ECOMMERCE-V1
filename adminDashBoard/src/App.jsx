import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './layout/SideBar';
import './App.css';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';



function App() {
  const [count, setCount] = useState(0);

  
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
