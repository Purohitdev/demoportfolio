import React from 'react'
import { Container } from 'react-bootstrap'
import i1 from '../../image/ani1.png'
import { IoArrowDownOutline } from "react-icons/io5";

function About() {
    const carddata = [
        {
            id: 1,
            title: "Born In",
            detail: "East Legon Accra, Ghana"

        },
        {
            id: 2,

            title: "Experience",
            detail: "15 Years Experience"
        },
        {
            id: 3,
            title: "Date Of Birth",
            detail: "20 December, 1994"
        },
        {
            id: 4,

            title: "Language",
            detail: "German, English, Spanish"
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
                        <p> Hello, my name’s Nikolas Raio, I’m a bay area
                            born designer based in Ghana. I’m currently at
                            Envoy as a senior web designer creating connected
                            brands, product commerce, and web experiences.</p>

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
                                            {elem.detail}
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