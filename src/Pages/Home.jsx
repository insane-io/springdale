import React, { useEffect, useRef } from 'react';
import edu from '../Assets/edu.svg';
import Text from '../Components/Text';
import Vision from '../Components/Vision';
import Carousal from '../Components/Carousal';
import annualday from '../Assets/annual day.jpg';
import exhibition from '../Assets/exhibition.jpg';
import fest from '../Assets/fest.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const successful = "Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our institution is dedicated to providing a comprehensive education that goes beyond academics. At Springdale, we believe in the holistic development of each student, fostering their intellectual, emotional, social, and physical growth.";
  const images = [
    { image: annualday, text: "Annual Day" },
    { image: exhibition, text: "Exhibition" },
    { image: fest, text: "Fest" },
  ];

  const studentsRef = useRef(null);

  useGSAP(() => {
    gsap.to('#welcome', {
      opacity: 1,
      delay: 0.5,
      stagger: 0.25,
    },[]);

    let obj = { count: 0 };
    gsap.to(obj, {
      count: 3000,
      duration: 3,
      onUpdate: function() {
        studentsRef.current.innerHTML = `${Math.ceil(obj.count)} + Students`;
      },
      ease: 'power4.out'
    });

    gsap.to('#successful',{
      scrollTrigger :{
        trigger: "#successful",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,
      duration: 1,
      translateX: 0,
      stagger: 1,
    })

    gsap.to('#caro',{
      scrollTrigger :{
        trigger: "#caro",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,
      duration: 1,
    })
  }, []);

  return (
    <div>
      {window.scroll(0,0)}
      <div className='bg-[#F5F5F5] md:h-[446px] flex flex-row items-center justify-between lg:px-32 px-3'>
        <div id='welcome' className='w-full  xl:text-5xl lg:text-3xl md:text-2xl  opacity-0 font-light text-[#6B6A6A] italic'>
          Welcome to <span className='text-[#D55900]'>Springdale Public School</span>, where we nurture young minds for a brighter future
        </div>
        <img src={edu} alt="Education" className='max-sm:size-40 '/>
      </div>
      <div className='lg:px-32 px-4 px-auto w-full md:my-10 flex max-sm:flex-col md:justify-between my-3'>
        <h1 id="welcome" className='xl:w-[227px] opacity-0 xl:h-[227px] border border-black text-[#D55900] rounded-full flex items-center justify-center font-normal italic xl:text-3xl p-3 text-center'>Since 1985</h1>
        <h1 id="welcome" ref={studentsRef} className='opacity-0 xl:w-[227px] xl:xl:h-[227px] border border-black text-[#D55900] rounded-full flex items-center justify-center font-normal italic xl:text-3xl p-3 text-center'>0+ Students</h1>
        <h1 id="welcome" className='xl:w-[227px] opacity-0  xl:h-[227px] border border-black text-[#D55900] rounded-full flex items-center justify-center font-normal italic xl:text-3xl p-3 text-center'>Qualified Faculty</h1>
        <h1 id="welcome" className='xl:w-[227px] opacity-0  xl:h-[227px] border border-black text-[#D55900] rounded-full flex items-center justify-center font-normal italic xl:text-3xl p-3 text-center'>Modern Facilities</h1>
      </div>
      <div className='lg:px-40 px-3 my-16'>
        <Text text={"Successful 35+ Years"} />
        <div className='flex lg:flex-row flex-col lg:justify-between items-center'>
          <h1 id="successful" className='my-10 -translate-x-44 opacity-0 w-full lg:text-3xl text-lg font-thin italic text-[#6B6A6A]'>{successful}</h1>
          <div id="successful" className='flex flex-col gap-5 translate-x-44 opacity-0'>
            <Vision title={"Our Vision"} content={`"To create a learning environment that fosters academic excellence, critical thinking, and ethical values."`} />
            <Vision title={"Our Mission"} content={`"To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."`} />
          </div>
        </div>
        <Text text={"Highlights"} />
        <div id="caro" className='lg:px-20 my-10 opacity-0'>
          <Carousal images={images} />
        </div>
      </div>
    </div>
  );
}

export default Home;
