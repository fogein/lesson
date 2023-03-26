import React, { FC, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { Avatar } from './avatar'
import { Box } from './box';
import Post from '../../assets/post.jpg'
import { ShowMore } from '../show-more';
import { ActionsUnderPost } from './actions-under-post';
import { AddCommentForm } from './add-comment-form';
type PostProfilePropsType = {
  name?: string;
  description?: string;
  timeAgo?: string;
  postMainText?: string;
  postImage?: string;
}

export const ProfilePost: FC<PostProfilePropsType> = (props) => {
  const { description = 'Product Designer at lancar.id', name = 'Julia Robert', timeAgo = '1 hr ago', postMainText = 'Challenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee RestaurantChallenge Application about food and Coffee Restaurant', postImage = Post } = props;
  const [showMore, setShowMore] = useState(false)
  return (
    <Box borderRadius={22} className='p-[32px_12px_29px_16px]'>
      <div className='flex items-center mb-[20px] gap-[7px]'>
        <Avatar className='bg-[#3456FF] bg-opacity-[0.9] w-[60px] h-[60px]' image={<BiUser size={40} color={'#fff'} />} />
        <div className='flex flex-col items-start gap-[5px] mt-[8px] ml-[-2px]'>
          <span className='text-[14px] font-[500] leading-[110%] text-[#070928]'>{name}</span>
          <span className='mt-[-2px] ml-[1px] text-[12px] font-["Open_Sans"] text-opacity-[0.75] font-[400] leading-[110%] text-[#070928]'>{description}</span>
          <span className='text-[12px] text-opacity-[0.75] font-[400] leading-[110%] text-[#070928]'>{timeAgo}</span>
        </div>
      </div>
      <div className='min-h-[68px] mb-[5px] flex flex-col items-start'>
        <div className={`${showMore ? 'w-fit' : 'max-w-[310px] truncate'} h-min text-[12px] text-left text-opacity-[0.75] font-["Open_Sans"] font-[400] leading-[110%] text-[#070928]`}>{postMainText}</div>
        <div className='self-end mt-[18px] mr-[-1px] mb-[5px]'>
          <ShowMore onClick={() => setShowMore(!showMore)} text='More Article' />
        </div>
        <div className='text-[12px] text-opacity-[0.75] font-[500] leading-[110%] text-[#070928] mt-[3px]'>See translate</div>
      </div>
      <div>
        <div className='w-full max-h-[227px] bg-[#F8F8FA] rounded-[12px] overflow-hidden mb-[21px]'>
          <img width={'100%'} src={postImage} alt="" />
        </div>
      </div>
      <div><ActionsUnderPost /></div>
      <div className='mt-[31px] ml-[3px]'><AddCommentForm /></div>
    </Box>
  )
}
