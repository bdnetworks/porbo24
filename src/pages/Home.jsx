import React, { useContext } from 'react'
import { NewsContext } from '../App' // App.jsx এর সঠিক পাথ দিন

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
import PhotoNews from '../components/PhotoNews'

const Home = () => {
  // গ্লোবাল স্টেট থেকে newsData এবং loading স্টেট নিয়ে আসা হলো
  const { newsData, loading } = useContext(NewsContext);

  // সেফটি লোডার: প্রথমবার ডেটা আসার আগ পর্যন্ত স্ক্রিন ক্র্যাশ বা ফাঁকা হওয়া আটকাবে
  if (loading && newsData.length === 0) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">হোমপেজ লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className='max-w-[1280px] min-h-[100vh] mx-auto px-4 py-6'>
      <Hero/>
      <VideoNews/>
      <NotableCategories/>
      <Sports/>
      <DeshSection/>
      <InternationalNews/>
      <EntertainmentNews/>
      <OpinionNews/>
      <PhotoNews/>
      <ForYou/>
      <OthersNews/>
    </div>
  )
}

export default Home
