import React, { useEffect, useRef } from 'react';
import Navb from '../Nav'
import Hero from './Hero'
import Picsec from './Picsec'
import About from './About'
import Whitemarq from './Whitemarq'
import Ourserv from './Ourserv'
import Port from './Port'
import WhiteComp from './WhiteComp'
import Plans from './Plans'
import Contact from './Contact'
import Smallfoot from './Smallfoot'
import gsap from 'gsap';


function Home() {

  const curRef = useRef(null);
  const mainRef = useRef(null);

  // Effect for handling the mouse movement
  useEffect(() => {
    const main = mainRef.current;
    const cur = curRef.current;

    if (main && cur) {
      const handleMouseMove = (dets) => {
        gsap.to(cur, {
          x: dets.clientX,
          y: dets.clientY,
          ease: "back.out(2)",  
          duration:1,
      });
      };

      main.addEventListener('mousemove', handleMouseMove);

      // Cleanup the event listener when the component unmounts
      return () => {
        main.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);



  return (
    <div className="home" id='main' ref={mainRef}>
      <div className="cur" id="cur" ref={curRef}></div>

      <Navb />
      <Hero />
      <Picsec />
      <About />
      <Whitemarq />
      <Port />
      <WhiteComp />
      <Contact />
      <Smallfoot />

    </div>



  )
}

export default Home
