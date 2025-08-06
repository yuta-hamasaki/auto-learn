import { UserButton } from '@clerk/nextjs'

export default function DashboardHeader() {
  return (
    <div className='p-5 shadow-md flex justify-end'>
      <UserButton/>
    </div>
  )
}
