import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { ShowMore } from '../show-more';
import { Accordion } from './accordion'
import { Box } from './box'

export const CoursesPopular = () => {

  const [showMore, setShowMore] = useState(false)
  const [activeAccordionItem, setActiveAccordionItem] = useState<Array<string | undefined>>(
    [],
  );
  const clickAccordionHeaderBtn = (id: string) => {
    setActiveAccordionItem((prev) =>
      !prev.includes(id) ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };
  const usersList = new Array(15).fill({ name: 'Jhon Robert', jobTitle: 'Product Designer at dsgn.id' })
  return (
    <Box className='w-[292px] mb-[15px] h-min max-h-[550px] overflow-auto'>
      <div className={`p-[25px_28px_45px_18px]`} >
        <Accordion onClick={clickAccordionHeaderBtn} active={activeAccordionItem.includes('Courses')} id='Courses' titleName='Courses Popular ' >
          <div className={`flex flex-col w-full gap-[15px] mt-[24px] ${!showMore ? 'h-[180px]' : ' min-h'} overflow-hidden`}>
            {usersList.map((item) => (
              <div className='flex items-center justify-between gap-[8px]'>
                <div className='flex flex-col items-start gap-[5px]'>
                  <span className='text-[#070928] text-[14px] font-[400] leading-[110%]'>{item.name}</span>
                  <span className='text-[#070928BF] text-[12px] leading-[110%] font-[400]'>{item.jobTitle}</span>
                </div>
                <div><AiOutlineEye fill='#07092880' /></div>
              </div>
            ))}
          </div>
        </Accordion>
        <div className='flex items-start mt-[20px]'>
          <ShowMore onClick={() => setShowMore(!showMore)} text={showMore ? 'Hide Recommendation' : 'More Recommendation'} />
        </div>
      </div>
    </Box>
  )
}
