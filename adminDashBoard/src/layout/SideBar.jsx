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
      <img src={logo} alt="logo" loading='lazy' />
      <p>DASHBOARD</p>
      <hr />
      <IoHomeOutline /><a className="a" href="">Dashboard</a>
      <CiCalendar /><a className ="a" href="">Calendar</a>
      <FaClipboardList /><select name="" id="">
        <option value="">Kanban Board</option>
        <option value="kanban Board">kanban Board</option>
        <option value="Card Details">Card Details</option>
        <option value="Create New Card"></option>
       
      </select>
      <IoFileTrayOutline /><select name="File Manager" id="">
        <option value="File">File Manager</option>
      </select>
      <BsFileEarmarkPerson /><select name="Authentication" id="">
        <option value="authentication">Authentication</option>
      </select>
      <p>PAGES</p>
      <hr />
      <FcManager /><select name="profile" id="">
        <option value="Profile">Profile</option></select>
        <FaFileInvoice /> <select name="invoice" id="">
          <option value="Invoice">Invoice</option>
        </select>
        <TbCreditCard /> <a href="" className ="a">Billing</a>
        <MdOutlineElectricBolt /><a href="" className ="a">Princing Plans</a>
        <FaQuestionCircle /><a className ="a" href="">FAQs</a>
        <CiFileOn /><a className ="a" href="">Blank Page</a>
        
      <p>COMPONENTS</p>
      <hr />
      <PiCardholderDuotone /> <a className ="a" href="">Card</a>
      <MdFormatListBulleted /><a className ="a" href="">Table</a>
      <SiTerraform />Form elements
      <GiLeafSkeleton /><a className ="a" href="">Widgets</a>
      <BsFiletypeDoc /><select name="Documentation" id="">
        <option value="document">Documentation</option>
      </select>
      
    </div>
  )
}