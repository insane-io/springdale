import React from 'react'

const Vision = (props) => {

  return (
    <div className={`h-auto bg-[#D55900] ${ props.page === "about" ? "lg:w-[28rem] w-96" : "w-96" }  rounded-lg opacity-95 p-4 flex text-white flex-col`}>
      <h1 className={`font-bold ${ props.page === "about" ? "text-3xl" : "text-2xl" }`}>{props.title}</h1>
      <p className={`italic ${ props.page === "about" ? "text-2xl" : "text-xl" } font-thin`}>{props.content}</p>
    </div>
  )
}

export default Vision
