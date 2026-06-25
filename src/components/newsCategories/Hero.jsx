import React from 'react'
import HeroTopNews from './HeroTopNews'
import AllNewsLayout from './AllNewslayout'

const Hero = () => {
  return (
    <div className='flex flex-col gap-10'>
        <HeroTopNews/>
        <AllNewsLayout/>

    </div>
  )
}

export default Hero