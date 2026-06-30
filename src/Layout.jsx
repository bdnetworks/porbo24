import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialButton from './components/SocialButton'
import TopGobutton from './components/TopGobutton'
import SubscribeBtn from './components/SubscribeBtn'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <Navbar />
      
      <SocialButton/>
      <TopGobutton/>
      {/* Main Content */}
      <main className="flex-1 ">
        {children}
      </main>
       <SubscribeBtn/>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
