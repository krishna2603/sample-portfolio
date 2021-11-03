import React from 'react'
import './contact.css'
import {useRef} from "react"
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';



const Contact = () => {
          
    const formRef = useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();
      
    }
    
    return (
        <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">This is my story!</h1>
          <div className="c-info">
            <div className="c-info-item">
            <a href="https://github.com/krishna2603" target="_blank" name="github" className="c-l" >
                <FaGithub />
              </a>
            <a href="https://twitter.com/Bhargav263" target="_blank" name="twitter" className="c-l" >
                <FaTwitter />
              </a>
              <a href="linkedin.com/in/bhargav2603" target="_blank" name="linkedin" className="c-l" >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/bhargavkrishna_/" target="_blank" name="instagram" className="c-l">
                <FaInstagram />
              </a> 
            </div>
            
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b className="c-b">What’s your story?</b> Get in touch. Always available for collaboration.I love the way of life of collaboration.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              
          </form>
          </div>
      </div>
    </div>
    )
}

export default Contact
