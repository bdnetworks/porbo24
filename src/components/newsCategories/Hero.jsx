import React from 'react'
import HeroTopNews from './HeroTopNews'
import AllNewsLayout from './AllNewslayout'
// import VideoNewsMobile from './VideoNewsMobile'


const Hero = () => {
  return (
    <div className='flex flex-col gap-10'>
        <HeroTopNews/>
        {/* <div className='hidden max-sm:block'>
         <VideoNewsMobile/>
        </div> */}
        <AllNewsLayout/>

    </div>
  )
}

export default Hero