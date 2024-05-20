import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import { GoArrowUpRight } from "react-icons/go";
import edu from '../../image/edu.avif'
import gld from '../../image/goldsmith.avif'
import otk from '../../image/otaku.png'
import kal from '../../image/kales.png'
import dem from '../../image/Screenshot 2024-05-02 at 8.08.52 PM.png'
import js from "../../image/jsform.jpeg"
import man from "../../image/manag.png"




function Port() {
    const potdata = [
        {
            id: 1,
            img:`${otk}`,
            title: "React (rest api)",
            detail: "Otaku",
            a:"https://otakuu.vercel.app/",
        },
        {
            id: 2,
            img:`${dem}`,
            title: "React",
            detail: "Potfolio Demo",
            a:"",
        },
        {
            id: 3,
            img:`${man}`,
            title: "React (crud/login)",
            detail: "management",
            a:"https://crudd-login.vercel.app/",
        },
        {
            id: 4,
            img:`${edu}`,
            title: "html/css",
            detail: "EduVibe",
            a:"https://gold-umber.vercel.app/",

        },
        {
            id: 5,
            img:`${gld}`,
            title: "html/css/bootsrap",
            detail: "GoldSmith",
            a:"https://edu-pi.vercel.app/index.html",
        },
        {
            id: 6,
            img:`${js}`,
            title: "javascript",
            detail: "Form Maker",
            a:"",
        },
        {
            id: 7,
            img:`${kal}`,
            title: "javascript  (api)",
            detail: "Kalles",
            a:"",
        },
     
    ]
    return (

        <div className="our-main " >
            <Container>
                <div className="upper-pot">
                    <p>   03 // LET ME SHOW YOU</p>
                    <p className='right'>(( ALL PROJECTS ))</p>
                </div>
            </Container>
            <div className="down-mar">
                <Marquee>
                <h1>Projects</h1>
                    <h1 className='vis'>Projects</h1>
                    <h1>Projects</h1>
                    <h1 className='vis'>Projects</h1>
                    <h1>Projects</h1>
                    <h1 className='vis'>Projects</h1>
                </Marquee>
            </div>
            <div className="port-detail">
                <Container>
<Row>
                    {
                        potdata &&
                        potdata.map((elem, index) => {
                            return (
                                <Col lg={6}>
                             <a href={elem.a} target='_blank'>
                             <div className="box-pot">
                                    <div className="img-boc">
                                        <img src={elem.img} alt="" />

                                    </div>
                                    <h6> {elem.id} &nbsp; // &nbsp; {elem.title}</h6>
                                  <div className="h1-down">
                                  <h1> {elem.detail}    </h1>
                                        <div className="icon-box-pot">
                                        <GoArrowUpRight />

                                        </div>
                                
                                  </div>
                                </div>
                             </a>
                                </Col>
                            )

                        })
                    }
                    {/* <div className="box-pot">
                        
                    </div> */}
</Row>
                </Container>
            </div>
        </div>
    )
}

export default Port
