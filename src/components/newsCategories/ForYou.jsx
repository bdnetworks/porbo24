import React from "react";
import { Link } from "react-router";
import { entertainment } from "../../data/entertainment";
const ForYou = () => {
  const apnerJonnoNews = entertainment.slice(0, 4);

  const renderTitle = (title, limit = 8) => {
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h1 className="text-[20px] font-bold leading-[1.45] text-[#111827]">
        {shortTitle}
        {isLong && "..."}
      </h1>
    );
  };

  return (
    <section className="mt-10 py-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        {/* section title */}
        <div className="mb-8 flex items-center gap-3 border-t-4 border-black/30 pt-4">
          <h2 className="text-[32px] font-bold text-[#111827]">আপনার জন্য</h2>
          <span className="text-[32px] text-[#07186b]">›</span>
        </div>

        {/* news grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {apnerJonnoNews.map((news, index) => (
            <Link
              key={news.id}
              to={`/news/entertainment/${news.id}`}
              className={`block bg-white pb-5 md:pb-0 md:pr-5 ${
                index !== apnerJonnoNews.length - 1
                  ? "border-b border-black/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={news.img}
                  alt={news.title}
                  className="h-[250px]  w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </div>

              {/* content */}
              <div className="pt-4">
                {renderTitle(news.title, 6)}

                <p className="mt-3 line-clamp-2 text-[16px] leading-8 text-[#6b7280]">
                  {news.description}
                </p>

                <span className="mt-4 block text-[15px] text-[#9ca3af]">
                  ২ ঘণ্টা আগে
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYou;
