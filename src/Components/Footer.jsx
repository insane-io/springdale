import React from 'react'
import logo from "../Assets/logo.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-row  items-center h-60 bg-[#D55900] opacity-95 justify-around text-white italic'>
            <img src={logo} alt="" className='md:h-40' />
            <div className='flex flex-col justify-start'>
                <h1 className='md:text-4xl'>
                    Quick Links
                </h1>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/academics">academics</Link>
                <Link to="/admission">admission</Link>
                <Link to="/faculty">faculty</Link>
                <Link to="/students">students</Link>
                <Link to="/gallary">gallary</Link>
            </div>
            <div className='flex flex-col justify-start h-full mt-8'>
                <h1 className='md:text-4xl'>Reach Us At</h1>
                <ul>
                    <li>Address: "Springdale Public School, <br/> 123 Education Lane, Cityville, State, ZIP Code"</li>
                    <li>Phone: "+1 (123) 456-7890"</li>
                    <li>Email: "info@springdale.edu"</li>
                </ul>
            </div>
    </div>
  )
}

export default Footer
