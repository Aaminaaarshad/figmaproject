import React from 'react'
import '../Main/Main.css'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'


const Main = () => {
    return (
    <div className='header'>

        <div className='links'>
            <a className='home' href='/'>Home</a>
            <a href='/about'>About Us</a>
            <a href='/services'>Services</a>
            <a href='/contact'>Contact Us</a>
        </div>
        <div className='Name'>
            <h2>Dream Agency</h2> 
        </div>
        <div className='social'>
            <a href='https://www.facebook.com'>{<FaFacebook />}</a>
            <a href='https://www.linkedin.com'>{<FaLinkedin />}</a>
            <a href='https://www.instagram.com'>{<FaInstagram />}</a>
        </div>
        
    </div>
)
}

export default Main
