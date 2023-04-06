import React from 'react'
import { BsFillChatTextFill } from 'react-icons/bs'
import { Box } from '../../shared/ui/box'
import { CoursesPopular } from '../../shared/ui/courses-popular'
import { FollowingRecommendations } from '../../shared/ui/following-recommendations'
import { LinkedInCorp } from '../../shared/ui/LinkedInCorp'

export const RightContent = () => {
  return (
    <>
    <FollowingRecommendations />
    <CoursesPopular />
    <LinkedInCorp />
    <Box className='py-[7px] pl-[29px]'>
      <div className='flex items-center gap-[13px]'>
        <BsFillChatTextFill fill='#27AE60' size={32} />
        <span className='text-[14px] font-[500] leading-[110%] text-[#070928BF]'>Message</span>
      </div>
    </Box></>
  )
}
