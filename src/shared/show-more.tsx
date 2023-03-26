import React, { FC } from 'react'

type ShowMoreType = {
  text?: string
  onClick?: () => void

}

export const ShowMore: FC<ShowMoreType> = (props) => {
  const { text = 'More', onClick } = props;
  return (
    <div onClick={onClick} className={`text-[12px] text-[#4FCB8D] leading-[14px] font-[500] cursor-pointer`}>{text}</div>
  )
}
