import React from 'react'
import { Container } from 'react-bootstrap'
import i1 from '../../image/ani1.png'
import { IoArrowDownOutline } from "react-icons/io5";

function About() {
    const carddata = [
        {
            id: 1,
            title: "Born In",
            detail: "  Maharashtra, India."

        },
        {
            id: 2,

            title: "Study",
            detail: "Currently given HSC exam."
        },
        {
            id: 3,
            title: "Date Of Birth",
            detail: "16 July, 2006"
        },
        {
            id: 4,

            title: "Language",
            detail: " English , Hindi , Marwadi"
        },
    ]

    return (
        <div className="about-main">
            <Container>
                <div className="upper-about">
                    <div className="pg innerrr">
                        <p> 02 // ABOUT ME</p>

                    </div>
                    <div className="detail innerrr">
                        <p> Hello, my name’s Devansh Rajpurohit, I’m a Mumbai-born designer based in Bhayender. I’m currently learning Java for backend development..</p>

                    </div>
                    <div className="ani innerrr">
                        <IoArrowDownOutline className='down' />
                        <div className="circle-ani">

                            <img src={i1} alt="" />



                        </div>

                    </div>

                </div>
                <div className="lower-about">
                    {/* <div className="about-box">
                        <p>Born In</p>
                        <h6>
                            East Legon Accra, Ghana
                        </h6>
                    </div>
                    <div className="about-box"></div>
                    <div className="about-box"></div>
                    <div className="about-box"></div> */}
                    {
                        carddata &&
                        carddata.map((elem, index) => {
                            return (



                                <div className="about-box">
                                    <p>{elem.title}</p>
                                    <h6>
                                        ~{elem.detail}
                                    </h6>
                                </div>







                            )

                        })
                    }

                </div>
            </Container>

        </div>
    )
}

export default About
