import React from 'react'
import Text from '../Components/Text'
import Carousal from '../Components/Carousal'
import sports from "../Assets/sports.jpg"
import science from "../Assets/science.jpg"
import cultural from "../Assets/fest.jpg"
import classimage from "../Assets/image 8.svg"
import library from "../Assets/image 9.svg"

const Gallary = () => {

    

    const images = [
        { image: sports, text: "Sports Day" },
        { image: science, text: "Science Exhibition" },
        { image: cultural, text: "Cultural event" },
        { image: classimage, text: "Classroom" },
        { image: library, text: "Library" },
    ];

    return (
        <div className='py-10 xl:px-40 px-5'>
            {window.scroll(0,0)}
            <Text text={"Photos"} />
            <div className='md:px-20 my-10'><Carousal images={images} /></div>
            <Text text={"Videos"} />
            <div className='md:px-20 flex flex-col items-center my-10 gap-10'>
                <h1 className='text-4xl italic font-semibold text-[#D55900]'>School Tour</h1>
                <iframe src="https://www.youtube.com/embed/FUSJkqaHgYk" allow="clipboard-write; encrypted-media" allowFullScreen className='rounded md:h-[30rem] h-60 w-full'></iframe>
            </div>
            <div className='md:px-20 flex flex-col items-center my-10 gap-10'>
                <h1 className='text-4xl italic font-semibold text-[#D55900]'>Annual Day</h1>
                <iframe src="https://www.youtube.com/embed/UQ7V2BH2hGA" allow="clipboard-write; encrypted-media" allowFullScreen className='rounded md:h-[30rem] h-60 w-full'></iframe>
            </div>
        </div>
    )
}

export default Gallary
