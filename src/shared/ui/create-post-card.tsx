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
    <Box className='p-[13px_27px_31px_13px] mt-[9px]' borderRadius={32}>
      <div className='flex items-center gap-[10px]'>
       <div className='flex items-center justify-center w-[60px]'>
       <Avatar className='!border-0' />
       </div>
        <div><Input height={58} width={504} placeholder='Start a post' /></div>
      </div>
      <div className='flex items-center justify-around mt-[15px] ml-[-15px]'>
        {actionButtons.map(({ icon, text }, index) => (
          <div key={index} className={`flex items-center gap-[5px] ${index === 2 && 'ml-[20px]'}`}>
            <IconButton rounded className='w-[32px] h-[32px]' icon={icon} />
            <span className='text-[14px] text-[#070928BF] leading-[16px] font-[400]'>{text}</span>
          </div>
        ))}
      </div>
    </Box>
  )
}
