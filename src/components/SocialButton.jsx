import React, { useState } from "react";
import { FaYoutube, FaFacebookF, FaTimes } from "react-icons/fa";

const SocialButton = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="fixed left-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ytbtn flex items-center rounded-r-md bg-[#FF0000] p-3 text-white shadow-lg transition-all duration-300"
      >
        <FaYoutube className="min-w-[24px] text-xl" />

        <span className="ytname ml-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300">
          YouTube
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fbbtn flex items-center rounded-r-md bg-[#1877F2] p-3 text-white shadow-lg transition-all duration-300"
      >
        <FaFacebookF className="min-w-[24px] text-xl" />

        <span className="fbname ml-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300">
          Facebook
        </span>
      </a>

      {showPopup && (
        <div className="relative ml-2 w-[180px] rounded-r-md border border-black/10 bg-white p-3 text-[#111827] shadow-xl">
          <button
            type="button"
            aria-label="Hide popup"
            onClick={() => setShowPopup(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] text-white shadow-md transition hover:bg-[#333]"
          >
            <FaTimes />
          </button>

          <p className="text-xs font-bold text-[#07186b]">বিজ্ঞাপন</p>
          <p className="mt-1 text-sm font-semibold leading-5">
            আপনার কনটেন্ট এখানে দেখান
          </p>
          <p className="mt-1 text-xs leading-4 text-gray-500">
            ক্লায়েন্টের অ্যাড বা ছোট বার্তা বসানো যাবে।
          </p>
        </div>
      )}
    </div>
  );
};

export default SocialButton;
