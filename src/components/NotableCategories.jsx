import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const notableTopics = [
  "আজকের খেলা",
  "ইরানের যুদ্ধ",
  "বাংলাদেশ",
  "ব্রাজিলের খেলা",
  "বিশ্বকাপ",
  "রাজনীতি",
  "শেয়ারবাজার",
  "মেট্রোরেল",
  "নির্বাচন",
  "ক্রিকেট",
  "ফুটবল",
  "চ্যাম্পিয়নস ট্রফি",
  "আন্তর্জাতিক",
  "ঢাকার বৃষ্টি",
  "জ্বালানি তেল",
  "ভারত-বাংলাদেশ",
  "ট্রাম্প",
  "ফিলিস্তিন",
];

const NotableCategories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-b border-black/10  py-4 mt-10">
      <div className="mx-auto flex items-center gap-4 px-2 lg:px-0">
        {/* Left title */}
        <h2 className="shrink-0 text-[20px] max-sm:text-[1rem] font-bold text-[#111827]">
          আলোচিত বিষয়:
        </h2>

        {/* Scrollable topics */}
        <div className="relative min-w-0 flex-1">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-3 overflow-x-hidden scroll-smooth"
          >
            {notableTopics.map((topic, index) => (
              <button
                key={index}
                className="shrink-0 rounded-sm border border-black/10 bg-[#f5f5f5] px-4 max-sm:px-2 py-2 text-[15px] font-medium text-[#222] transition hover:bg-[#ececec]"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Right arrows */}
        <div className="flex shrink-0 items-center max-sm:gap-[0.5px]">
          <button
            onClick={scrollLeft}
            className="flex h-9 w-9 max-sm:w-6 items-center justify-center rounded-full border border-black/10 bg-white text-[#111] transition hover:bg-gray-100"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-9 w-9 max-sm:w-6 items-center justify-center rounded-full border border-black/10 bg-white text-[#111] transition hover:bg-gray-100"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotableCategories;