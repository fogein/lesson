import React, { useRef } from 'react'
import { BiChevronLeft, BiChevronRight, BiUser } from 'react-icons/bi'
import { Avatar } from './avatar'
import { Box } from './box'
import { IconButton } from './icon-button'

export const UsersSlider = () => {
  const usersList = new Array(15).fill({ icon: <BiUser size={30} color={'#fff'} /> , name: 'Gomer'})
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (scroll: number) => {
    ref.current?.scrollBy({ left: scroll, behavior: 'smooth' })
  };

  return (
    <div className='relative w-full'>
      <button onClick={() => scroll(-50)} className='absolute left-[5px] bottom-[40%]'>
        <BiChevronLeft size={20} color='#fff' className='bg-[#3456FF] rounded-full ' />
      </button>
      <button onClick={() => scroll(50)} className='absolute right-[5px] bottom-[40%]'>
        <BiChevronRight size={20} color='#fff' className='bg-[#3456FF] rounded-full' />
      </button>
      <Box ref={ref} borderRadius={12} className='py-[8px] h-[100px] w-full overflow-x-scroll'>
        <div className=''>
          <div className='flex items-center justify-center gap-[10px] h-[84px]'>
          {usersList.map((user, index) => (
            <div className='flex flex-col gap-[8px]' key={index}>
              <Avatar className='border-[4px] border-[#3456FF80] max-h-[60px] min-w-[60px]' />
              <span className='text-[14px] font-[400] text-[#070928] leading-[16px]'>{user.name}</span>
            </div>
          ))}
          </div>
        </div>
      </Box>
    </div>
  )
}
