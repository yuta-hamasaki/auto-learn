'use client'
import SelectOption from './_components/SelectOption';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';

export default function Create() {
  const [step, Setstep] = useState(0)
  const [formData, setFormData] = useState([])
  const handleUserInput = (fieldName, fieldValue)=>{
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue
    }));
    // console.log("Form Data:", formData);
  }
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20 font-bold'>
      <h2 className='font-bold text-2xl text-blue-500'>
        あなた専用の学習教材を作り始めましょう
      </h2>
      <p className="text-gray-500 text-sm">次のプロジェクトのための学習教材を生成するには、すべての詳細を入力してください。</p>

      <div className="mt-10 w-[75%]">
        {step == 0 ? (
          <SelectOption 
            selectedStudyType={(value) => handleUserInput('studyType', value)}
          />
        ) : (
          <TopicInput 
            setTopic={(value) => handleUserInput("topic", value)}
            setDifficultyLevel={(value) => handleUserInput("difficultyLevel", value)}
          />
        )}
      </div>
      
      <div className='flex justify-between w-full mt-32'>
        {step != 0 ? <Button variant="outline" onClick={() => Setstep(step - 1)}>Previous</Button> : "-"}
        {step == 0 ? <Button className="font-bold" onClick={() => Setstep(1)}>次へ</Button> : <Button className="font-bold">作成</Button>}
      </div>
    </div>
  )
}
