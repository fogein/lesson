import React, { FC, ReactNode } from 'react'
type PropsType = {
  className?: string;
  children: ReactNode; 
  borderRadius?: number; 
}

export const Box: FC<PropsType> = (props) => {
  const { children, className, borderRadius = 32 } = props;
  return (
    <div style={{borderRadius: `${borderRadius}px`}} className={` bg-[#fff] ` + className}>{children}</div>
  )
}
