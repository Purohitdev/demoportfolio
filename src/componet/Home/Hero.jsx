import React from 'react'
import { Container } from 'react-bootstrap'
import { RiArrowRightSFill } from "react-icons/ri";
import { HiMiniArrowLongDown } from "react-icons/hi2";



function Hero() {
  return (
    <div className="main-hero"  id="Home">
      <Container>
        <div className="inner-hero">
          <div className="inner-left">
            <h1 className='trans'>
              Hello world! I'm
            </h1>
            <h1>
              Vikas Yadav
              {/* khushboo chaudhary */}
              <span > <RiArrowRightSFill /></span>
            </h1>

          </div>
          <div className="inner-right">
            <h1>
              Full Stack &nbsp;dev
            </h1>
            <h1 className='trans'>
              Based in Mumbai
            </h1>

          </div>

        </div>
        <div className="inner-hero-down">
          <h4> 01 // 09 - SCROLL <span className='aroow-down'><HiMiniArrowLongDown /></span> </h4>
        </div>

      </Container>

    </div>
  )
}

export default Hero