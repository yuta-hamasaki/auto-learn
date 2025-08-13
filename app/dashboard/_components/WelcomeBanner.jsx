"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
export default function WelcomeBanner() {
  const {user} = useUser()
  return (
    <div className='p-5 shadow-sm bg-blue-50 w-full rounded-lg flex items-center gap-6'>
      <Image src={'/laptop.svg'} alt="ノートパソコン" width={100} height={100}/>
      <div>
        <h2 className='font-bold text-2xl'>
          {user?.fullName}さん、こんにちは！
        </h2>
        <p className="text-sm">おかえりなさい。学習を始めましょう！</p>
      </div>
    </div>
  )
}
