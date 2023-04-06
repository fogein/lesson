import React from 'react'
import { FiImage } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { Avatar } from './avatar'
import { Input } from './input'

export const AddCommentForm = () => {
  return (
    <div className='flex items-center gap-[11px] w-full'>
      <div className='w-[48px] h-[48px]'><Avatar className='!border-0' /></div>
      <div className=''>
        <Input width={511} placeholder='add Comment...' icon={<div className='flex mr-[49px] items-center gap-[38px]'><FiImage size={24} /><RiSendPlaneFill className='rotate-[45deg]' size={27} /></div>} />
      </div>
    </div>
  )
}
