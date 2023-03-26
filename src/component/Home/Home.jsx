import React from 'react'
import '../Home/Home.css'
import Main from '../Main/Main'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Section6 from '../Section6/Section6'


const Home = () => {
  return (
    <section className='section'>

      {/* <div><Main/></div> */}
      <div><Section1/></div>
      <div><Section2/></div>
      <div><Section3/></div>
      <div><Section4/></div>
      <div><Section5/></div>
      <div><Section6/></div>

    </section>
  )
}

export default Home
