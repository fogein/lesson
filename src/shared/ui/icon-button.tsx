import React, { FC, ReactNode } from 'react'

type PropsType = {
  icon: string | ReactNode;
  active?: boolean;
  rounded?: boolean;
  iconClassName?: string;
  className?: string;
}

export const IconButton: FC<PropsType> = (props) => {
  const {icon, active, rounded, iconClassName, className} = props
  return (
    <div className={`${className ? className : 'w-[45px] h-[45px] '} cursor-pointer flex justify-center items-center bg-[#3456ffbf] ${rounded ? 'rounded-full' : 'rounded-[15px]'} hover:bg-[#3456FF] ${active && 'bg-[#3456FF]'}`}>
        {typeof icon === 'string' ? <img className={`${iconClassName ? iconClassName : 'w-[24px] h-[24px]'}`} src={icon} alt="LOGO" /> :
        icon}
    </div>
  )
}
