import { FaHome ,FaMailBulk, FaPhone } from 'react-icons/fa'
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import './FooterStyle.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left'>
      <div className='location'>
        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
        <div>
          <p>Amravati, Maharashtra</p>
        </div>
      </div>
      <div className='phone'>
      <h4>
      <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
      9604258627
      </h4>
      </div>
      <div className='email'>
      <h4>
      <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
      himanshuyadav201000@gmail.com
      </h4>
      </div>
    </div>
    <div className='right'>
    <h4>Contact me ❤️</h4>
      <p>I am interested in working with any organization that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know.</p>
      <div className='social'>
      <a href="https://github.com/Himanshu9604" target="_blank" rel="noreferrer"
          title="Github">
      <BsGithub size={30} style={{color:"#fff", marginRight:"2rem"}}/>
      </a>
      <a href="https://www.linkedin.com/in/himanshu-yadav-b32a26224/" target="_blank" rel="noreferrer"
          title="linkden">
      <BsLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/></a>
    
      <a href='https://www.instagram.com/himanshu8808yadav/' target="_blank" rel="noreferrer"
          title="instagram">
      <FiInstagram size={30} style={{color:"#fff", marginRight:"2rem"}}/></a>
      
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
