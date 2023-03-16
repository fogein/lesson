import React, { FC, ReactNode } from 'react'
type PropsType = {
  className?: string;
  children: ReactNode; 
}

export const Box: FC<PropsType> = (props) => {
  const { children, className } = props;
  return (
    <div className={`rounded-[32px] bg-[#fff] ` + className}>{children}</div>
  )
}
