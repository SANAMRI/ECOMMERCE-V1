import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className='d-flex justify-content-around p-3 align-items-center position-fixed w-100 top-0' style={{background:"#f5f6f7", heigth:"70px"}}>
    <div >
      <h3 style={{color:"black"}}>Kanban Board</h3>
      <a href="" id="a">Home</a><MdOutlineNavigateNext /><a href="">Apps</a><MdOutlineNavigateNext /><a href="" >Kanban Board</a>
    </div>
    <div>
    <button className='b-share-Board'>share Board</button>
    <button className='b-Create-Now'><FaPlus />Create Now</button>
    </div>
    </div>
  )
}
