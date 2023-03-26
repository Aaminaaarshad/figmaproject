import React from 'react'
import '../Section1/Section1.css'
import circle from '../../assets/circle.png'
import twoMen from '../../assets/twoMen.png'

const Section1 = () => {
return (
    <div className='section1'>

        <div className='left'>
            <div className='param'>
                <h3>We Help You</h3>
                <h4>to grow your</h4>
                <h4>business</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia sed rem doloribus, ullam quo numquam. Necessitatibus exercitationem molestias laboriosam</p>
            <button>Get Started</button>
        </div>

        <div className='right'>
            <div className='yellow'>
                <svg width="200" height="230" viewBox="0 0 446 631" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M308.211 16.8332C166.068 -45.1094 61.1877 87.5687 26.0158 162.651C-84.1089 470.486 197.024 658.601 332.254 626.438C519.03 582.014 432.313 454.114 365.607 395.717C315.154 332.523 330.031 181.682 343.776 114.16C364.152 70.3625 328.222 31.6931 308.211 16.8332Z" fill="#fcba03" stroke="#fcba03"/></svg>
            </div>
            <div className='brown'>
                <svg width="240" height="230" viewBox="0 0 845 712" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z" fill="#FEC828" fill-opacity="0.2"/></svg>
            </div>
            <div className='picture'>
                <img src={twoMen}></img>
            </div>
            <div className='circleee'>
                <img src={circle}></img>
            </div>
        </div>

    </div>
)
}

export default Section1
