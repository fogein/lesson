import React, { FC, ReactNode } from 'react'

type InputType = {
  beforeIcon?: string;
  icon?: ReactNode;
  placeholder?: string;
  height?: number;
  width?: number;
}

export const Input: FC<InputType> = (props) => {
  const { beforeIcon, icon, placeholder, height, width } = props
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
      <div style={{width: `${width}px`, height: `${height}px`}} className='
      h-[48px]
      font-regular
      rounded-[25px]
    bg-[#F8F8FA]
    w-full
    flex
    items-center
    transition pl-[28px]'>{renderBeforeIcon}
        {renderInput}
        {renderIcon}</div>
    </div>
  )
}
