import React from 'react'
import ProfilerPic from '../components/ProfilerPic'
import '../styles/TopPanel.css'
import { NotificationSVG, SearchSVG } from '../assets/dynamicSVG'

const TopPanel = () => {
  return (
    <>
      <form action=''>
        <SearchSVG />
        <input type='search' placeholder='Search' />
      </form>
      <div className='profile-notification'>
        <NotificationSVG />
        <ProfilerPic />
      </div>
    </>
  )
}

export default TopPanel
