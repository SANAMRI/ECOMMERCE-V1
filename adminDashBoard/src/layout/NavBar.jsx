import React, { useCallback } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import {useDispatch} from "react-redux"
import { search } from '../store/productSlice';

export default function NavBar() {
  const dispatch = useDispatch()
  const handleSearch = useCallback(event=>{
    dispatch(search(event.target.value))
  },[])
  return (
    <div className='d-flex justify-content-around p-3 align-items-center position-fixed w-100 top-0' style={{background:"#f5f6f7", heigth:"70px",zIndex:2}}>
    <div >
      <h3 style={{color:"black"}}>Kanban Board</h3>
      <a href="" id="a">Home</a><MdOutlineNavigateNext /><a href="">Apps</a><MdOutlineNavigateNext /><a href="" >Kanban Board</a>
    </div>
    <div>
        <input style={{width:"300px"}} type="search" onChange={handleSearch}/>
        <FaSearchengin style={{marginLeft:"10px"}}/>
      </div>
      
    
    <div>
    <button className='b-share-Board'>share Board</button>
    <button className='b-Create-Now'><FaPlus />Create Now</button>
    </div>
    </div>
  )
}
