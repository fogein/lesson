import React from 'react'

export const IconButton = (props:any) => {
  const {icon, active} = props
  return (
    <div className={`w-[45px] h-[45px] cursor-pointer flex justify-center items-center bg-[#3456ffbf] rounded-[15px] hover:bg-[#3456FF] ${active && 'bg-[#3456FF]'}`}>
        <img className='w-[24px] h-[24px]' src={icon} alt="LOGO" />
    </div>
  )
}
