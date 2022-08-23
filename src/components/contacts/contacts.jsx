import React from 'react'
import './contacts.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
const Contacts = () => {
  return (
    <section id="contacts"> 
    <h1>Contact Me!</h1>
    <div className='contact__socials'>
      
   <div className="Icon">  <a  href="https://www.linkedin.com/in/paolo-d-orsi-73035a225/" target="_blank"><BsLinkedin size={70}/></a>Paolo D'Orsi</div>
   <div className="Icon"><a href="https://github.com/paolodo" target="_blank"><BsGithub size={70}/></a>@paolodo</div>
   <div className="Icon"><a  href="mailto:pa.dorsi@gmail.com" target="_blank"><AiOutlineMail size={70}/></a>pa.dorsi@gmail.com</div>
   
</div></section>
  
    )
}

export default Contacts