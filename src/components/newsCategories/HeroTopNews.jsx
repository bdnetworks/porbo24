import React from "react";
import { newsData } from "../../data/newsData";
import { videoNewsData } from "../../data/videoNewsData";
import { Link } from "react-router";

const HeroTopNews = () => {
  const sportsNews = newsData
    .filter((item) => item.category === "sports")
    .slice(0, 5);

  if (sportsNews.length < 5) return null;

  const leadNews = sportsNews[0];
  const sideNews = videoNewsData.slice(0, 4);

  // কত word পর্যন্ত title দেখাবে
  const TITLE_WORD_LIMIT = 6;

  // title ছোট করে দেখানোর helper
  const getTruncatedTitle = (title, wordLimit = TITLE_WORD_LIMIT) => {
    const words = title.trim().split(" ");
    const isLong = words.length > wordLimit;

    const shortTitle = isLong
      ? words.slice(0, wordLimit).join(" ")
      : title;

    return {
      shortTitle,
      isLong,
    };
  };

  return (
    <section className="border-b border-[#0f766e] bg-[#fcd2d471]">
     
     {/* home page top banner */}
      <img src="./Hompagebanner.webp" alt="" />


      <div className="mx-auto px-4 py-5">
        <div className="grid grid-cols-1 gap-6  xl:grid-cols-[320px_1fr_520px]">
          {/* ================= LEFT: BIG TEXT NEWS ================= */}
          <Link
            to={`/news/news/${leadNews.id}`}
            className="flex flex-col justify-between border-b border-black/10 pb-4 lg:border-b-0 lg:pb-0"
          >
            <div>
              <h2 className="mb-4 text-[24px] font-bold leading-[1.45] text-[#111827]">
                {leadNews.title}
              </h2>

              <p className="mb-8 text-[16px] leading-8 text-[#4b5563]">
                {leadNews.description}
              </p>
            </div>

            <span className="text-[15px] text-[#6b7280]">২৫ মিনিট আগে</span>
          </Link>

          {/* ================= MIDDLE: BIG IMAGE ================= */}
          <article className="border-b border-black/10 pb-4 lg:border-b-0  lg:border-r lg:border-black/10 lg:px-6 lg:pb-0">
            <img
              src={leadNews.img}
              alt={leadNews.title}
              className="h-[250px] max-xl:h-[350px] max-md:h-[250px] w-full  object-cover"
            />
          </article>

          {/* ================= RIGHT: 4 SMALL NEWS ================= */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {sideNews.map((news, index) => {
              const { shortTitle, isLong } = getTruncatedTitle(news.title);

              return (
                <Link
                  key={news.id}
                  to={`/news/video/${news.id}`}
                  className={`flex items-start justify-between gap-4 ${
                    index < 2 ? "border-b border-black/10 pb-6" : ""
                  }`}
                >
                  {/* left text */}
                  <div className="flex-1">
                    
                    <h3 className="mb-2 text-[17px] font-bold leading-[1.45] text-[#111827]">
                      {shortTitle}
                      {isLong && "..."}
                    </h3>

                    <div>
                      <span className="text-[15px] text-[#6b7280]">
                        {news.publishedAt || "২ ঘণ্টা আগে"}
                      </span>
                    </div>
                  </div>

                  {/* right image */}
                  <div className="relative h-[96px] w-[108px] shrink-0 overflow-hidden rounded-md  cursor-pointer">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="h-full w-full object-cover cursor-pointer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-0.5 h-4 w-4"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTopNews;