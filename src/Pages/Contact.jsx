import React from 'react'
import ContactCard from '../Components/ContactCard'

const Contact = () => {
    return (
        <div className='lg:px-40 py-10 flex lg:flex-row flex-col items-center lg:justify-between'>
            {window.scroll(0,0)}
            <div className='border-2 lg:my-0 my-5 border-[#D55900] rounded-lg p-5 lg:w-6/12 w-4/5'>
                <h1 className='text-2xl font-bold italic text-[#D55900]'>Contact Us</h1>
                <p className='text-lg'>We are here to help you.</p>
                <div className='flex justify-center'>
                    <form action="" className='flex justify-center flex-col gap-3 w-10/12 '>
                        <input type="text" placeholder="Name" className='border-2 p-2 rounded' />
                        <input type="email" placeholder="Email" className='border-2 p-2 rounded' />
                        <input type="text" placeholder="Phone" className='border-2 p-2 rounded' />
                        <textarea placeholder="Message" rows="5" className='flex justify-center p-2 border-2 rounded' />
                        <button type="submit" className='bg-[#D55900] text-white resize-none font-bold py-3 px-10 rounded-full'>Submit</button>
                    </form>
                </div>
            </div>
            <div >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56039.84682020916!2d77.1401545447056!3d28.615060121442184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6077bbc7c9%3A0x360d343dd9a24a11!2sSpringdales%20School!5e0!3m2!1sen!2sin!4v1721894732692!5m2!1sen!2sin" className='h-96 w-[30rem]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact
