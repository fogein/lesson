import React from 'react'
import { ContentDivider } from '../../shared/ui/content-divider'
import { CreatePostCard } from '../../shared/ui/create-post-card'
import { ProfilePost } from '../../shared/ui/profile-post'
import { UsersSlider } from '../../shared/ui/users-slider'

export const CenterContent = () => {
  return (
    <div><UsersSlider />
      <CreatePostCard />
      <ContentDivider />
      <ProfilePost /></div>
  )
}
