import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiRightArrow } from "react-icons/bi";
import { NavLink } from 'react-bootstrap';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Navb() {

 
  return (
    <div className="outer">
      <Navbar className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='logo'>Devansh</Navbar.Brand>
      

          <Nav className="me-mid   mid">
            <a className='nav-link' href="#Home" data-to-scrollspy-id="Home">Home</a>
            <a className='nav-link'  href="#About" data-to-scrollspy-id="About">About</a>
            <a className='nav-link'  href="#port" data-to-scrollspy-id="port">portfolio</a>
{/*            <a className='nav-link'  href="#services" data-to-scrollspy-id="services">services</a>
            <a className='nav-link' href="#contact" data-to-scrollspy-id="contact">contact</a>  */}
          </Nav>
          <div className="but">

            <Button className='org-butt'><a href="#contact">
              let's talk <span className='arrow'>
                <BiRightArrow className='arroww' /></span>
            </a>
            </Button>

          </div>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navb;
