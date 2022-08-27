import React from 'react'
import './resume.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiNodejsSmall, DiLinux} from 'react-icons/di'
import {TbLetterE} from 'react-icons/tb'
import {SiJavascript} from 'react-icons/si'
import {BiGitBranch, BiTrain} from 'react-icons/bi'
import {GiTigerHead} from 'react-icons/gi'
import {BsFillGearFill} from 'react-icons/bs'
import CV from '../../assets/cv.pdf'
const Resume = () => {
  return (
    <section id="resume">
      <div id="container"><div id="about" className="box">
      
      <div class="title"><h2>about me</h2></div>
   
      Hello! My name is Paolo and I am a motivated web developement enthusiast always looking for new challenges.
      My extra hobby is music on DAW softwares, which will probably take up a new section of this website in the future.
      <div class="lang"><div class="title" id="lang"><h2>languages</h2></div>
      
      <ul>
        <li>Italian: Native</li>
        <li>English: Fluent</li>
        <li>French: Conversant</li>
      </ul>
     </div>
      </div>
      
      <div id="skills" className="box">
      <div class="title"><h2> Skills</h2></div>
        <div id="frontendbackend">
        <div class="card">
          <h3>Frontend</h3>
          <ul>
          <li><AiFillHtml5/>HTML</li>
          <li><DiCss3/>CSS</li>
            <li><DiReact/>React.js</li>

            
          </ul>
          </div>
          <div class="card">
          <h3>Backend</h3>
          <ul>
          <li><DiNodejsSmall/>Node.js</li>
          <li><BiTrain/>Express.js </li>
          <li><GiTigerHead/>Fastify</li>
          <li><BsFillGearFill/>REST API </li>

            
          </ul>
          </div>
          </div>
          <div id="misc" class="card">
          <h3>Miscellaneous</h3>
          <ul>
          <li><SiJavascript/>Javascript</li>
          <li><BiGitBranch/>Git</li>
          <li><DiLinux/>Linux</li>
            

            
          </ul>
          </div>
          
     
      </div>
      </div><a href={CV} download className='btn'>Download Pdf</a> </section>
  )
}

export default Resume