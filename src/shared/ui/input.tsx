import React, { FC, ReactNode } from 'react'
import { IconType } from 'react-icons';

type InputType = {
  beforeIcon?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export const Input: FC<InputType> = (props) => {
  const { beforeIcon, icon, placeholder } = props
  const renderBeforeIcon = beforeIcon && (
    <div className="ml-[28px]">
      <img
        src={beforeIcon}
        alt='icon'
        className="w-[24px] h-[24px]"
      />
    </div>
  )
  const renderIcon = icon && (
    <div className="ml-[28px]">
     {icon}
    </div>
  )
  const renderInput = (
    <input placeholder={placeholder} className='placeholder:text-[#070928BF] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[110%] rounded-[25px] bg-[#F8F8FA] outline-none px-[10px] w-full' />
  )
  return (
    <div className='w-full'>
      <div className='
      h-[48px]
      font-regular
      rounded-[25px]
    bg-[#F8F8FA]
    w-full
    flex
    items-center
    transition pl-[38px]'>{renderBeforeIcon}
        {renderInput}
        {renderIcon}</div>
    </div>
  )
}
