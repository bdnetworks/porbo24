import React from 'react'
import BreakingNews from '../components/BreakingNews'
import Hero from '../components/newsCategories/Hero'
import NotableCategories from '../components/NotableCategories'
import Sports from '../components/sports'
import DeshSection from '../components/DeshSection'
import InternationalNews from '../components/newsCategories/InternationalNews'
import EntertainmentNews from '../components/newsCategories/EntertainmentNews'
import VideoNews from '../components/newsCategories/VideoNews'
import OpinionNews from '../components/newsCategories/OpinionNews'
import ForYou from '../components/newsCategories/ForYou'
import OthersNews from '../components/newsCategories/OthersNews'

const Home = () => {
  return (
    <div className='max-w-[1280px] min-h-[100vh] mx-auto px-4 py-6'>
      <BreakingNews/>
     <Hero/>
     <VideoNews/>
     <NotableCategories/>
     <Sports/>
     <DeshSection/>
     <InternationalNews/>
     <EntertainmentNews/>
     <OpinionNews/>
     <ForYou/>
     <OthersNews/>
    </div>
  )
}

export default Home

