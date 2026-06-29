import React from "react";
import { Link, useParams } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";

import { newsData } from "../data/newsData";
import { videoNewsData } from "../data/videoNewsData";
import { entertainment } from "../data/entertainment";
import { opinionData } from "../data/opinionaData";
import { othersNewsData } from "../data/othersNewsData";

const NewsDetails = () => {
  const { source, id } = useParams();
  const targetId = Number(id);

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
  const getRecentNews = (currentSource, currentId) => {
    switch (currentSource) {
      case "video":
        return videoNewsData.filter((item) => item.id !== currentId).slice(0, 10);
      case "entertainment":
        return entertainment.filter((item) => item.id !== currentId).slice(0, 10);
      case "opinion":
        return opinionData.filter((item) => item.id !== currentId).slice(0, 10);
      case "others": {
        const othersList = Object.values(othersNewsData).flat();
        return othersList.filter((item) => item.id !== currentId).slice(0, 10);
      }
      case "news":
      default:
        return newsData.filter((item) => item.id !== currentId).slice(0, 10);
    }
  };

  const recentNews = getRecentNews(source || "news", targetId);

  if (!news) {
    return (
      <div className="py-20 text-center text-2xl">
        News Not Found
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <div className="mb-8 text-sm">
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

          <div className="flex justify-between items-center border-b border-gray-300 pb-6 mb-8 flex-wrap gap-5">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full"
              />

              <div>
                <h3 className="font-semibold">
                  Mahbub Islam
                </h3>

                <p className="text-sm text-gray-500">
                  Staff Reporter
                </p>
              </div>

            </div>

            <div className="text-right">

              

              <div className="flex gap-3 mt-3 justify-end text-lg">

                <span className="border px-6 py-2 shadow-sm border-white  rounded-[0.8rem] cursor-pointer">
                    <FaFacebookF className="cursor-pointer hover:text-blue-600"/>
                </span>

                <span className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer">
                    <FaTwitter className="cursor-pointer hover:text-sky-500"/>
                </span>
                
                 <span className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer">
                <FaInstagram className="cursor-pointer hover:text-pink-500"/>
                  </span>

                 <span className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer">
                     <FaShareAlt className="cursor-pointer"/>
                </span>

              </div>

            </div>

          </div>

          {/* News Image */}

          <img
            src={news.img}
            alt={news.title}
            className="w-full h-[500px] object-cover rounded-lg mb-8"
          />

          {/* Description */}

          <div className="space-y-5 text-lg leading-9 text-gray-700">

            <p>{news.description}</p>

            

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
                className="flex gap-3 border-b pb-3"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-20 object-cover rounded"
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