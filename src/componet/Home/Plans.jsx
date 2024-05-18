import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ImArrowUpRight2 } from "react-icons/im";


function Plans() {
    const plandeta = [
        {
            id: 1,
            Plan: "Basic Plan",
            price: "25",

        },
        {
            id: 2,
            Plan: "Standart Plan",
            price: "75",


        },
        {
            id: 3,
            Plan: "Gold Plan",
            price: "125",


        },



    ]
    return (
        <div className='our-main-plans' >
            <Container>
                <div className="upper-pot pl">
                    <p>   05 // PRICING PLAN</p>
                    <h6>Your pricing page is a prime opportunity to take control of the price conversation and make it even easier for people to buy.</h6>
                    <p className='right'>(( SERVICE ALL ))</p>
                </div>
            </Container>
            <div className="card-div">
                <Container>
                    <Row>
                        {
                            plandeta &&
                            plandeta.map((elem, index) => {
                                return (
                                    <Col lg={4}>
                                        <div className="card-main-plains">
                                            <h3>{elem.Plan}</h3>
                                            <span className='flex'><h1>${elem.price}</h1> / month</span>
                                            <p>10% taxes will include after make price</p>
                                            <hr />
                                            <ul>
                                                <li><span className='dot'></span>Web Development</li>
                                                <li><span  className='dot'></span>Mobile Development</li>
                                                <li><span  className='dot'></span>Advetising</li>
                                                <li><span className='dot'></span>Graphic design</li>
                                                <li><span className='dot'></span>Project management</li>
                                            </ul>
                                            <button> Start My Project Now <ImArrowUpRight2 className='arr'/></button>
                                        </div>

                                    </Col>

                                )

                            })
                        }

                    </Row>
                </Container>
            </div>


        </div>
    )
}

export default Plans
