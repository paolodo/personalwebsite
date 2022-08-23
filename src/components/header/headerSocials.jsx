import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/paolo-d-orsi-73035a225/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/paolodo" target="_blank"><BsGithub/></a>
        <a href="mailto:pa.dorsi@gmail.com" target="_blank"><AiOutlineMail/></a>
       
    </div>
  )
}

export default HeaderSocials