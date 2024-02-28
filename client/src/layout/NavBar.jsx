import React, { Component } from 'react'
import logo from "../assets/2022012481716430112667244_origin.jpg"
import { RiFileSearchFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
export default class NavBar extends Component {
 constructor(props){
  super(props)
 }
 search(str){
  this.props.setState ({
    searchQuerry:str
  })
 }
  render() {
    return (
      <div className='d-flex justify-content-between p-3 bg-blue align-items-center' >
      <img src={logo} alt="logo" loading='lazy'width={70} onClick={()=>this.props.changeView("products")}/>
      <div>
        <input type="search" onChange={(event)=>{
       this.search(event.target.value)
        } }/>
        <RiFileSearchFill  size={35} color='white'/>
      </div>
      <FaCartArrowDown size={30} color='white' onClick={()=>this.props.changeView("Panier")} />
      </div>
    )
  }
}
