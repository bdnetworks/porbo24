import React, { useContext } from "react";
import { Link } from "react-router";
// ১. লোকাল ফাইল ইম্পোর্ট বাদ দিয়ে Context এবং useContext ইম্পোর্ট করা হলো
import { NewsContext } from "../App"; 

const ApnerJonno = () => {
  // ২. গ্লোবাল স্টেট থেকে newsData এবং loading স্টেট রিসিভ করা হলো
  const { newsData, loading } = useContext(NewsContext);

  // ৩. ডেটা যখন লোড হচ্ছে তখনকার জন্য লোডিং সেফটি চেক
  if (loading && newsData.length === 0) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">লোড হচ্ছে...</p>
      </div>
    );
  }

  // ৪. গুগল শীটের ডেটা থেকে আপনার জন্য (ফর ইউ) ক্যাটাগরি ফিল্টার করা হলো
  // (শীটে ক্যাটাগরির নাম 'for-you' বা যা দিয়েছেন সেই অনুযায়ী ম্যাচ করে নেবেন)
  const apnerJonnoNews = newsData.filter(
    (item) => item.category === "for-you"
  );

  const renderTitle = (title, limit = 8) => {
    if (!title) return null;
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
      <div className="mx-auto max-w-[1300px] px-4 lg:px-6">
        {/* section title */}
        <div className="mb-8 flex items-center gap-3  pt-4">
          <h2 className="text-[32px] font-bold text-[#111827]">আপনার জন্য</h2>
          <span className="text-[32px] text-[#07186b]">›</span>
        </div>

        {/* news grid */}
        <div className="grid grid-cols-1 gap-8 max-xl:gap-6 md:grid-cols-4">
          {apnerJonnoNews.map((news) => (
            <Link 
              key={news.id} 
              to={`/news/news/${news.id}`} 
              className="block border-b border-r border-black/10 pb-5 pr-5"
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
                  {news.timeAgo || "২ ঘণ্টা আগে"} 
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApnerJonno;
