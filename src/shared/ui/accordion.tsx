import React, { FC, ReactNode } from "react";
import { BiChevronRight } from "react-icons/bi";

type AccordionType = {
  titleName: string;
  children: string | ReactNode;
  active?: boolean;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  titleNameClassName?: string;
}

export const Accordion: FC<AccordionType> = (props) => {
  const { titleName, titleNameClassName, children, active, id, onClick, className } = props;


  return (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <span className={` ${titleNameClassName} text-[#070928] font-[500] text-[14px] leading-[16px]`}>{titleName}</span>
        <div className='bg-[#3456FF] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-opacity-[0.75]'>
          <div id={id}
            onClick={() => {
              onClick?.(id);
            }}>
            <BiChevronRight className={`cursor-pointer ${active ? 'rotate-[0deg]'
              : 'rotate-[90deg]'} transition-all`} color='#fff' size={20} />
          </div>
        </div>
      </div>
      <div
        id={id}
        className={`border-0 ${!active ? 'overflow-hidden' : 'overflow-y-auto'
          } transition-all duration-[300ms]  ${!active ? 'max-h-0' : 'max-h-[75vh]'}`}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}

