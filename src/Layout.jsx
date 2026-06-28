import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 ">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
