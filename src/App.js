import Home from './componet/Home/Home';
import logo from './logo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


function App() {
  useGSAP(() => {
    const t1 = gsap.timeline()


    t1.from(".nav ,logo,a,org-butt", {
      y: -20,
      opacity: 0,
      delay: 0.2,
      duration: 0.2,
      stagger: 0.15

    })
    t1.from(".left-up , .try1, .try2", {
      x: -400,
      opacity: 0,
      duration: 0.2,
      stagger: 0.7,
      delay: 0.2

    }, "-=2")
    t1.from(".right-up,.try1,.try2n ", {
      x: 400,
      opacity: 0,
      duration: 0.2,
      stagger: 0.7,
      delay: 0.2

    }, "-=2")

    t1.from(".inner-hero-down, h4", {
      y: 10,
      opacity: 0,
      duration: 0.1,
      delay: 0,

    })



    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-picsec",
        // markers:true,
        start: "top 50%",
        end: "top 0",
        scrub: 2,
      }
    })

    t2.from(".upper-inner , .inner-mid img", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.7,
      delay: 0.1


    })


    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-main",
        // markers: true,
        // start: "top 170%",
        start: "top 700px",
        end: "top 0",
        scrub: 1,
      }
    })

    t3.from(".upper-about", {
      x: 30,
      opacity: 0,
      duration: 0.20,
      delay: 0.2,

    })

    // t3.from(".about-box", {
    //   y: 30,
    //   opacity: 0,
    //   delay: 0,
    //   duration: 0.01,
    //   stagger: 0.01,


    // })



    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".port-detail ",
        start: "top 500px",
        end: "bottom 0",
        scrub: 1,
      }
    })


    t4.from(".card-pot", {
      x: 50,
      opacity: 0,
      duration: 10,
      stagger: 2,



    })



    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-white ",
        start: "top 500px",
        end: "bottom 0",
        scrub: 1,
      }
    })


    t5.from(".upper-white", {
      y: 30,
      opacity: 0,
      duration: 0.20,
      delay: 0.2

    })



    // const t6 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".back",
    //     start: "top 700px",
    //     end: "bottom 500px",
    //     scrub: 1,
    //   }
    // })

    // t6.from(".con1", {
    //   x: -30,
    //   opacity: 0,
    //   duration: 0.20,
    //   delay: 0.2

    // },"add")


    // t6.from(".con2", {
    //   x: 30,
    //   opacity: 0,
    //   duration: 0.20,
    //   delay: 0.2

    // },"add")

    

























  })
  return (
    <>
      <Home />





    </>

  )
}

export default App;
