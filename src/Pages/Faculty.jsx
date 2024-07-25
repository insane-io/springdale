import React from 'react'
import Text from '../Components/Text'
import FacultyCard from '../Components/FacultyCard'
import img1 from "../Assets/image 6.svg"
import img2 from "../Assets/image 13.svg"
import img3 from "../Assets/image 14.svg"
import img4 from "../Assets/image 15.svg"
import img5 from "../Assets/image 16.svg"
import img6 from "../Assets/image 17.svg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Faculty = () => {

  useGSAP(()=>{
    gsap.to("#images", {
      opacity: 1,
      delay: 0.5,
      stagger: {
        amount: 0.2
      }
    })
  },[])
  return (
    <div className='md:px-40 px-4 mt-5'>
      {window.scroll(0,0)}
      <Text text={"Our Faculty"}/>
      <div id='images' className='grid lg:grid-cols-4 gap-x-24 gap-y-10 opacity-0'>
        <FacultyCard image={img1} name={"John Doe"} data={"Principal, M.Ed, 20 years of experience in educational administration"}/>
        <FacultyCard image={img2} name={"Jane Smith"} data={"Vice Principal, M.Sc. in Physics, 15 years of teaching experience"}/>
        <FacultyCard image={img3} name={"Emily Johnson"} data={"English Teacher, M.A. in English, 10 years of teaching experience."}/>
        <FacultyCard image={img4} name={"Michael Brown"} data={"Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience"}/>
        <FacultyCard image={img5} name={"Sophia Davis"} data={"Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."}/>
        <FacultyCard image={img6} name={"David Wilson"} data={"Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience"}/>
      </div>
    </div>
  )
}

export default Faculty
