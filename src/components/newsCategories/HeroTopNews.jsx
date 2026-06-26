import React from "react";
import { newsData } from "../../data/newsData";

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
    <section className="border-b border-[#0f766e] bg-[#d8e8e7]">
      <img src="./Hompagebanner.webp" alt="" />
      <div className="mx-auto px-4 py-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr_520px]">
          {/* ================= LEFT: BIG TEXT NEWS ================= */}
          <article className="flex flex-col justify-between border-b border-black/10 pb-4 lg:border-b-0 lg:pb-0">
            <div>
              <h2 className="mb-4 text-[24px] font-bold leading-[1.45] text-[#111827]">
                {leadNews.title}
              </h2>

              <p className="mb-8 text-[16px] leading-8 text-[#4b5563]">
                {leadNews.description}
              </p>
            </div>

            <span className="text-[15px] text-[#6b7280]">২৫ মিনিট আগে</span>
          </article>

          {/* ================= MIDDLE: BIG IMAGE ================= */}
          <article className="border-b border-black/10 pb-4 lg:border-b-0  lg:border-r lg:border-black/10 lg:px-6 lg:pb-0">
            <img
              src={leadNews.img}
              alt={leadNews.title}
              className="h-[300px] w-full object-cover"
            />
          </article>

          {/* ================= RIGHT: 4 SMALL NEWS ================= */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {sideNews.map((news, index) => {
              const { shortTitle, isLong } = getTruncatedTitle(news.title);

              return (
                <article
                  key={news.id}
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
                        ২ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>

                  {/* right image */}
                  <div className="h-[96px] w-[108px] shrink-0 overflow-hidden">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTopNews;