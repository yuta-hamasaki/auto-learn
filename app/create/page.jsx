'use client'
import SelectOption from './_components/SelectOption';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; 
import Alert from '../dashboard/_components/Alert';


export default function Create() {
  const [step, Setstep] = useState(0)
  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const handleUserInput = (fieldName, fieldValue)=>{
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue
    }));
    // console.log("Form Data:", formData);
  }

  const GenerateCourseOutline = async () => {
      try {
        const courseId = uuidv4();
        setLoading(true);
        const payload = {
          courseId,
          courseType: formData.studyType,
          topic: formData.topic,
          difficultyLevel: formData.difficultyLevel || "Medium",
          createdBy: user?.primaryEmailAddress?.emailAddress,
        };

        console.log("Payload being sent:", payload);

        const result = await axios.post(
          "/api/generate-course-outline",
          payload
        );

        console.log("API Response:", result.data.result.resp);
        setLoading(false);
        router.replace('/dashboard')
      } catch (error) {
        console.error(
          "Error generating course outline:",
          error?.response?.data || error.message
        );
        alert("Failed to generate course outline. Please check your input.");
      }
    };

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
        {step == 0 ? <Button className="font-bold" onClick={() => Setstep(1)}>次へ</Button> : <Button className="font-bold" onClick={GenerateCourseOutline} disabled={loading}>{loading?<Loader className='animate-spin'/>:"作成"}</Button>}
      </div>
    </div>
  )
}
