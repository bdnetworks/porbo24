import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router";
import { FiChevronRight, FiEdit3 } from "react-icons/fi";
// ১. লোকাল ইম্পোর্ট বাদ দিয়ে Context ইম্পোর্ট করা হলো
import { NewsContext } from "../App";

const ApnerOpnion = () => {
  // ২. গ্লোবাল স্টেট থেকে ডেটা এবং লোডিং রিসিভ করা হলো
  const { newsData, loading } = useContext(NewsContext);
  const [selectedNews, setSelectedNews] = useState(null);

  // ৩. মতামত (opinion) ক্যাটাগরির ডেটা ফিল্টার করা হলো
  const sideNews = newsData.filter((item) => item.category === "opinion");

  // ৪. ডেটা লোড হওয়ার পর প্রথম আইটেমটিকে ডিফল্ট সিলেক্টেড হিসেবে সেট করার জন্য
  useEffect(() => {
    if (sideNews.length > 0 && !selectedNews) {
      setSelectedNews(sideNews[0]);
    }
  }, [newsData, sideNews, selectedNews]);

  // ৫. লোডিং সেফটি চেক
  if (loading && sideNews.length === 0) {
    return (
      <div className="flex h-[40vh] items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">লোড হচ্ছে...</p>
      </div>
    );
  }

  // ডেটা না থাকলে সেকশন হাইড বা মেসেজ দেখানোর জন্য সেফটি গার্ড
  if (sideNews.length === 0) return null;

  // কারেন্ট সিলেক্টেড ডেটা অথবা সেফটি ফলব্যাক
  const currentNews = selectedNews || sideNews[0];
  const selectedDescription = currentNews?.description || currentNews?.title || "";

  const renderTitle = (title, limit = 7, className = "") => {
    if (!title) return null;
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h3 className={className}>
        {shortTitle}
        {isLong && "..."}
      </h3>
    );
  };

  return (
    <section className="bg-white py-8 mt-10">
      <div className="mx-auto max-w-[1300px] px-4 lg:px-6">
        {/* =================== Section Header =================== */}
        <div className="mb-8 flex items-center gap-3  pt-4">
          <h2 className="text-[32px] font-bold text-[#111827]">মতামত</h2>
          <FiChevronRight className="text-[30px] text-red-600" />
        </div>

        {/* =================== Main Layout =================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[460px_1fr]">
          {/* ================= LEFT FEATURED CARD ================= */}
          <article className="block border border-black/20 bg-white px-8 py-8">
            {/* top title blocks */}
            <div className="mb-8">
              <div className="inline-block bg-[#001b5e] px-4 py-2 text-[20px] font-bold leading-tight text-[#ffcc00]">
                মতামত <span className="text-[#ffcc00]">•</span>{" "}
                <span className="text-white">{currentNews?.title}</span>
              </div>
            </div>

            {/* description */}
            <p className="mb-14 max-w-[290px] text-[18px] leading-10 text-[#4b5563]">
              {selectedDescription}
            </p>

            {/* small gray line */}
            <div className="mb-4 h-[4px] w-12 bg-[#d1d5db]"></div>

            {/* author */}
            <p className="text-[18px] text-[#111827]">
              <span className="font-semibold">লেখা:</span>{" "}
              <span className="text-[#6b7280]">{currentNews?.author || currentNews?.authorName}</span>
            </p>
          </article>

          {/* ================= RIGHT LIST ================= */}
          <div className="flex flex-col max-h-[100vh] overflow-y-scroll ">
            {sideNews.map((item, index) => {
              const isSelected = currentNews?.id === item.id;
              // শীটে ফিল্ডের নাম authorImage বা img বা যা আছে সেই অনুযায়ী হ্যান্ডেল করার ব্যবস্থা
              const imageSrc = item.authorImage || item.img; 

              return (
                <article
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedNews(item)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedNews(item);
                    }
                  }}
                  className={`flex gap-6 py-6 ${
                    index !== sideNews.length - 1 ? "border-b border-black/15" : ""
                  } cursor-pointer transition-colors hover:bg-gray-50 ${
                    isSelected ? "bg-gray-50" : ""
                  }`}
                >
                  {/* author image / fallback icon */}
                  <div className="shrink-0">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={item.author}
                        className="h-28 w-28 max-sm:w-22 max-sm:h-22 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-28 max-sm:h-22 w-28 max-sm:w-22  items-center justify-center rounded-full bg-[#e5e7eb] text-[#c4c4c4]">
                        <FiEdit3 className="text-[42px]" />
                      </div>
                    )}
                  </div>

                  {/* content */}
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap max-sm:flex-col items-center max-sm:items-start gap-2">
                      <span className="text-[18px]  font-bold text-red-600">
                        {item.label || "কলাম"}
                      </span>
                      <span className="text-[19px] leading-none text-[#9ca3af]">
                        •
                      </span>
                      <div className="min-w-0 flex-1">
                        {renderTitle(
                          item.title,
                          8,
                          "text-[22px] font-medium leading-[1.5] text-[#111827]"
                        )}
                      </div>
                    </div>

                    {/* ছোট underline */}
                    <div className="mb-4 h-[4px] w-11 bg-[#e5e7eb]"></div>

                    {/* author */}
                    <p className="text-[16px] text-[#111827]">
                      <span className="font-semibold">লেখা:</span>{" "}
                      <span className="text-[#6b7280]">{item.author || item.authorName}</span>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* comment box */}
        <div className="mt-18">
          <b className="underline decoration-2 underline-offset-6 text-[1.4rem] ml-4 ">আপনার মতামত লিখুন</b>
          <div className="my-2 p-6 py-8 border-2 border-gray-300 rounded-[1rem]">
            <form className="flex flex-col gap-4" action="">
              <input type="text" placeholder="আপনার নাম" className="border border-gray-300 p-2 py-4 rounded-[0.5rem]"/>
              <input type="text" placeholder="আপনার ভুমিকা " className="border border-gray-300 p-2 py-4 rounded-[0.5rem]"/>
              <input type="text" placeholder="মতামতের মূল প্রেক্ষাপট" className="border border-gray-300 p-2 py-4 rounded-[0.5rem]"/>
              <textarea 
                className="border border-gray-300 p-2 rounded-[0.5rem] min-h-[200px]"
                name="text" 
                placeholder="আপনার পুরো মতামত এর ব্যাখ্যা..."
              />
              <button className="bg-[#07186b] w-[200px] p-3 text-white rounded-[0.7rem]" type="submit">
                জমা দিন
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApnerOpnion;
