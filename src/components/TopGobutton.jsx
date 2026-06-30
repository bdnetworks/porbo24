import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const TopGobutton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রোল পজিশন চেক করার ফাংশন
  const toggleVisibility = () => {
    // window.innerHeight মানে হলো ১ vh বা সম্পূর্ণ স্ক্রিনের উচ্চতা
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // একদম ওপরে স্ক্রোল করার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // স্মুথ স্ক্রোলিংয়ের জন্য
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // কম্পোনেন্ট আনমাউন্ট হলে ইভেন্ট লিসেনার রিমুভ করার জন্য
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full
           bg-[#07186b] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#051252]"
          title="Go to Top"
        >
          <FiChevronUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default TopGobutton;