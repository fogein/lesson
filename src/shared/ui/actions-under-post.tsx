import React from 'react'
import { SlLike } from 'react-icons/sl'
import { BiComment, BiSend } from 'react-icons/bi'
import { BsFillChatTextFill } from 'react-icons/bs'
import { FiBookmark, FiShare2 } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'

export const ActionsUnderPost = () => {
  return (
    <div className='w-full flex items-center justify-evenly h-[24px]'>
      <div className='flex items-center gap-[5px]'>
        <SlLike fill='#070928BF' className='text-[#070928BF]'  size={20}  />
        <div className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Like</div>
      </div>
      <div className='flex ml-[19px] items-center gap-[5px]'>
        <BsFillChatTextFill fill='#070928BF' className='text-[#070928BF]' size={22} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Comment</span>
      </div>
      <div className='flex ml-[-2px] items-center gap-[9px]'>
        <FiBookmark strokeWidth={0} fill='#070928BF' className='text-[#070928BF]' size={20} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Saved</span>
      </div>
      <div className='flex items-center gap-[5px]'>
      <RiSendPlaneFill fill='#070928BF' className='rotate-[45deg] text-[#070928BF]' size={27} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Send</span>
      </div>
      <div className='flex items-center gap-[5px]'>
        <FiShare2 fill='#070928BF' strokeWidth={1} stroke={'#070928BF'} className=' text-[#070928BF]' size={24} />
        <span className='text-[12px] font-[400] leading-[110%] text-opacity-[0.75] text-[#070928]'>Share</span>
      </div>
    </div>
  )
}
