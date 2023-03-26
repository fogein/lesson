import React from 'react'
import { HiOutlineCalendar, HiUserGroup } from 'react-icons/hi';
import { ShowMore } from '../../shared/show-more';
import { Accordion } from '../../shared/ui/accordion'
import { Box } from '../../shared/ui/box'

export const InformationCard = () => {
  const [activeAccordionItem, setActiveAccordionItem] = React.useState<Array<string | undefined>>(
    [],
  );
  const clickAccordionHeaderBtn = (id: string) => {
    setActiveAccordionItem((prev) =>
      !prev.includes(id) ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };
  return (
    <Box className='w-[256px] h-min'>
      <div className='p-[30px_20px_20px_21px]'>
        <div>
          <Accordion onClick={clickAccordionHeaderBtn} active={activeAccordionItem.includes('groups')} id='groups' titleName='Groups' >
            <div className='flex flex-col mt-[10px]'>
              <div className='flex items-center gap-[7px]'>
                <HiUserGroup size={14} />
                <span className='text-[12px] font-[400] leading-[110%] text-[#070928] text-opacity-[0.75]'>UI/UX Design</span>
              </div>
              <div className='flex items-center gap-[7px] mt-[9px]'>
                <HiUserGroup size={14} />
                <span className='text-[12px] font-[400] leading-[14px] text-[#070928] text-opacity-[0.75]'>UI &nbsp;Design</span>
              </div>
              <div className='flex items-center gap-[7px] mt-[9px]'>
                <HiUserGroup size={14} />
                <span className='text-[12px] font-[400] leading-[14px] text-[#070928] text-opacity-[0.75]'>UI &nbsp;Design</span>
              </div>
            </div>
            <div className='flex self-start mt-[8px] ml-[21px]'>
              <ShowMore />
            </div>
          </Accordion>
          <Accordion className='mt-[21px]' onClick={clickAccordionHeaderBtn} active={activeAccordionItem.includes('event')} id='event' titleName='Event' >
            <div className='flex items-center gap-[6px] mt-[9px]'>
              <HiOutlineCalendar />
              <span className='text-[12px] font-[400] leading-[14px] text-[#070928] text-opacity-[0.75]'>Webinar UI Design at 09:00 am.</span>
            </div>
          </Accordion>
          <Accordion className='mt-[26px]' onClick={clickAccordionHeaderBtn} active={activeAccordionItem.includes('Followed')} id='Followed' titleName='Followed Hastag' >
            <div>
              <span className='text-[12px] font-[400] leading-[14px] text-[#070928] text-opacity-[0.75]'>#Userexperince #Userexperince #Userexperince #Userexperince #Userexperince #Userexperince #Userexperince #Userexperince #Userexperince #Userexperince</span>
            </div>
          </Accordion>
        </div>
      </div>
    </Box>
  )
}
