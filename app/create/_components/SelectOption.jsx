"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function SelectOption({ selectedStudyType }) {
  const Options = [
    {
      name: "試験",
      icon: "/exam.svg"
    },
    {
      name: "面接", 
      icon: "/interview.svg"
    },
    {
      name: "語学学習",
      icon: "/language.svg"
    },
    {
      name: "プログラミング学習",
      icon: "/coding.svg"
    },
    {
      name: "その他",
      icon: "/others.svg"
    },
  ]

  const [selectedOption, setSelectedOption] = useState()
  return (
    <div className=''>
      <h2 className="text-center mb-2 text-lg">どのような学習教材を作成したいですか？</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-5'>
        {Options.map((option, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center justify-center shadow-sm rounded-xl p-4 hover:shadow-md transition-all cursor-pointer border border-gray-200 hover:border-blue-300 hover:bg-blue-50 
            ${option?.name === selectedOption ? ' border-blue-500 bg-blue-100' : ''}`}
            onClick={() => {
              setSelectedOption(option.name);
              selectedStudyType(option.name);
            }}
          >
            {/* aspect-ratioを使用して正方形のコンテナを作成 */}
            <div className="w-30 aspect-square relative mb-3 flex items-center justify-center bg-gray-50 rounded-lg"
            >
              <Image 
                src={option.icon} 
                alt={option.name} 
                fill
                className="object-contain p-2"
              />
            </div>
            <h2 className='text-sm text-center font-medium text-gray-700'>{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

