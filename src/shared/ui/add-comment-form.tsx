import React from 'react'
import { BiImage, BiSend } from 'react-icons/bi'
import { Avatar } from './avatar'
import { Input } from './input'

export const AddCommentForm = () => {
  return (
    <div className='flex items-center gap-[11px] w-full'>
      <Avatar className='!border-0 !w-[55.22px]' />
      <Input placeholder='add Comment...' icon={<div className='flex mr-[16px] items-center gap-[15px]'><BiImage size={24} /><BiSend size={24} /></div>} />
      </div>
  )
}
