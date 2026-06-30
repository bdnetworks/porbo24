import React from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";

const SocialButton = () => {
  return (
    <div className="fixed left-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center rounded-r-md bg-[#FF0000] p-3 text-white shadow-lg transition-all duration-300"
      >
        <FaYoutube className="min-w-[24px] text-xl" />

        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-3 group-hover:max-w-[100px]">
          YouTube
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center rounded-r-md bg-[#1877F2] p-3 text-white shadow-lg transition-all duration-300"
      >
        <FaFacebookF className="min-w-[24px] text-xl" />

        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-3 group-hover:max-w-[100px]">
          Facebook
        </span>
      </a>
    </div>
  );
};

export default SocialButton;