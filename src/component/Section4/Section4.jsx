import React from 'react'
import '../Section4/Section4.css'
import { IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io'


const Section4 = () => {
return (
  <section className='section4'>
     <div className='param helos'>
                <div className='twoLine'>
                    <h3>Our Recent Work</h3>
                    <h4>By Our Experts</h4>
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, modi</p>
          </div>
    <div className='backgroundd'>
          <div className='fourBlocks'>
            <div className='arrows'>
              <IoIosArrowDropleft/>
              <IoIosArrowDropright/>
            </div>
            <div className='block blockchange'>
              <img src='https://www.visme.co/wp-content/uploads/2021/06/visme-graph-maker-header.png'></img>
              <div className='block2'>
                <h5>UI Shop</h5>
                <button>View Work</button>
              </div>
            </div>
            <div className='block blockchange'>
              <img src='https://www.visme.co/wp-content/uploads/2021/06/visme-graph-maker-header.png'></img>
              <div className='block2'>
                <h5>Goldcrown Labs</h5>
                <button>View Work</button>
              </div> 
            </div>
            <div className='block blockchange'>
              <img src="https://www.visme.co/wp-content/uploads/2021/06/visme-graph-maker-header.png"/>
              <div className='block2'>
                <h5>Close Concierge</h5>
                <button>View Work</button>
              </div> 
            </div>
          </div>



        </div>
        </section>
)
}

export default Section4
