import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebookF,FaGithubSquare,FaLinkedinIn} from 'react-icons/fa'


const socialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/claudioHernandezZavala" target='_blank'>
          <FaGithubSquare/>
          </a>
      
        </div>
        <div>
        <a href="https://www.linkedin.com/in/claudio-andre-hernandez-zavala-794383242/"  target='_blank'>
          <FaLinkedinIn/>
          </a>
        </div>

        
    </div>
  )
}

export default socialMedia