import Home from './componet/Home/Home';
import logo from './logo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import ScrollTrigger from 'gsap-trial/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)














function App() {
  useGSAP(()=>{ 
    const t1=gsap.timeline()


    t1.from(".nav ,logo,a,org-butt",{
      y:-20,
      opacity:0,
      delay:1,
      duration:1,
      stagger:0.15
      
    })
    t1.from(".left-up , .try1, .try2", {
      x: -400,
      opacity:0,
      duration:0.5,
      stagger:0.7,
      delay:0.2
     
    },"-=2")
    t1.from(".right-up,.try1,.try2n ", {
      x: 400,
     opacity:0,
      duration:0.5,
      stagger:0.7,
      delay:0.2
 
    },"-=2")

    t1.from(".inner-hero-down, h4",{
      y:10,
      opacity:0,
      duration:1,

    })

    

    const t2=gsap.timeline({
      scrollTrigger:{
        trigger:".main-picsec",
        markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2,
      }
    })

    t2.from(".upper-inner",{
      y:50,
      opacity:0,
      duration:1,
      stagger:0.7,
      delay:0.2

    })


   



})
  return (  
    <>
    <Home/>

     



    </>

  )
}

export default App;
