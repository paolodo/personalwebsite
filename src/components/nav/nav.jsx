import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineContacts, AiOutlineBook} from "react-icons/ai"
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') 
  return (
   
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#resume" onClick={()=> setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''} ><AiOutlineBook/></a>
      <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
    
  )
}

export default Nav