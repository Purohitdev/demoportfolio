import React from 'react'
import { Container } from 'react-bootstrap'
import p1 from '../../image/profile-pic.png'
import p2 from '../../image/star1.png'
import p3 from '../../image/rudh.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";







function Picsec() {
    return (

        <div className="main-picsec">
            <Container>
                <div className="innner-colorchange">
                    <div className="inner-left-picsec">
                        <div className="upper-inner">
                            <img src={p2} alt="" />
                            <h1>  about me</h1>
                            <p>Hello, my name’s Devnash, a 17-year-old frontend developer Based in Mumbai
                                 </p>
                        </div>
                        <div className="upper-inner pt">
                            <img src={p2} alt="" />
                            <h1>  what i do</h1>
                            <p>Website Design & Logo /
                                UI/UX  Design /
                                Fronted dev .

                               </p>

                        </div>

                    </div>
                    <div className="inner-mid">
                        <img src={p1} alt="" />

                    </div>
                    <div className="inner-left-picsec">
                        <div className="upper-inner right">
                            <img src={p2} alt="" />

                            <h1> contact me</h1>
                            <p>
                             Email: devanshrajpurohit1@gmail.com
                                 Number:+91-9653364287</p>


                        </div>
                        <div className="upper-inner right pt ">
                            <img src={p2} alt="" />

                            <h1>  find me on</h1>
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

                                <a href="https://www.instagram.com/hoi.devu/" target='_blank'>
                                <div className="icon-box marr">
                                    <FaInstagram />

                                </div>
                                </a>
                                <a href="https://www.linkedin.com/in/devansh-rajpurohit-a9834625a/" target='_blank'>
                                <div className="icon-box marr">
                                    <FaLinkedinIn />

                                </div>
                                </a>
                                <a href="https://github.com/Purohitdev" target='_blank'>
                                <div className="icon-box marr">
                                    <LuGithub />                                   
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
