import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ShowMore } from '../show-more';
import { Accordion } from './accordion'
import { Avatar } from './avatar';
import { Box } from './box'

export const FollowingRecommendations = () => {
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
    <Box className='w-[292px] mb-[50px] h-min max-h-[550px] overflow-auto'>
      <div className={`p-[39px_31px_45px_8px]`} >
        <Accordion className='' titleNameClassName='ml-[10px]' onClick={clickAccordionHeaderBtn} active={activeAccordionItem.includes('follows')} id='follows' titleName='Following ' >
          <div className={`flex flex-col w-full gap-[15px] mt-[24px] ${!showMore ? 'h-[245px]' : 'min-h'} overflow-hidden`}>
            {usersList.map((item) => (
              <div className='flex items-center gap-[8px]'>
                <div className=' mr-[5px] min-w-[50px] h-[50px]'>
                  <Avatar className='!border-0' />
                </div>
                <div className='flex flex-col items-start gap-[5px]'>
                  <span className='text-[#000000] text-[16px] font-[500] leading-[110%]'>{item.name}</span>
                  <span className='text-[#070928BF] text-[12px] leading-[110%] font-[400]'>{item.jobTitle}</span>
                </div>
                <div><AiOutlinePlusCircle fill='#07092880' /></div>
              </div>
            ))}
          </div>
        </Accordion>
        <div className='flex items-start mt-[25px] ml-[11px]'>
          <ShowMore onClick={() => setShowMore(!showMore)} text={showMore ? 'Hide Recommendation' : 'More Recommendation'} />
        </div>
      </div>
    </Box>
  )
}

