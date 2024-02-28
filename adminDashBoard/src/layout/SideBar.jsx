import React from 'react'
import logo from "../assets/Logo.png"
import { IoHomeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { FaFileInvoice } from "react-icons/fa6";
import { TbCreditCard } from "react-icons/tb";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { PiCardholderDuotone } from "react-icons/pi";
import { MdFormatListBulleted } from "react-icons/md";
import { SiTerraform } from "react-icons/si";
import { GiLeafSkeleton } from "react-icons/gi";
import { BsFiletypeDoc } from "react-icons/bs";



export default function SideBar() {
  return (
    <div className='text-white' style={{height:"100vh", width:"300px", background:"#f5f6f7"}}>
     <div> <img src={logo} alt="logo" loading='lazy' /></div>
      
    <p style={{color:"black" , fontWeight: 'bold', paddingTop: '50px'}}>DASHBOARD</p>
      <hr style={{color:"black", paddingTop: '30px'}}/>
      <IoHomeOutline style={{color:"blue"}}/><a className="a" href="">Dashboard</a><br />
      <CiCalendar style={{color:"blue"}}/><a className ="a" href="">Calendar</a><br />
      <FaClipboardList style={{color:"blue"}}/><select style={{border:"none"}} name="" id="">
        <option value="">Kanban Board</option><br />
        <option value="kanban Board">kanban Board</option>
        <option value="Card Details">Card Details</option>
        <option value="Create New Card"></option>
       
      </select><br />
      <IoFileTrayOutline style={{color:"blue"}}/><select style={{border:"none"}} name="File Manager" id="">
        <option value="File">File Manager</option>
      </select><br />
      <BsFileEarmarkPerson style={{color:"blue"}}/><select style={{border:"none"}} name="Authentication" id="">
        <option value="authentication">Authentication</option>
      </select><br />

      <p style={{color:"black" , fontWeight: 'bold' , paddingTop: '50px'}}>PAGES</p>
      <hr style={{color:"black" , paddingTop: '30px'}}/>
          
      <FcManager /><select style={{border:"none"}} name="profile" id="">
        <option value="Profile">Profile</option></select><br />
        <FaFileInvoice style={{color:"blue"}}/> <select style={{border:"none"}} name="invoice" id="">
          <option value="Invoice">Invoice</option>
        </select><br />
        <TbCreditCard style={{color:"blue"}}/> <a href="" className ="a">Billing</a><br />
        <MdOutlineElectricBolt style={{color:"blue"}}/><a href="" className ="a">Princing Plans</a><br />
        <FaQuestionCircle style={{color:"blue"}}/><a className ="a" href="">FAQs</a><br />
        <CiFileOn style={{color:"blue"}}/><a className ="a" href="">Blank Page</a><br />
        
      <p style={{color:"black", fontWeight: 'bold' , paddingTop: '30px'}}>COMPONENTS</p>
      <hr style={{color:"black"}}/>
      <PiCardholderDuotone style={{color:"blue"}}/> <a className ="a" href="">Card</a><br />
      <MdFormatListBulleted style={{color:"blue"}}/><a className ="a" href="">Table</a><br />
      <SiTerraform style={{color:"blue"}}/> <a className ="a" href="">Form elements</a><br />
      <GiLeafSkeleton style={{color:"blue"}}/><a className ="a" href="">Widgets</a><br />
      <BsFiletypeDoc style={{color:"blue"}}/><select style={{border:"none"}}  name="Documentation" id="">
        <option value="document">Documentation</option>
      </select> 
    </div>
  )
}