import React from 'react'
import { BiUser } from 'react-icons/bi'
import { Avatar } from './avatar'
import { Box } from './box'

export const UsersSlider = () => {
  const usersList = new Array(15).fill({ icon: <BiUser size={30} color={'#fff'} /> })

  return (
    <div>
      <Box className='py-[8px] overflow-x-scroll'>
        <div className='flex min-w px-[10px] gap-[5px]'>
          {usersList.map((user) => (
            <div>
              <Avatar className='bg-[#3456FF] bg-opacity-[0.9] w-[50px] h-[50px]' image={user.icon} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  )
}
