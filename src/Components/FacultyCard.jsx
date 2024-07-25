import React from 'react'

const FacultyCard = (props) => {
  return (
    <div className='flex flex-col items-center text-center'>
        <img src={props.image} alt="img" className='w-full'/>
        <h1 className='text-2xl font-semibold text-[#D55900]'>{props.position}</h1>
        <h1 className='text-2xl font-semibold'>{props.name}</h1>
        <h1 className='text-lg'>{props.data}</h1>
    </div>
  )
}

export default FacultyCard
