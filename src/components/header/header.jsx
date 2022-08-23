import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h1>Paolo D'Orsi</h1>
        <h5 className="text-light"> Junior Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <a href='#contacts' className='scroll__down'>Scroll Down</a>
        <div className="me">
          <img src={ME} alt="me"/>
          </div>
         
          
      
      </div>
    </header>
  )
}

export default Header