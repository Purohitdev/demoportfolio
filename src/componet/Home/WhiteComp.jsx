import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import m1 from '../../image/amazon.png'
import m2 from '../../image/link1.png'
import m3 from '../../image/slack1.png'
import m4 from '../../image/walma1.png'




function WhiteComp() {
  const whitemarqueedata = [
    {
      id: 1,
      img: `${m1}`

    },
    {
      id: 2,
      img: `${m2}`
    },
    {
      id: 3,
      img: `${m3}`
    },
    {
      id: 4,
      img: `${m4}`
    },
    {
      id: 5,
      img: `${m1}`

    },
    {
      id: 6,
      img: `${m2}`
    },
    {
      id: 7,
      img: `${m3}`
    },
    {
      id: 8,
      img: `${m4}`
    },

  ]
  return (
    <div className="back">
      <div className="main-white">
        <Container>
          <div className="upper-white" >
            <p>   04 // CUSTOMERS</p>
            <h6>My journey began with a fascination for the digital world to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,</h6>
            <p className='right' >(( PROJECT ALL ))</p>
          </div>
          <Marquee>
            {
              whitemarqueedata &&
              whitemarqueedata.map((elem, index) => {
                return (
                  <div className="mar-img">
                    <div className="deta-mar" id="services" >
                      <img src={elem.img} alt="" />
                     </div>
                  </div>
                )

              })
            }

          </Marquee>
        </Container >

      </div>
    </div>
  )
}

export default WhiteComp