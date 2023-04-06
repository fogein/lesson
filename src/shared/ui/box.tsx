import React, { FC, ForwardedRef, forwardRef, ReactNode } from 'react'
type BoxType = {
  className?: string;
  children: ReactNode; 
  borderRadius?: number; 
}

export const Box = forwardRef((props: BoxType , forwardedRef) => {
  const { children, className, borderRadius = 32, ...remainingProps } = props;
  return (
    <div ref={forwardedRef as ForwardedRef<HTMLInputElement>} style={{borderRadius: `${borderRadius}px`}} className={` bg-[#fff] ` + className} {...remainingProps}>{children}</div>
  )
})
