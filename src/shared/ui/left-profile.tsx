import React from 'react'
import Profile from '../../assets/profile.svg'
import { Box } from './box'

export const LeftProfile = () => {
  return (
    <Box className='w-[292px] h-[358px] relative z-[1] overflow-hidden'>
      <div className=' h-[99px] bg-[#3456FF] absolute z-[-1] top-0 bottom-0 left-0 right-0'></div>
      <div className='p-[40px_11px_38px_22px] flex flex-col items-center'>
      <img className=' ml-[-11px] mt-[1px]w-[102px] h-[102px] border-solid border-[#DBE7FF] border-[5px] rounded-full mr-[7px] mb-[3px]' src={Profile} alt="" />
      <span className=' ml-[-15px] mb-[17px] font-[500] text-[14px] leading-[15.4px] text-[#070928]'>Wawan Purwanto</span>
      <span className='font-[400] ml-[-5px] text-[12px] leading-[110%]'>I have experince 1 year UI/UX Design</span>
      <div className='flex items-center justify-between w-full mt-[30px]'>
        <div className='flex flex-col gap-[10px] ml-[17px]'>
          <span className='font-[500] text-[14px] leading-[110%] text-[#070928]'>Profile Views</span>
          <span className='font-[400] text-[14px] leading-[110%] text-[#070928]'>16+</span>
        </div>
        <div className='flex flex-col gap-[10px] mr-[38px] mt-[-1px]'>
          <span className='font-[500] text-[14px] leading-[110%] text-[#070928]'>Profile Post</span>
          <span className='font-[400] text-[14px] leading-[110%] text-[#070928]'>400+</span>
        </div>
      </div>
      </div>
    </Box>
  )
}
