import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className='d-flex justify-content-between p-3 align-items-center' style={{background:"#f5f6f7"}}>
    <div >
      <h3 style={{color:"black"}}>Kanban Board</h3>
      <a href="" id="a">Home</a><MdOutlineNavigateNext /><a href="">Apps</a><MdOutlineNavigateNext /><a href="" >Kanban Board</a>
    </div>
    <div>
      <button variant="light" size="lg">share Board</button>
      <button variant="primary" size="lg"><FaPlus />Create Now</button>
    </div>
    </div>
  )
}
