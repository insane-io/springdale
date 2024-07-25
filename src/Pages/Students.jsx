import React, { useEffect } from 'react';
import Text from '../Components/Text';
import extra from '../Assets/extra.svg';
import Carousal from '../Components/Carousal';
import music from '../Assets/music.png';
import dance from '../Assets/dance.jpg';
import drama from '../Assets/drama.jpg';
import art from '../Assets/art.jpg';
import sports from '../Assets/sports.jpg';
import robotics from '../Assets/robotics.jpg';
import debate from '../Assets/debate.jpg';
import club from '../Assets/clubs.svg';
import literary from "../Assets/LiteraryC2.jpg";
import environment from "../Assets/EnvironmentalClub.jpg";
import astronomy from "../Assets/astronomy.jpg";
import coding from "../Assets/coding.jpg";
import olympiad from "../Assets/olympiad.webp";
import swimming from "../Assets/swimming.avif";
import robotics_winner from "../Assets/robotics winner.jpg";
import FacultyCard from "../Components/FacultyCard";
import sc1 from "../Assets/sc 1.svg";
import sc2 from "../Assets/sc 2.svg";
import sc3 from "../Assets/sc 3.svg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Students = () => {

    useEffect(() => {
        gsap.to("#extra", {
            scrollTrigger: {
                trigger: '#extra',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",

            },
            opacity: 1,
            x: 0,
            duration: 1
        });

        gsap.to("#clubs", {
            scrollTrigger: {
                trigger: '#clubs',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",

            },
            opacity: 1,
            x: 0,
            duration: 1
        });

        gsap.to("#extra-text", {
            scrollTrigger: {
                trigger: '#extra-text',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",

            },
            opacity: 1,
            duration: 1.5
        });

        gsap.to("#clubs-text", {
            scrollTrigger: {
                trigger: '#clubs-text',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",

            },
            opacity: 1,
            duration: 1.5
        });

        gsap.to("#left", {
            scrollTrigger: {
                trigger: '#left',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            x: 0
        });

        gsap.to("#right", {
            scrollTrigger: {
                trigger: '#right',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",
            },
            opacity: 1,
            x: 0
        });
    }, []);

    const extracurricularImages = [
        { image: music, text: 'Music' },
        { image: dance, text: 'Dance' },
        { image: art, text: 'Art' },
        { image: sports, text: 'Sports' },
        { image: robotics, text: 'Robotics' },
        { image: drama, text: 'Drama' },
        { image: debate, text: 'Debate' },
    ];

    const clubImages = [
        { image: literary, text: 'Literary Club' },
        { image: environment, text: 'Environmental Club' },
        { image: astronomy, text: 'Astronomy Club' },
        { image: coding, text: 'Coding Club' },
    ];

    return (
        <div className="lg:px-40 px-3">
            {window.scroll(0, 0)}
            <div className="mt-6">
                <Text text={'Life at Springdale'} />
            </div>
            <div className="flex flex-row items-center gap-8">
                <img src={extra} id="extra" alt="Extracurricular" className="md:h-32 h-20 -translate-x-96 opacity-0" />
                <h1 id='extra-text' className="md:text-4xl text-2xl font-semibold italic opacity-0">Extracurricular Activities</h1>
            </div>
            <div className="lg:px-40 px-10">
                <Carousal images={extracurricularImages} page="extra" />
            </div>
            <div className="flex flex-row items-center gap-8 mt-12">
                <img src={club} id='clubs' alt="Clubs" className="md:h-32 h-20 -translate-x-96 opacity-0" />
                <h1 id='clubs-text' className="md:text-4xl text-2xl font-semibold italic opacity-0">Clubs and Societies</h1>
            </div>
            <div className="lg:px-40 px-10">
                <Carousal images={clubImages} page="clubs" />
            </div>
            <div className='my-10'>
                <Text text={"Achievements"} />
                <div className='my-10 flex  justify-between items-center'>
                    <img id='left' src={olympiad} alt="Olympiad Winner" className='md:h-60 md:w-96 w-40 opacity-0 -translate-x-60 ' />
                    <h1 id='right' className='md:text-3xl  italic opacity-0 translate-x-60'>John Smith - National Level Math Olympiad Winner</h1>
                </div>
                <div className='my-10 flex  justify-between items-center'>
                    <h1 id='left' className='md:text-3xl  italic opacity-0 -translate-x-60'>Sarah Lee - Gold Medalist in State Swimming Championship</h1>
                    <img id='right' src={swimming} alt="Swimming Winner" className='md:h-60 md:w-96 w-40 opacity-0 translate-x-60' />
                </div>
                <div className='my-10 flex  justify-between items-center gap-10'>
                    <img id='left' src={robotics_winner} alt="Robotics Winner" className='md:h-60 md:w-96 w-40 opacity-0 -translate-x-60' />
                    <h1 id='right' className='md:text-3xl  opacity-0 italic translate-x-60'>Tech Innovators Club - Winners of Inter-School Robotics Competition</h1>
                </div>
                <Text text={"Student Council"} />
                <div className='grid md:grid-cols-3 max-sm:px-6 gap-32'>
                    <FacultyCard image={sc1} name={"Lisa Wong,"} data={"Grade 10"} position={"Secretary"} />
                    <FacultyCard image={sc2} name={"Amy Parker,"} data={"Grade 12"} position={"President"} />
                    <FacultyCard image={sc3} name={"Rajiv Mehta,"} data={"Grade 11"} position={"Vice President"} />
                </div>
            </div>
        </div>
    );
};

export default Students;
