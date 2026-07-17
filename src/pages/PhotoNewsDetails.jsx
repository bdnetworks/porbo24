import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import { FaFacebookF, FaShareAlt, FaYoutube } from "react-icons/fa";
// ১. লোকাল ইম্পোর্ট বাদ দিয়ে Context ইম্পোর্ট করা হলো
import { NewsContext } from "../App"; 

const PUBLISH_TIME = "প্রকাশ: ৩ জুলাই ২০২৬, ১২:০০";

const PhotoNewsDetails = () => {
  const { id } = useParams();
  const targetId = Number(id);

  // ২. গলোবাল স্টেট থেকে newsData এবং loading স্টেট নেওয়া হলো
  const { newsData, loading } = useContext(NewsContext);

  // ৩. সেফটি লোডিং স্ক্রিন
  if (loading && newsData.length === 0) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">ফটো নিউজ লোড হচ্ছে...</p>
      </div>
    );
  }

  // ৪. লোকাল photoData এর বদলে newsData থেকে নির্দিষ্ট আইডি খোঁজা হচ্ছে
  const news = newsData.find((item) => Number(item.id) === targetId);

  if (!news) {
    return (
      <div className="mx-auto max-w-[1280px] px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Photo News Not Found</h1>
        <Link
          to="/"
          className="mt-5 inline-flex rounded bg-[#07186b] px-5 py-2 font-semibold text-white"
        >
          হোমে ফিরুন
        </Link>
      </div>
    );
  }

  // ৫. 'আরও ফটো নিউজ' এর জন্য একই ক্যাটাগরির ডেটা ফিল্টার (যদি এপিআই-তে category: "photo" বা অন্য কিছু থাকে)
  // এখানে আপনার আগের লজিক অনুযায়ী কারেন্ট আইডি বাদে বাকি ডেটা স্লাইস করা হয়েছে
  const morePhotoNews = newsData
    .filter((item) => Number(item.id) !== news.id && item.category === "photo") // আপনার ক্যাটাগরি নাম দিলে ভালো হয়
    .slice(0, 6);

  // যদি আপনার গুগল শীটে imagesWithDesc ফিল্ডটি স্ট্রিং আকারে থাকে, তবে সেটাকে JSON.parse(news.imagesWithDesc) করে নিতে হতে পারে।
  // যদি সরাসরি অবজেক্ট অ্যারে হিসেবে আসে তবে নিচের ম্যাপ কোড পারফেক্ট কাজ করবে।
  let parsedImagesWithDesc = [];
  try {
    parsedImagesWithDesc = typeof news.imagesWithDesc === "string" 
      ? JSON.parse(news.imagesWithDesc) 
      : news.imagesWithDesc || [];
  } catch (e) {
    console.error("Error parsing imagesWithDesc JSON:", e);
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-8">
      <div className="mb-8 text-sm">
        <Link to="/" className="text-blue-600">
          Home
        </Link>

        <span className="mx-2">{">"}</span>

        <span>ছবি</span>

        <span className="mx-2">{">"}</span>

        <span className="font-semibold">{news.title}</span>
      </div>

      <div className="mx-auto max-w-[820px]">
        <h1 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
          {news.title}
        </h1>

        <p className="mt-5 text-lg leading-9 text-gray-700">
          {news.mainDescription || news.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-300 pb-6">
          <p className="text-sm font-medium text-gray-500">{news.date || PUBLISH_TIME}</p>

          <div className="flex gap-3 text-lg">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer"
            >
              <FaYoutube className="cursor-pointer hover:text-red-600" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer"
            >
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            </a>
            <button
              type="button"
              aria-label="Share"
              className="border px-6 py-2 shadow-sm border-white rounded-[0.8rem] cursor-pointer"
            >
              <FaShareAlt className="cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {parsedImagesWithDesc?.map((imageItem, index) => (
            <figure key={`${imageItem.img}-${index}`}>
              <img
                src={imageItem.img}
                alt={imageItem.shortDesc}
                className="aspect-[16/9] max-h-[460px] w-full rounded object-cover shadow-sm"
              />
              <figcaption className="mt-3 border-l-4 border-[#07186b] pl-4 text-base leading-8 text-gray-700">
                {imageItem.shortDesc}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <section className="mt-14 border-t border-gray-200 pt-8">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-2xl font-bold text-[#111827]">আরও ফটো নিউজ</h2>
          <span className="text-3xl font-light text-[#304bd1]">›</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {morePhotoNews.map((item) => {
            let itemImages = [];
            try {
              itemImages = typeof item.imagesWithDesc === "string" 
                ? JSON.parse(item.imagesWithDesc) 
                : item.imagesWithDesc || [];
            } catch(e) {}
            
            const firstImage = itemImages?.[0]?.img || item.img;

            return (
              <Link
                key={item.id}
                to={`/photo-news/${item.id}`}
                className="group overflow-hidden border-b border-gray-200 pb-4"
              >
                <img
                  src={firstImage}
                  alt={item.title}
                  className="aspect-[16/10] w-full rounded object-cover"
                />
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-800 transition group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                  {item.mainDescription || item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default PhotoNewsDetails;
