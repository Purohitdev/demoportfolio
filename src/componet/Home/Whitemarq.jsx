import React from 'react'
import Marquee from 'react-fast-marquee'
import st1 from '../../image/starmar1.png'

function Whitemarq() {
    const marqueedata =[
        {
          id:1,
          title:"2k+ happy clients",
          img:`${st1}`
        
        },
        {
          id:2,
          title:"30+ team members",
          img:`${st1}`
        },
        {
          id:3,
          title:"3k+ success projects",
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