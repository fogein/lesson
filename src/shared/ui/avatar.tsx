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
    <div style={{width: `${width}px`, height: `${height}px`}} className='rounded-full overflow-hidden'>
     {typeof image === 'string' ?  <img width={width} height={height} className={`${className} border-solid  rounded-full border-[#DBE7FF] border-[2.65px]`} src={image} alt="123" /> : <div className={`${className} flex items-center justify-center`}>{image}</div>}
    </div>
  )
}
