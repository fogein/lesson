import React from 'react'
import { ContentDivider } from '../shared/ui/content-divider'
import { CreatePostCard } from '../shared/ui/create-post-card'
import { Header } from '../shared/ui/header'
import { ProfilePost } from '../shared/ui/profile-post'
import { UsersSlider } from '../shared/ui/users-slider'
import { CenterContent } from '../widgets/center-content/ui'

import { LeftContent } from '../widgets/left-content/ui'


export const Layout = () => {
  return (
    <div>
      <Header />
      <div className='pt-[23px] pr-[165px] pl-[164px]'>
        <div className='flex gap-[30px]'>
          <div>
            <LeftContent />
          </div>
          <div className='w-[539px]'>
            <CenterContent />
          </div>
          <div>
            <LeftContent />
          </div>
        </div>
      </div>
    </div>
  )
}
