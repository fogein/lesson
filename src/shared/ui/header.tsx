import React from 'react'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Profile from '../../assets/profile.svg'
import Home from '../../assets/home.svg'
import Right from '../../assets/right.svg'
import { Divider } from './divider'
import { IconButton } from './icon-button'
import { Input } from './input'
import { Avatar } from './avatar'
const arr = [{logo: Home},{logo: Home},{logo: Home},{logo: Home},{logo: Home},]
export const Header = () => {
  return (
    <div className='h-[89px] bg-[#fff] pl-[90px]'>
      <div className='h-full flex items-center'>
        <div className='mr-[32px]'><img src={Logo} alt="LOGO" /></div>

        <div className='mr-[25px] w-[488px]'><Input beforeIcon={Search} /></div>

        <div className='flex items-center gap-[30px] mr-[17.5px]'>{arr.map((item, index) => (<IconButton icon={item.logo} active={index === 0} />))}</div>

        <div className='mr-[37.5px]'><Divider /></div>

        <div className='flex items-center h-[45px]'>
          <Avatar image={Profile} />
          <span className='text-[14px] font-[500] leading-[16px] text-[#070928]'>Wawan Purwanto</span>
          <div className='flex items-center justify-center bg-[#3456ffbf] w-[19.1px] h-[20px] rounded-full'>
          <img src={Right} alt='123' />
          </div>
          </div>
      </div>
    </div>
  )
}
