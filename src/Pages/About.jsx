import React from 'react'
import img from "../Assets/about.svg"
import Vision from '../Components/Vision'
import Text from '../Components/Text'
import principal from "../Assets/Principal.svg"
import img1 from "../Assets/image 7.svg"
import img2 from "../Assets/image 10.svg"
import img3 from "../Assets/image 8.svg"
import img4 from "../Assets/image 9.svg"
import Typewriter from 'typewriter-effect';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        gsap.to('#history', {
            opacity: 1,
            duration: 1.5,
            ease: 'power1.in',
            delay: 0.75
        })

        gsap.to('#history-image', {
            opacity: 1,
            duration: 1,
            ease: 'power1.in',
            delay: 0.25
        })

        gsap.to('#vision', {
            scrollTrigger: {
                trigger: "#vision",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            duration: 1,
            translateX: 0,
            delay: 0.25
        })

        gsap.to('#mission', {
            scrollTrigger: {
                trigger: "#mission",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            duration: 1,
            translateX: 0,
            delay: 0.25
        })

        gsap.to('#pricipal-image', {
            scrollTrigger: {
                trigger: "#pricipal-image",
            },
            opacity: 1,
            delay: 1,
        })
    }, [])

    return (
        <div className='xl:px-40 px-4'>
            {window.scroll(0,0)}
            <div className='bg-[#F5F5F5] w-full h-auto pb-8 lg:px-10 my-24 flex max-md:flex-col justify-between items-center rounded-xl px-auto'>
                <img id='history-image' className='opacity-0' src={img} alt="" />
                <h1 id="history" className='w-full opacity-0 md:text-4xl text-md text-[#6B6A6A] italic'>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students</h1>
            </div>
            <div className='flex lg:flex-row flex-col lg:justify-around items-center gap-3 mb-16'>
                <div id='vision' className="-translate-x-80 opacity-0"><Vision title={"Our Vision"} page={"about"} content={`"To create a learning environment that fosters academic excellence, critical thinking, and ethical values."`} /></div>
                <div id='mission' className="translate-x-80 opacity-0"><Vision title={"Our Mission"} page={"about"} content={`"To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."`} /></div>
            </div>
            <Text text={"Principal's Message"} />
            <div className='md:my-10 flex justify-evenly md:flex-row flex-col'>
                <div id='pricipal-image' className='flex items-center flex-col opacity-0'>
                    <img src={principal} alt="" className='rounded-md' />
                    <h1 className='my-3 text-3xl font-bold'>John Doe</h1>
                    <h1 className='text-lg'>Principal</h1>
                </div>
                <h1 className='w-full md:text-4xl italic mt-20'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(100)
                                .typeString(`At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.`)
                                .pauseFor(10)
                                .start();
                        }}
                        options={{
                            typeSpeed: 1
                        }}
                    />
                </h1>
            </div>
            <Text text={"Infrastructure and Facilities"} />
            <div className='grid md:grid-cols-2 gap-3 lg:px-24 md:my-20'>
                <img src={img1} alt="" className='w-full h-80' />
                <img src={img2} alt="" className='w-full h-80' />
                <img src={img3} alt="" className='w-full h-80' />
                <img src={img4} alt="" className='w-full h-80' />
            </div>
        </div>
    )
}

export default About
