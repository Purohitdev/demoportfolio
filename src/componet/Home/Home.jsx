import React from 'react'
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
// import ScrollSpy from "react-ui-scrollspy";

function Home() {
  return (
  <>
  {/* <ScrollSpy> */}
  <Navb/>
  <Hero/>
  <Picsec/>
  <About/>
  <Whitemarq/>
  {/* <Ourserv/> */}
  <Port/>
  <WhiteComp/>
  {/* <Plans/> */}
  <Contact/>
  <Smallfoot/>
  {/* </ScrollSpy> */}
  </>
  )
}

export default Home
