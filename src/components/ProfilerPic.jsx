import React from 'react'
import { LogoIcon } from '../assets'
import '../styles/ProfilePic.css'

const ProfilerPic = () => {
  return (
    <>
      <img className='profile-pic' src={LogoIcon} alt='LogoIcon' />
    </>
  )
}

export default ProfilerPic
