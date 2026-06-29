import React from "react";
import { Link } from "react-router";
import { newsData } from "../../data/newsData";

const InternationalNews = () => {
  const internationalNews = newsData
    .filter((item) => item.category === "international")
    .slice(0, 6);

  if (internationalNews.length < 6) return null;

  const featuredNews = internationalNews[0];
  const middleNews = internationalNews.slice(1, 4);
  const rightNews = internationalNews.slice(4, 6);

  return (
    <section className="bg-white py-8 mt-10">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        {/* ===================== Section Header ===================== */}
        <div className="mb-6 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">আন্তর্জাতিক</h2>
          <span className="text-[30px] font-light text-[#07186b]">›</span>
        </div>

        {/* ===================== Main News Grid ===================== */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_1.15fr_0.75fr]">
          {/* =========================================================
              LEFT COLUMN - Featured big news
          ========================================================= */}
          <Link to={`/news/news/${featuredNews.id}`}>
            <article>
              <div className="mb-4 overflow-hidden">
                <img
                  src={featuredNews.img}
                  alt={featuredNews.title}
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <h3 className="mb-4 text-[26px] font-bold leading-[1.35] text-[#111827]">
                {featuredNews.title}
              </h3>

              {/* description পুরো না দেখিয়ে 3 line */}
              <p className="mb-4 line-clamp-3 text-[18px] leading-8 text-[#6b7280]">
                {featuredNews.description}
              </p>

              <span className="text-[16px] text-[#6b7280]">১২ মিনিট আগে</span>
            </article>
          </Link>

          {/* =========================================================
              MIDDLE COLUMN - 3 stacked news
          ========================================================= */}
          <div className="border-black/10 xl:border-l xl:border-r xl:px-6">
            {middleNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/news/${news.id}`}
                className={`flex flex-col gap-2 py-4 md:flex-row md:items-start ${
                  index !== middleNews.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                {/* text */}
                <div className="flex-1">
                  <h3 className="mb-3 text-[19px] font-bold leading-[1.45] text-[#111827]">
                    {news.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-[16px] leading-6 text-[#6b7280]">
                    {news.description}
                  </p>

                  <span className="text-[16px] text-[#6b7280]">
                    {index === 0
                      ? "২৫ মিনিট আগে"
                      : index === 1
                      ? "৪০ মিনিট আগে"
                      : "১ ঘণ্টা আগে"}
                  </span>
                </div>

                {/* image */}
                <div className="w-full overflow-hidden md:h-[170px] md:w-[220px] md:shrink-0">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* =========================================================
              RIGHT COLUMN - 2 small news
          ========================================================= */}
          <div>
            {rightNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/news/${news.id}`}
                className={`flex gap-4 py-4 ${
                  index !== rightNews.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-[21px] font-bold leading-[1.45] text-[#111827]">
                    {news.title}
                  </h3>

                  <span className="text-[16px] text-[#6b7280]">
                    {index === 0 ? "১ ঘণ্টা আগে" : "২ ঘণ্টা আগে"}
                  </span>
                </div>

                <div className="h-[110px] w-[150px] max-sm:w-[110px] shrink-0 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalNews;