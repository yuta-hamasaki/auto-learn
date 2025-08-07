import React from 'react'
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

export default function TopicInput({ setTopic, setDifficultyLevel }) {
  return (
    <div className="mt-10 w-full flex flex-col items-center text-gray-800">
      <h2>生成したいトピックや内容を入力してください</h2>
      <Textarea replaceholder='ここに入力' className="mt-2 border-gray-300" onChange={(event)=> setTopic(event.target.value)}/>

      <h2 className='mt-5 mb-3'>難易度を選択</h2>
      <Select onValueChange={(value) => setDifficultyLevel(value)} className="w-full">
        <SelectTrigger className="w-full border-gray-300">
          <SelectValue placeholder="難易度を選択" />
        </SelectTrigger>
        <SelectContent className="border-gray-300">
          <SelectItem value="Easy">初級</SelectItem>
          <SelectItem value="Moderate">中級</SelectItem>
          <SelectItem value="Hard">上級</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
