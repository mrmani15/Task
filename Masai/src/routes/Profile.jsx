import React from 'react'
import HomeSidebarNav from '../components/HomeSidebarNav'
import ProfileTweet from '../components/ProfileTweet'

function Home() {
  return (
    <div className='d-flex'>
      <HomeSidebarNav />
      <ProfileTweet />
    </div>
  )
}

export default Home
