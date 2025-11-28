import React from 'react'


export default function Main() {
  return (
    <div className=''>
      <p className='title text-2xl flex justify-center border-b'>TO DO LIST</p>
        <div className='absolute top-20 left-[43%]'>
          <label className=' text-black font-medium mb-2 flex justify-center'>
            Task
          </label>
          <div className='flex justify-center'>
            <input placeholder='Task' className='border rounded-2xl'/>
          </div>
        </div>
    </div>
  )
}

