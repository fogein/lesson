import React from 'react'
import { SlLike } from 'react-icons/sl'
import { BiComment, BiSend } from 'react-icons/bi'
import { FiBookmark, FiShare2 } from 'react-icons/fi'

export const ActionsUnderPost = () => {
  return (
    <div className='w-full flex items-center justify-evenly h-[24px]'>
      <div className='flex items-center gap-[5px]'>
        <SlLike size={24}  />
        <div className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Like</div>
      </div>
      <div className='flex items-center gap-[5px]'>
        <BiComment size={24} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Comment</span>
      </div>
      <div className='flex items-center gap-[5px]'>
        <FiBookmark size={24} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Saved</span>
      </div>
      <div className='flex items-center gap-[5px]'>
        <BiSend size={24} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Send</span>
      </div>
      <div className='flex items-center gap-[5px]'>
        <FiShare2 size={24} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Share</span>
      </div>
    </div>
  )
}
