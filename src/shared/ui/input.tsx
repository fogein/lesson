import React from 'react'

export const Input = (props: any) => {
  const { beforeIcon } = props
  const renderBeforeIcon = beforeIcon && (
    <div className="ml-[28px]">
      <img
        src={beforeIcon}
        alt='icon'
        className="w-[24px] h-[24px]"
      />
    </div>
  )
  const renderInput = (
    <input className='rounded-[25px] bg-[#F8F8FA] outline-none px-[10px] w-full' />
  )
  return (
    <div className='w-full'>
      <div className='
      h-[50px]
      font-regular
      rounded-[25px]
    bg-[#F8F8FA]
    w-full
    flex
    items-center
    transition'>{renderBeforeIcon}
        {renderInput}</div>
    </div>
  )
}
