import React from 'react'
import BreakingNews from '../components/BreakingNews'
import Hero from '../components/newsCategories/Hero'
import NotableCategories from '../components/notableCategories'
import Sports from '../components/sports'
import DeshSection from '../components/DeshSection'
import InternationalNews from '../components/newsCategories/internationalNews'
import EntertainmentNews from '../components/newsCategories/EntertainmentNews'
import VideoNews from '../components/newsCategories/VideoNews'
import OpinionNews from '../components/newsCategories/OpinionNews'

const Home = () => {
  return (
    <div className='max-w-[1280px] min-h-[100vh] mx-auto px-4 py-6'>
      <BreakingNews/>
     <Hero/>
     <NotableCategories/>
     <Sports/>
     <DeshSection/>
     <InternationalNews/>
     <EntertainmentNews/>
     <VideoNews/>
     <OpinionNews/>
    </div>
  )
}

export default Home

