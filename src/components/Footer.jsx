import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#07186b] text-white py-8 mt-12">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">পর্ব २४</h3>
            <p className="text-sm text-gray-300">
              আপনার বিশ্বস্ত খবরের উৎস। সর্বদা আপডেট থাকুন।
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ক্যাটাগরি</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">সর্বশেষ</a></li>
              <li><a href="#" className="hover:text-white transition">বাংলাদেশ</a></li>
              <li><a href="#" className="hover:text-white transition">রাজনীতি</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">সম্পর্কে</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-white transition">যোগাযোগ</a></li>
              <li><a href="#" className="hover:text-white transition">গোপনীয়তা নীতি</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">যোগাযোগ</h4>
            <p className="text-sm text-gray-300">ইমেইল: info@porbo24.com</p>
            <p className="text-sm text-gray-300">ফোন: +880 1234 567890</p>
          </div>
        </div>
        <hr className="border-gray-600 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; 2026 পর্ব २४। সর্বাধিকার সংরক্ষিত।</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">ফেসবুক</a>
            <a href="#" className="hover:text-white transition">টুইটার</a>
            <a href="#" className="hover:text-white transition">ইউটিউব</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
