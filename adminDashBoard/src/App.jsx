import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './layout/SideBar';
import { FaBeer } from 'react-icons/fa';
import '../src/pages/App.css';
import Footer from './layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar/>
    <div style={{paddingLeft:"300px"}}>
    <NavBar/>
    <Footer/>
    </div>
    </>                            
  )
}

export default App
