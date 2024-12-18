import '../../global.css'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen 
     gap-1 p-10 ps-5 pe-5 flex flex-col bg-slate-700/35'>
        <p className='h-12 self-start ms-8 text-2xl'>HELLO!</p>
        <div className='row'>
            <div className="board">a</div>
            <div className="board">a</div>
            <div className="board">a</div>
            <div className="board">a</div>
        </div>
        <div className='row'>
            <div className="board">a</div>
            <div className="board">a</div>
            <div className="board">a</div>
        </div>
        <div className='row'>
            <div className="board">a</div>
            <div className="board">a</div>
            <div className="board">a</div>
        </div>
    </div>
  )
}

export default page