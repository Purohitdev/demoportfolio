import { Container } from 'react-bootstrap';
import { RiArrowRightSFill } from "react-icons/ri";
import { HiMiniArrowLongDown } from "react-icons/hi2";
import gsap from 'gsap';

function Hero() {

  return (
    <>
      <div className="main-hero" id="Home" >
        <Container>
          <div className="inner-hero">
            <div className="inner-left left-up">
              <h1 className='trans try'>Hello world! I'm</h1>
              <h1 className='try2'>
                Devansh Rajpurohit
                <span><RiArrowRightSFill /></span>
              </h1>
            </div>
            <div className="inner-right right-up">
              <h1 className='try'>Frontend dev</h1>
              <h1 className='trans try2n'>Based in Mumbai</h1>
            </div>
          </div>
          <div className="inner-hero-down">
            <h4> 01 // 05 - SCROLL <span className='aroow-down'><HiMiniArrowLongDown /></span></h4>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Hero;
