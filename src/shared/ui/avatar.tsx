import React, { FC, ReactNode } from 'react'
import ProfileAvatar from '../../assets/profile.svg'

type AvatarProps = {
  image?: string | ReactNode
  className?: string
  height?: number
  width?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { image = ProfileAvatar, className, height, width } = props;
  return (
    <div className='w-full h-full rounded-full overflow-hidden'>
     {typeof image === 'string' ?  <img className={`${className} w-full h-full border-solid rounded-full border-[#DBE7FF] border-[2.65px]`} src={image} alt="123" /> : <div className={`${className} flex items-center justify-center h-full w-full`}>{image}</div>}
    </div>
  )
}
