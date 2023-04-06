import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { Box } from './box'

export const LinkedInCorp = () => {
  return (
    <Box className='mb-[10px] p-[37px_16px_40px_18px]'>
      <div>
        <div className='flex gap-[5px] items-center justify-center mb-[27px]'>
          <div className='flex items-end'>
            <span className='text-[#0A66C2] text-[16px]'>Linked</span>
            <AiFillLinkedin size={25} fill='#0A66C2' />
          </div>
          <span className='font-[500] text-[#070928] text-[14px] leading-[110%]'>LinkedIn Corporation © 2021</span>
        </div>
        <div className='flex flex-col gap-[5px] flex-wrap h-[91px]'>
          {new Array(7).fill({ name: 'About' }).map((item) => {
            return (
              <div className='flex items-center h-[19px] gap-[5px]'>
                <input type="radio" />
                <span className='text-[12px] text-[#070928] font-[400] leading-[14px]'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Box>
  )
}
