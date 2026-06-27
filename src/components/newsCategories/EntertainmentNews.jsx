import React from "react";
import { entertainment } from "../../data/entertainment";

const EntertainmentNews = () => {
  const entertainmentNews = entertainment
    .filter((item) => item.category === "entertainment")
    .slice(0, 7);

  if (entertainmentNews.length < 7) return null;

  // middle বড় card
  const featuredNews = entertainmentNews[0];

  // left 3টা
  const leftNews = entertainmentNews.slice(1, 4);

  // right 3টা
  const rightNews = entertainmentNews.slice(4, 7);

  // title ছোট করার helper
  const renderTitle = (title, limit = 7) => {
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h3 className="text-[18px] font-bold leading-[1.45] text-[#161d2cfc] lg:text-[19px]">
        {shortTitle}
        {isLong && "..."}
      </h3>
    );
  };

  return (
    <section className=" py-8">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        {/* ===================== Section Header ===================== */}
        <div className="mb-8 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">বিনোদন</h2>
          <span className="text-[32px] font-light text-[#07186b]">›</span>
        </div>

        {/* ===================== Main Grid ===================== */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.05fr_1fr]">
          {/* =========================================================
              LEFT COLUMN
          ========================================================= */}
          <div className="space-y-6">
            {leftNews.map((news, index) => (
              <article
                key={news.id}
                className={`flex items-start gap-4 ${
                  index !== leftNews.length - 1
                    ? "border-b border-black/10 pb-5"
                    : ""
                }`}
              >
                {/* text */}
                <div className="flex-1">
                  {renderTitle(news.title, 6)}

                  <p className="mt-3 line-clamp-2 text-[16px] leading-7 text-[#6b7280]">
                    {news.description}
                  </p>

                  <span className="mt-3 block text-[15px] text-[#6b7280]">
                    {index === 0
                      ? "৫৯ মিনিট আগে"
                      : index === 1
                      ? "২ ঘণ্টা আগে"
                      : "৩ ঘণ্টা আগে"}
                  </span>
                </div>

                {/* image */}
                <div className="h-[132px] w-[200px] max-sm:w-[110px] shrink-0 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* =========================================================
              MIDDLE FEATURED BIG NEWS
          ========================================================= */}
          <article className="border-black/10 xl:border-l xl:border-r xl:px-8">
            <div className="overflow-hidden">
              <img
                src={featuredNews.img}
                alt={featuredNews.title}
                className="h-[320px] w-full object-cover lg:h-[360px]"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-[30px] font-bold leading-[1.35] text-[#111827]">
                {featuredNews.title}
              </h3>

              <p className="mt-4 line-clamp-2 text-[18px] leading-8 text-[#6b7280]">
                {featuredNews.description}
              </p>

              <span className="mt-4 block text-[16px] text-[#6b7280]">
                ৪৯ মিনিট আগে
              </span>
            </div>
          </article>

          {/* =========================================================
              RIGHT COLUMN
          ========================================================= */}
          <div className="space-y-6">
            {rightNews.map((news, index) => (
              <article
                key={news.id}
                className={`flex items-start gap-4 ${
                  index !== rightNews.length - 1
                    ? "border-b border-black/10 pb-5"
                    : ""
                }`}
              >
                {/* text */}
                <div className="flex-1">
                  {renderTitle(news.title, 6)}

                  <p className="mt-3 line-clamp-2 text-[16px] leading-7 text-[#6b7280] cursor-pointer">
                    {news.description}
                  </p>

                  <span className="mt-3 block text-[15px] text-[#6b7280]">
                    {index === 0
                      ? "৫ ঘণ্টা আগে"
                      : index === 1
                      ? "৬ ঘণ্টা আগে"
                      : "৭ ঘণ্টা আগে"}
                  </span>
                </div>

                {/* image */}
                <div className="h-[132px] w-[200px] max-sm:w-[110px] shrink-0 overflow-hidden cursor-pointer">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentNews;