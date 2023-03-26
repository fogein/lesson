import React from 'react'
import { InformationCard } from '../../entities/information-card/ui'
import { ProfileCard } from '../../entities/profile-card/ui'


export const LeftContent = () => {
  return (
    <>
      <div className='flex flex-col gap-[21px]'>
        <ProfileCard />
        <InformationCard />
      </div>
    </>
  )
}
