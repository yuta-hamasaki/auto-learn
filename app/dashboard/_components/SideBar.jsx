'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function SideBar() {
  const MenuList = [
    {
      name: 'ダッシュボード',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
        {
      name: 'アップグレード',
      icon: Shield,
      path: '/dashboard/upgrade'
    },
        {
      name: 'プロフィール',
      icon: UserCircle,
      path: '/dashboard/profile'
    },

  ]

  const path = usePathname()
  return (
    <div className='h-screen shadow-md p-5 font-bold'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt="logo" width={40} height={40}/>
        <h2 className="font-bold text-2xl">AutoLearn</h2>
      </div>

      <div className="mt-10">
        <Button
        className='w-full bg-blue-500 text-white'
        >+ 新規作成</Button>

        <div className='mt-3'>
          {MenuList.map((menu, index)=>(
            <div className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-2 ${path == menu.path && 'bg-slate-200'}`} key={index}>
              <menu.icon/>
              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='shadow p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]'>
        <h2 className='text-l'>利用可能クレジット数: 5</h2>
        <Progress value={30}/>
        <h2 className='text-sm'>1 out of 5 credit userd</h2>

        <Link
        href={'/dashboard/upgrade'}
        className='text-blue-500 text-xs mt-3'
        >Upgrade to create more</Link>
      </div>
    </div>
  )
}
