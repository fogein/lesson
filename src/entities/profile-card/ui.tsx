import React from 'react'
import Profile from '../../assets/profile.svg'
import { BiBookmarkAlt, BiKey } from 'react-icons/bi'
import { Box } from '../../shared/ui/box'
import { IconButton } from '../../shared/ui/icon-button'
import { FiAward, FiBookmark } from 'react-icons/fi'

export const ProfileCard = () => {
  return (
    <Box className='w-[292px] h-[358px] relative z-[1] overflow-hidden'>
    <div className=' h-[99px] bg-[#3456FF] absolute z-[-1] top-0 bottom-0 left-0 right-0'></div>
    <div className='p-[40px_11px_38px_22px] flex flex-col items-center'>
      <img className=' ml-[-6px] mt-[1px] w-[102px] h-[102px] border-solid border-[#DBE7FF] border-[5px] rounded-full mr-[7px] mb-[3px]' src={Profile} alt="" />
      <span className=' ml-[-13px] mb-[17px] font-[500] text-[14px] leading-[15.4px] text-[#070928]'>Wawan Purwanto</span>
      <span className='font-[400] ml-[-7px] text-[12px] leading-[110%]'>I have experince 1 year UI/UX Design</span>
      <div className='flex items-center justify-between w-full mt-[30px]'>
        <div className='flex flex-col gap-[10px] ml-[18px]'>
          <span className='font-[500] text-[14px] leading-[110%] text-[#070928]'>Profile Views</span>
          <span className='font-[400] text-[14px] leading-[110%] text-[#070928]'>16+</span>
        </div>
        <div className='flex flex-col gap-[10px] mr-[36px]'>
          <span className='font-[500] text-[14px] leading-[110%] text-[#070928]'>Profile Post</span>
          <span className='font-[400] text-[14px] leading-[110%] text-[#070928]'>400+</span>
        </div>
      </div>
      <div className='flex items-center justify-between w-full mt-[27px]'>
        <div className='flex items-center gap-[2.94px] ml-[20px]'>
          <IconButton className='w-[32px] h-[32px]' icon={<FiBookmark fill='#fff' className='text-[#fff]' size={21} />} rounded />
          <span className='text-[#070928] text-opacity-[0.75] font-400 text-[12px] leading-[110%]'>Saved</span>
        </div>
        <div className='flex items-center gap-[6.86px] mr-[14px]'>
          <IconButton className='w-[32px] h-[32px]' icon={<FiAward fill='#fff' className='text-[#fff]' size={21} />} rounded />
          <span className='text-[#070928] text-opacity-[0.75] font-400 text-[12px] leading-[110%]'>Try Premium</span>
        </div>
      </div>
    </div>
  </Box>
  )
}
