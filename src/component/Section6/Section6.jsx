import React from 'react'
import '../Section6/Section6.css'


const Section6 = () => {
return (
        <div className='background section6'>
            
            <div className='section6Left'>
                <h3>Dream Agency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia voluptatibus autem ratione atque sequi!</p>
                <h4>Get In Touch</h4>
                <div className='input'>
                    <input type='text' placeholder='ENTER YOUR EMAIL'></input>
                    <button style={{borderRadius:0}}>SEND</button>
                </div>
            </div>
            <div className='map'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.028374099699!2d70.08650191504435!3d28.297464605917483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3937402f31246c85%3A0x255bd5508b7ddf9d!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1679515638810!5m2!1sen!2s" 
                    width="400" 
                    height="150" 
                    style={{border:"0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
            </div>
        </div>
)
}

export default Section6
