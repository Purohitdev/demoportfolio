import React from 'react'
import { Container } from 'react-bootstrap'
import p1 from '../../image/main1.png'
import p2 from '../../image/star1.png'
import p3 from '../../image/rudh.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";






function Picsec() {
    return (

        <div className="main-picsec">
            <Container>
                <div className="innner-colorchange">
                    <div className="inner-left-picsec">
                        <div className="upper-inner">
                            <img src={p2} alt="" />
                            <h1>  about me</h1>
                            <p>Hello, my name’s Nikolas, I'm a web
                                designer and developer.
                                Duis dolor in reprehenderit velit
                                th esse cillum fugiat nulla pariatur. </p>
                        </div>
                        <div className="upper-inner pt">
                            <img src={p2} alt="" />
                            <h1>  what i do</h1>
                            <p>Website Design & Logo /
                                Mobile Application Design /
                                UI/UX Mobile Design /
                                Wev Developments /
                                Brand identity</p>

                        </div>

                    </div>
                    <div className="inner-mid">
                        <img src={p1} alt="" />

                    </div>
                    <div className="inner-left-picsec">
                        <div className="upper-inner right">
                            <img src={p2} alt="" />

                            <h1> contact me</h1>
                            <p>Address: 45 Kofi Annan St, Ghana Email: contact@example.com nikolasraio@gmail.com
                                Telephone number: 004-400-45</p>


                        </div>
                        <div className="upper-inner right pt ">
                            <img src={p2} alt="" />

                            <h1>  find with mne</h1>
                            <div className="icon-div " id="About" >
                                <a href="https://www.facebook.com/jitesh.rajpurohit.140/" target='_blank'>
                                    <div className="icon-box marr">
                                        <FaFacebookF />

                                    </div>
                                </a>
                                <a href="https://twitter.com/DevanshRaj65478" target='_blank'>
                                    <div className="icon-box marr">
                                        <FaTwitter />

                                    </div>
                                </a>

                                <a href="https://www.instagram.com/purohit.devuu/" target='_blank'>
                                <div className="icon-box marr">
                                    <FaInstagram />

                                </div>
                                </a>
                                <a href="https://www.linkedin.com/in/devansh-rajpurohit-a9834625a/" target='_blank'>
                                <div className="icon-box marr">
                                    <FaLinkedinIn />

                                </div>
                                </a>
                                <a href="https://dribbble.com/" target='_blank'>
                                <div className="icon-box marr">
                                    <FaDribbble />

                                </div >
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
                <hr />

            </Container>


        </div>
    )
}

export default Picsec