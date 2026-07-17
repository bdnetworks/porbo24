import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router";
// ১. লোকাল ফাইল ইম্পোর্ট বাদ দিয়ে Context এবং useContext ইম্পোর্ট করা হলো
import { NewsContext } from "../App"; 

const CategoryPage = () => {
  const { category } = useParams();
  const [expandedGroups, setExpandedGroups] = useState({});
  const [showAllOtherNews, setShowAllOtherNews] = useState(false);

  // ২. গ্লোবাল স্টেট থেকে newsData এবং loading স্টেট রিসিভ করা হলো
  const { newsData, loading } = useContext(NewsContext);

  // ৩. ডেটা যখন লোড হচ্ছে তখনকার জন্য একটি সেফটি লোডার স্ক্রিন
  if (loading && newsData.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">নিউজ লোড হচ্ছে...</p>
      </div>
    );
  }

  const categoryNews = newsData.filter(
    (item) => item.category === category
  );

  const groupedNews = categoryNews.reduce((acc, news) => {
    const key = news.subCategory || "others";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(news);

    return acc;
  }, {});

  const bigGroups = Object.entries(groupedNews).filter(
    ([, news]) => news.length >= 6
  );

  const smallGroups = Object.entries(groupedNews).filter(
    ([, news]) => news.length < 6
  );

  const otherNews = smallGroups.flatMap(([, news]) => news);

  const toggleGroup = (subCategory) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 pt-4">
      {/* Breadcrumb */}
      <div className="mb-8 flex justify-start text-md text-gray-500 font-bold">
        <Link to="/" className="hover:text-[#07186b] font-bold">
          Home
        </Link>

        <span className="mx-2">{">"}</span>

        <span className="font-bold  capitalize text-[#2740c0]">
          {category}
        </span>
      </div>

      {/* ================= BIG SUB CATEGORY ================= */}

      {bigGroups.map(([subCategory, newsList]) => {
        const firstSix = newsList.slice(0, 6);
        const extraNews = newsList.slice(6);
        const isExpanded = expandedGroups[subCategory];

        const heroNews = firstSix[0];
        const sideNews = firstSix.slice(1, 3);
        const bottomNews = firstSix.slice(3, 6);

        // সেফটি চেক: যদি কোনো কারণে গ্রুপে এলিমেন্ট না থাকে
        if (!heroNews) return null;

        return (
          <section key={subCategory} className="mb-16">
            <div className="mb-6 flex items-center justify-between  pb-2">
              <h2 className="text-2xl font-bold capitalize ">
                {subCategory}
              </h2>
            </div>

            {/* Top Row */}

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Hero */}

              <Link 
              to={`/news/news/${heroNews.id}`}
              className="group relative overflow-hidden border-b border-black/10  lg:border-b-0 lg:border-r lg:pb-0 ">
                <img
                  src={heroNews.img}
                  alt={heroNews.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <p className="mb-2 text-sm">
                    {new Date().toLocaleDateString()}
                  </p>

                  <h3 className="line-clamp-2 text-2xl font-bold">
                    {heroNews.title}
                  </h3>
                </div>
              </Link>

              {/* Side News */}

              <div className="grid gap-6 sm:grid-cols-2">
                {sideNews.map((news) => (
                  <Link 
                  key={news.id}
                  to={`/news/news/${news.id}`}
                  className="overflow-hidden border-b border-black/10 pb-5">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="h-[260px] w-full object-cover"
                    />

                    <div className="p-5">
                      <p className="mb-2 text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </p>

                      <h3 className="line-clamp-2 text-xl font-bold hover:text-[#07186b]">
                        {news.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-gray-600">
                        {news.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Row */}

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bottomNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/news/${news.id}`}
                  className="overflow-hidden border-b border-r border-black/10 pb-4 pr-4"
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-[180px] w-full object-cover"
                  />

                  <div className="p-4">
                    <p className="mb-2 text-xs text-gray-500">
                      {new Date().toLocaleDateString()}
                    </p>

                    <h3 className="line-clamp-2 font-bold hover:text-[#07186b]">
                      {news.title}
                    </h3>

                    <p className="mt-2 line-clamp-4 text-sm text-gray-600">
                      {news.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {extraNews.length > 0 && (
              <div className="mt-8">
                {isExpanded && (
                  <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {extraNews.map((news) => (
                      <Link
                       key={news.id}
                       to={`/news/news/${news.id}`}
                       className="overflow-hidden border-b border-r border-black/10 pb-4 pr-4">
                        <img
                          src={news.img}
                          alt={news.title}
                          className="h-[180px] w-full object-cover"
                        />

                        <div className="p-4">
                          <h3 className="line-clamp-2 font-bold hover:text-[#07186b]">
                            {news.title}
                          </h3>

                          <p className="mt-2 line-clamp-4 text-sm text-gray-600">
                            {news.description}
                          </p>

                           <p className="mb-2 text-xs text-gray-500">
                            {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {newsList.length > 6 && (
                  <div className="text-center">
                    <button
                      onClick={() => toggleGroup(subCategory)}
                      className="px-6 py-3 text-black underline transition hover:text-red-400 hover:opacity-90"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        );
      })}

      {/* ================= OTHERS ================= */}

      {otherNews.length > 0 && (
        <section>
          <div className="mb-6  pb-2">
            <h2 className="text-2xl font-bold">
              অন্যান্য
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {(showAllOtherNews ? otherNews : otherNews.slice(0, 10)).map((news) => (
              <Link
                key={news.id}
                to={`/news/news/${news.id}`}
                className="overflow-hidden border-b border-r border-black/10 pb-4 pr-4 transition hover:-translate-y-1"
              >
                <img
                  src={news.img}
                  alt={news.title}
                  className="h-[170px] w-full object-cover"
                />

                <div className="p-4">
                  <p className="mb-2 text-xs text-gray-500">
                    {new Date().toLocaleDateString()}
                  </p>

                  <h3 className="line-clamp-2 font-bold hover:text-[#07186b]">
                    {news.title}
                  </h3>

                  <p className="mt-2 line-clamp-4 text-sm text-gray-600">
                    {news.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {otherNews.length > 10 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllOtherNews((prev) => !prev)}
                className="px-6 py-3 text-black underline transition hover:text-red-400 hover:opacity-90"
              >
                {showAllOtherNews ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CategoryPage;
