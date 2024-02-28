import React from 'react'
import { BsCCircle } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='position-fixed w-100 bottom-0 d-flex' style={{background:"#f5f6f7"}}>
      
      <BsCCircle style={{marginTop:"5px", marginLeft:"50px"}} /><p>2021-Analytix dashboard. Design & develop by <a style={{textDecoration:"none"}} href="">Templatecookie</a></p>
    </div>
  )
}
