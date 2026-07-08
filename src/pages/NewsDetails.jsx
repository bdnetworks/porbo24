import React, { useState } from "react";
import { Link, useParams } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareAlt,
  FaBookmark,
  FaTimes,
  FaRegNewspaper,
  FaRegClock,
} from "react-icons/fa";

import { newsData } from "../data/newsData";
import { videoNewsData } from "../data/videoNewsData";
import { entertainment } from "../data/entertainment";
import { opinionData } from "../data/opinionaData";
import { othersNewsData } from "../data/othersNewsData";
import ImgdownloadBtn from "../components/ImgdownloadBtn";

const NewsDetails = () => {
  const { source, id } = useParams();
  const targetId = Number(id);
  const [showImageAd, setShowImageAd] = useState(true);

  const getNewsBySource = (currentSource, currentId) => {
    switch (currentSource) {
      case "video":
        return videoNewsData.find((item) => item.id === currentId) || null;
      case "entertainment":
        return entertainment.find((item) => item.id === currentId) || null;
      case "opinion":
        return opinionData.find((item) => item.id === currentId) || null;
      case "others": {
        const othersList = Object.values(othersNewsData).flat();
        return othersList.find((item) => item.id === currentId) || null;
      }
      case "news":
      default:
        return newsData.find((item) => item.id === currentId) || null;
    }
  };

  const news = getNewsBySource(source || "news", targetId);

  const getNewsListBySource = (currentSource) => {
    switch (currentSource) {
      case "video":
        return videoNewsData;
      case "entertainment":
        return entertainment;
      case "opinion":
        return opinionData;
      case "others":
        return Object.values(othersNewsData).flat();
      case "news":
      default:
        return newsData;
    }
  };

  const getRecentNews = (currentSource, currentId) => {
    return getNewsListBySource(currentSource)
      .filter((item) => item.id !== currentId)
      .slice(0, 10);
  };

  const recentNews = getRecentNews(source || "news", targetId);

  if (!news) {
    return (
      <div className="py-20 text-center text-2xl">
        News Not Found
      </div>
    );
  }

  const currentSource = source || "news";
  const currentSubCategory = news.subCategory || news.category;
  const categoryLabels = {
    desh: "দেশ",
    sports: "খেলাধুলা",
    international: "আন্তর্জাতিক",
    entertainment: "বিনোদন",
    technology: "প্রযুক্তি",
    economy: "অর্থনীতি",
    video: "ভিডিও",
    opinion: "মতামত",
  };
  const subCategoryLabels = {
    football: "ফুটবল",
    criket: "ক্রিকেট",
    cricket: "ক্রিকেট",
    kabadi: "কাবাডি",
    hokkey: "হকি",
    rajniti: "রাজনীতি",
    ancholik: "আঞ্চলিক",
    ancolik: "আঞ্চলিক",
    onnano: "অন্যান্য",
    "iran-america": "ইরান-আমেরিকা",
    europe: "ইউরোপ",
    robot: "রোবট",
  };
  const readableSubCategory =
    subCategoryLabels[currentSubCategory] ||
    categoryLabels[currentSubCategory] ||
    currentSubCategory;
  const publishedTime = news.publishedAt || "1:10 pm, july/23/2026";
  const imageCaption =
    news.caption || "ছবি: পরব২৪";
  const tagItems = news.tags || [
    "আর্জেন্টিনা ফুটবল দল",
    "মেসি",
    "ফিফা বিশ্বকাপ ২০২৬",
    "বিশ্বকাপ ফুটবল ২০২৬",
  ];
  const relatedNews = getNewsListBySource(currentSource)
    .filter(
      (item) =>
        item.id !== news.id &&
        (item.subCategory || item.category) === currentSubCategory
    )
    .slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <div className="mb-8 text-md">
        <Link to="/" className="text-blue-600">
          Home
        </Link>

        <span className="mx-2">{">"}</span>

        <span>{news.category}</span>

        <span className="mx-2">{">"}</span>

        <span className="font-semibold">{news.title}</span>
      </div>

      {/* Main Layout */}

      <div className="grid lg:grid-cols-5 gap-10">


        {/* ================= left Content ================= */}

        <main className="lg:col-span-4">

          <h1 className="text-4xl font-bold mb-6">
            {news.title}
          </h1>

          {/* Writer */}

          <div className="flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5 mb-8">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100"
                alt="Mahbub Islam"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-100"
              />

              <div>
                <h3 className="text-base font-bold text-gray-700">
                  Mahbub Islam
                </h3>

                <p className="mt-0.5 text-sm text-gray-500">
                  Staff Reporter
                </p>

                <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-100 px-1 py-1 text-xs font-medium text-gray-600">
                  <FaRegClock className="text-gray-400" />
                  <span>{publishedTime}</span>
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                aria-label="Share on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1877f2] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white"
              >
                <FaFacebookF />
              </button>

              <button
                type="button"
                aria-label="Share on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1da1f2] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1da1f2] hover:bg-[#1da1f2] hover:text-white"
              >
                <FaTwitter />
              </button>

              <button
                type="button"
                aria-label="Share on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#dd2a7b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#dd2a7b] hover:bg-[#dd2a7b] hover:text-white"
              >
                <FaInstagram />
              </button>

              <button
                type="button"
                aria-label="Share news"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#07186b] hover:bg-[#07186b] hover:text-white"
              >
                <FaShareAlt />
              </button>

              <button
                type="button"
                aria-label="Save news"
                className="ml-1 flex h-10 items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 text-sm font-semibold text-red-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-600 hover:text-white"
              >
                <FaBookmark />
                <span>সেভ</span>
              </button>

            </div>

          </div>

          {/* News Image */}

          <img
            src={news.img}
            alt={news.title}
            className="w-full aspect-[1900/1000] object-cover"
          />

          {showImageAd && (
            <div className="relative h-[100px] py-1 w-full overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80"
                alt="Advertisement"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setShowImageAd(false)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                aria-label="Close advertisement"
              >
                <FaTimes />
              </button>
            </div>
          )}

          <p className="border-b border-gray-300 pb-4 pt-3 text-sm text-gray-500">
            {imageCaption}
          </p>

          <div className="flex justify-center">
            <ImgdownloadBtn news={news} />
          </div>
          {/* Description */}

          <div className="space-y-5 text-lg leading-9 text-gray-700">

            <p>{news.description}</p>

            

          </div>

          <a
            href="https://news.google.com/publications/CAAqBwgKMOfGlwswmfCuAw?hl=bn&gl=BD&ceid=BD%3Abn"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3  border-b border-gray-200 px-4 py-3  font-semibold text-[#1c3de2]  transition hover:border-[#07186b] hover:text-red-600"
          >
            <FaRegNewspaper className="text-[2rem]"/>
            পর্ব২৪ খবর পেতে গুগল নিউজ চ্যানেল ফলো করুন
          </a>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold">
              {readableSubCategory} থেকে আরও পড়ুন
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {tagItems.map((tag) => (
                <Link
                  key={tag}
                  to={`/topic/${encodeURIComponent(tag)}`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-600"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Comment */}

          <div className="mt-20">

            <h2 className="text-2xl font-bold mb-6 underline decoration-red-300 decoration-2">
              পাঠকের মতামত
            </h2>
             <div className="p-4  rounded-[1rem] border-gray-300  border shadow-sm">
            <input
              type="text"
              placeholder="আপনার নাম"
              className="w-full border border-gray-300 p-3 rounded mb-4 outline-none"
            />

            <textarea
              rows={6}
              placeholder="আপনার মতামত লিখুন..."
              className="w-full border border-gray-300 p-3 rounded outline-none"
            />

            <button className="mt-5 bg-[#07186b] text-white px-8 py-3 rounded">
              মতামত পাঠান
            </button>
            
            </div>
          </div>

          {relatedNews.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">
                {readableSubCategory} এর আরও খবর
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${currentSource}/${item.id}`}
                    className="group block border-b border-gray-200 pb-4"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="mb-3 aspect-[4/3] w-full object-cover"
                    />
                    <h3 className="line-clamp-3 text-base font-semibold leading-6 ">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </main>

        
        {/* ================= right Sidebar ================= */}

        <aside className="lg:col-span-1">

          {/* Advertisement */}

          <div className="h-[250px] bg-[#07186b] rounded mb-8 flex items-center justify-center text-white text-xl font-bold">
            Advertisement
          </div>

          <h2 className="text-xl font-bold mb-4">
            সর্বশেষ সংবাদ
          </h2>

          <div className="space-y-4">

            {recentNews.map((item) => (

              <Link
                key={item.id}
                to={`/news/${source || "news"}/${item.id}`}
                className="flex justify-between gap-4 border-b pb-3"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 w-24 shrink-0 rounded object-cover"
                />

                <h3 className="text-sm font-medium line-clamp-3 hover:text-red-500">
                  {item.title}
                </h3>

              </Link>

            ))}

          </div>

        </aside>

      </div>

    </div>
  );
};

export default NewsDetails;
