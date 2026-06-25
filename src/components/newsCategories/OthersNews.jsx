import React from "react";
import { othersNewsData } from "../../data/othersNewsData";

const OthersNews = () => {
  const categoryLabels = {
    biggan: "বিজ্ঞান",
    kisi: "কৃষি",
    sikha: "শিক্ষা",
    chakri: "চাকরি",
    onnoAlo: "অন্য আলো",
    nagorikSongbad: "নাগরিক সংবাদ",
    banijjik: "বাণিজ্যিক",
    technology: "প্রযুক্তি",
  };

  const categoryOrder = [
    "biggan",
    "kisi",
    "sikha",
    "chakri",
    "onnoAlo",
    "nagorikSongbad",
    "banijjik",
    "technology",
  ];

  const renderTitle = (title, limit = 7, className = "") => {
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h3
        className={`transition-all font-bold duration-200 group-hover:underline group-hover:decoration-[1px] group-hover:underline-offset-4 ${className}`}
      >
        {shortTitle}
        {isLong && (
          <>
            {"... "}
            <button className="border-none bg-transparent p-0 text-[14px] font-medium text-red-600">
              See more
            </button>
          </>
        )}
      </h3>
    );
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        {/* page title */}
        <div className="mb-8 flex items-center gap-3 border-t-4 border-black/30 pt-4">
          <h2 className="text-[32px] font-bold text-[#111827]">অন্যান্য</h2>
          <span className="text-[32px] text-red-600">›</span>
        </div>

        {/* 8 category cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categoryOrder.map((categoryKey) => {
            const newsList = othersNewsData[categoryKey];
            const firstNews = newsList[0];
            const restNews = newsList.slice(1, 4);

            return (
              <section
                key={categoryKey}
                className="group bg-white"
              >
                {/* category title */}
                <div className="mb-4">
                  <h3 className="text-[24px] font-bold text-[#111827]">
                    {categoryLabels[categoryKey]}
                  </h3>
                </div>

                {/* first / featured news */}
                <article className="group mb-5">
                  <div className="overflow-hidden">
                    <img
                      src={firstNews.img}
                      alt={firstNews.title}
                      className="h-[180px] w-full object-cover transition duration-300 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="pt-3">
                    {renderTitle(
                      firstNews.title,
                      7,
                      "text-[22px] font-bold leading-[1.45] text-[#111827]"
                    )}
                  </div>
                </article>

                {/* other 3 text news */}
                <div className="space-y-4">
                  {restNews.map((news) => (
                    <article
                      key={news.id}
                      className="group"
                    >
                      {renderTitle(
                        news.title,
                        8,
                        "text-[17px] font-medium leading-[1.7] text-[#111827]"
                      )}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OthersNews;