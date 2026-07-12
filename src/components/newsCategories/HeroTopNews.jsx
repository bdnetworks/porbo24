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
  const sideNews = sportsNews.slice(1, 5);

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
    <section className="border-b border-[#0f766e] bg-[#fcd2d471] dark:border-slate-700 dark:bg-slate-900">
     
     {/* home page top banner */}
      <img src="./Hompagebanner.webp" alt="" />


      <div className="mx-auto px-4 py-5">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_520px]">
          {/* ================= LEFT: BIG IMAGE NEWS ================= */}
          <Link
            to={`/news/news/${leadNews.id}`}
            className="relative h-[350px] overflow-hidden border-b border-black/10 dark:border-slate-700 lg:h-[440px] lg:border-b-0"
          >
            <img src={leadNews.img} alt={leadNews.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h2 className="text-[24px] font-bold leading-[1.45] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:text-[30px]">
                {leadNews.title}
              </h2>
              <span className="mt-3 block text-[15px] text-slate-200">
                {leadNews.publishedAt || "২৫ মিনিট আগে"}
              </span>
            </div>
          </Link>


          {/* ================= RIGHT: 4 SMALL video NEWS ================= */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {sideNews.map((news, index) => {
              const { shortTitle, isLong } = getTruncatedTitle(news.title);

              return (
                <Link
                  key={news.id}
                  to={`/news/video/${news.id}`}
                  className={`flex flex-col ${
                    index < 2 ? "border-b border-black/10 pb-4 dark:border-slate-700" : ""
                  }`}
                >
                  {/* title and date below the image */}
                  <div className="order-2 pt-3">
                    
                    <h3 className="mb-2 text-[17px] font-bold leading-[1.45] text-[#111827] dark:text-slate-100">
                      {shortTitle}
                      {isLong && "..."}
                    </h3>

                    <div>
                      <span className="text-sm text-[#6b7280] dark:text-slate-400">
                        {news.publishedAt || "২ ঘণ্টা আগে"}
                      </span>
                    </div>
                  </div>

                  {/* image */}
                  <div className="relative order-1 h-[130px] w-full overflow-hidden rounded-md cursor-pointer sm:h-[135px]">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="h-full w-full object-cover cursor-pointer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      {/* <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-0.5 h-4 w-4"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div> */}
                    </div>
                    <div className="hidden absolute inset-x-0 bottom-0 px-3 pb-3 pt-8">
                      <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.45] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {shortTitle}
                        {isLong && "..."}
                      </h3>
                      <span className="hidden">
                        {news.publishedAt || "à§¨ à¦˜à¦£à§à¦Ÿà¦¾ à¦†à¦—à§‡"}
                      </span>
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
