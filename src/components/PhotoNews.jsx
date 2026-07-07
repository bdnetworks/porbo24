import React, { useState, useEffect } from 'react';
// আপনার ফাইল থেকে photoData ইমপোর্ট করা হলো
import { photoData } from '../data/photoData';
import { Link } from 'react-router';

// গ্যালারি আইকনের জন্য সাধারণ SVG কম্পোনেন্ট (যাতে আলাদা লাইব্রেরি ইনস্টল না করতে হয়)
const GalleryIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);

export default function PhotoNews() {
  // ১. বাম পাশের স্লাইডারের জন্য প্রথম ডেটা অবজেক্টটি নিচ্ছি
  const mainSliderNews = photoData[0];
  const sliderImages = mainSliderNews?.imagesWithDesc || [];

  // ২. ডান পাশের ৪টি নিউজের জন্য বাকি ডেটাগুলো নিচ্ছি (index 1 থেকে 4 পর্যন্ত)
  const rightSideNewsList = photoData.slice(1, 5);

  // স্লাইডারের স্টেট
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো-প্লে স্লাইডার ইফেক্ট (প্রতি ৩ সেকেন্ড পর পর ছবি পরিবর্তন হবে)
  useEffect(() => {
    if (sliderImages.length === 0) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  // যদি কোনো কারণে ডেটা লোড না হয়, তাহলে সেফটি চেক
  if (!photoData || photoData.length === 0) {
    return <div className="text-center p-10">কোনো ডেটা পাওয়া যায়নি!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      
      
    {/* ===================== Section Header ===================== */}
        <div className="mb-6 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">ছবি</h2>
          <span className="text-[30px] font-light text-[#304bd1]">›</span>
        </div>

      {/* মূল গ্রিড লেআউট */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ================= বাম পাশের বড় স্লাইডার (Left Side Div) ================= */}
        {sliderImages.length > 0 && (
          <Link
            to={`/photo-news/${mainSliderNews.id}`}
            className="lg:col-span-2 relative group overflow-hidden rounded-xl bg-black h-[350px] md:h-[480px]  shadow-lg"
          >
            
            {/* স্লাইডার ইমেজ */}
            <img 
              src={sliderImages[currentSlide].img} 
              alt={sliderImages[currentSlide].shortDesc} 
              className="w-full h-full object-cover transition-all duration-750 ease-in-out transform scale-100 group-hover:scale-102"
            />
            
            {/* ডার্ক ওভারলে শ্যাডো */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* টপ-রাইট সাইডে ছোট গ্যালারি আইকন */}
            <div className="absolute top-4 right-4 bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md z-10">
              <GalleryIcon className="w-5 h-5" />
            </div>

            {/* বটম সেকশন: মেইন টাইটেল এবং ছোট ডেসক্রিপশন */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
              <span className="text-xs bg-red-600 text-white font-bold px-2.5 py-1 rounded mb-3 inline-block uppercase tracking-wide">
                {mainSliderNews.title} ({currentSlide + 1}/{sliderImages.length})
              </span>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2">
                {sliderImages[currentSlide].shortDesc}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2 hidden md:block">
                {mainSliderNews.mainDescription}
              </p>
            </div>

            {/* স্লাইডার ডট ইন্ডিকেটর */}
            <div className="absolute bottom-6 right-8 flex gap-2 z-10">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-350 ${
                    index === currentSlide ? 'w-6 bg-red-500' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </Link>
        )}


        {/* ================= ডান পাশের ৪টি নিউজ (Right Side Div) ================= */}
        <div className="flex flex-col gap-4 h-[480px]">
          {rightSideNewsList.map((news) => {
            // প্রতিটি নিউজের প্রথম ইমেজটি থাম্বনেইল হিসেবে দেখানোর জন্য
            const firstImage = news.imagesWithDesc?.[0]?.img || "https://via.placeholder.com/150";
            
            return (
              <Link
                key={news.id} 
                to={`/photo-news/${news.id}`}
                className="relative flex flex-row gap-4 p-2.5   border-b-[1px] border-gray-300 hover:border-gray-300 transition-all cursor-pointer h-[108px]  overflow-hidden group"
              >
                {/* ইমেজ সেকশন (Left Side inside small div) */}
                <div className="relative w-1/3 h-full flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={firstImage} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* ইমেজ এর ওপরে টপ-রাইট সাইডে ছোট গ্যালারি আইকন */}
                  <div className="absolute top-1.5 right-1.5 bg-black/70 text-white p-1 rounded backdrop-blur-sm">
                    <GalleryIcon className="w-3 h-3" />
                  </div>
                </div>

                {/* টাইটেল এবং বিবরণ সেকশন (Right Side inside small div) */}
                <div className="w-2/3 flex flex-col justify-center pr-1">
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug mb-1">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {news.mainDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
