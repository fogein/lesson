import React from 'react'
import { BiImage, BiPlayCircle } from 'react-icons/bi'
import { IoMdBriefcase } from 'react-icons/io'
import { MdOutlineArticle } from 'react-icons/md'
import { Avatar } from './avatar'
import { Box } from './box'
import { IconButton } from './icon-button'
import { Input } from './input'

export const CreatePostCard = () => {
  const actionButtons = [
    { text: 'Photo', icon: <BiImage size={18} fill='#fff' /> },
    { text: 'Videos', icon: <BiPlayCircle size={18} fill='#fff' /> },
    { text: 'Working', icon: <IoMdBriefcase size={18} fill='#fff' /> },
    { text: 'Create Article', icon: <MdOutlineArticle size={18} fill='#fff' /> }
  ]
  return (
    <Box className='p-[13px_32px_31px_13px] mt-[9px]' borderRadius={22}>
      <div className='flex items-center gap-[10px]'>
        <Avatar width={68} height={60} className='!border-0' />
        <Input placeholder='Start a post' />
      </div>
      <div className='flex items-center justify-evenly mt-[15px]'>
        {actionButtons.map(({ icon, text }) => (
          <div className='flex items-center gap-[5px]'>
            <IconButton rounded className='w-[32px] h-[32px]' icon={icon} />
            <span className='text-[14px] text-[#070928BF] leading-[16px] font-[400]'>{text}</span>
          </div>
        ))}
      </div>
    </Box>
  )
}
