import React from 'react'
import Text from "../Components/Text"

const Academics = () => {
  return (
    <div className='lg:px-40 px-4 my-5'>
      {window.scroll(0,0)}
      <Text text={"Primary (Grades 1-5)"}/>
      <div className='grid md:grid-cols-3 gap-5 text-white font-bold italic underline'>
        <h1 className='p-5 border rounded-lg bg-red-400'>English</h1>
        <h1 className='p-5 border rounded-lg bg-yellow-400'>Mathematics</h1>
        <h1 className='p-5 border rounded-lg bg-green-400'>Science</h1>
        <h1 className='p-5 border rounded-lg bg-blue-400'>Social Studies</h1>
        <h1 className='p-5 border rounded-lg bg-orange-400'>Art</h1>
        <h1 className='p-5 border rounded-lg bg-violet-400'>Physical Education</h1>
      </div>
      <Text text={"Secondary (Grades 6-10)"}/>
      <div className='grid md:grid-cols-3 gap-5 text-white font-bold italic underline'>
        <h1 className='p-5 border rounded-lg bg-red-400'>English</h1>
        <h1 className='p-5 border rounded-lg bg-yellow-400'>Mathematics</h1>
        <h1 className='p-5 border rounded-lg bg-green-400'>Science(Physics, Chemistry, Biology)</h1>
        <h1 className='p-5 border rounded-lg bg-blue-400'>Social Studies</h1>
        <h1 className='p-5 border rounded-lg bg-rose-400'>Computer Science</h1>
        <h1 className='p-5 border rounded-lg bg-violet-400'>Physical Education</h1>
        <h1 className='p-5 border rounded-lg bg-gray-400'>Art</h1>
      </div>
      <Text text={"Senior Secondary (Grades 11-12)"}/>
      <div className='grid md:grid-cols-3 gap-5 text-white font-bold italic underline'>
        <h1 className='p-5 border rounded-lg bg-red-400'>English</h1>
        <h1 className='p-5 border rounded-lg bg-yellow-400'>Mathematics</h1>
        <h1 className='p-5 border rounded-lg bg-green-400'>Science(Physics, Chemistry, Biology)</h1>
        <h1 className='p-5 border rounded-lg bg-blue-400'>Social Studies</h1>
        <h1 className='p-5 border rounded-lg bg-rose-400'>Computer Science</h1>
        <h1 className='p-5 border rounded-lg bg-violet-400'>Physical Education</h1>
        <h1 className='p-5 border rounded-lg bg-gray-400'>Art</h1>
      </div>
    </div>
  )
}

export default Academics
