import React from 'react'
import { Header } from '../shared/ui/header'
import { LeftProfile } from '../shared/ui/left-profile'


export const Layout = () => {
  return (
    <div>
      <Header />
      <div className='pt-[23px] px-[90px]'>
        <div className='flex gap-[30px]'>
          <div>
            <LeftProfile />
          </div>
          <div className='w-[614px] h-[150px] bg-[#fff]'>
          </div>
          <div>
            <LeftProfile />
          </div>
        </div>
      </div>
    </div>
  )
}
