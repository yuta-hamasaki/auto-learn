import Image from 'next/image'
import React from 'react'

export default function SideBar() {
  return (
    <div className='h-screen shadow-md p-5'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt="logo" width={40} height={40}/>
        <h2 className="font-bold text-2xl">AutoLearn</h2>
      </div>
    </div>
  )
}
