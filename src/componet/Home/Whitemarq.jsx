import React from 'react'
import Marquee from 'react-fast-marquee'
import st1 from '../../image/starmar1.png'

function Whitemarq() {
    const marqueedata =[
        {
          id:1,
          title:"Fronted dev",
          img:`${st1}`
        
        },
        {
          id:2,
          title:"learning java",
          img:`${st1}`
        },
        {
          id:3,
          title:"17 Year old developer",
          img:`${st1}`
        },
   
    ]
  return (
   <div className="main-marq">
    <div className="marq-in" id="port">
        <Marquee >
        {
      marqueedata && 
      marqueedata.map((elem,index)=>{
        return(
        <div className="mar">
        <div className="d1 magic">{elem.title}</div>
          <div className="d1 p-2"><img src={elem.img} alt="" /></div>
        </div>
        )

      })
    }
        </Marquee>

    </div>

   </div>
  )
}

export default Whitemarq
