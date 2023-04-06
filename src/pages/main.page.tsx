import React from 'react'
import { CenterContent } from '../widgets/center-content/ui'
import { LeftContent } from '../widgets/left-content/ui'
import { RightContent } from '../widgets/right-content/ui'

export const MainPage = () => {
  return (
    <div className='pt-[23px] px-[90px]'>
        <div className='flex gap-[30px]'>
          <div>
            <LeftContent />
          </div>
          <div className='w-[614px]'>
            <CenterContent />
          </div>
          <div>
          <RightContent />
          </div>
        </div>
      </div>
  )
}
