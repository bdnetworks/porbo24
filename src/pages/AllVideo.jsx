import React from "react";
import { Link } from "react-router";
import { FiPlay } from "react-icons/fi";
import { videoNewsData } from "../data/videoNewsData";

const AllVideo = () => {
  const renderTitle = (title, limit = 7) => {
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h3 className="text-[20px] font-bold leading-[1.45] text-[#111827]">
        {shortTitle}
        {isLong && "..."}
      </h3>
    );
  };

  return (
    <section className="videopage bg-white py-8">
      <div className="mx-auto max-w-[1300px] px-4 lg:px-6">
        {/* ===================== Header ===================== */}
        <div className="mb-6 flex items-center justify-between  pt-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-bold text-[#111827]">ভিডিও</h2>
            <span className="text-[32px] font-light text-[#07186b]">›</span>
          </div>
        </div>

        {/* ===================== Grid Layout ===================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {videoNewsData.map((video) => (
            <Link
              key={video.id}
              to={`/news/video/${video.id}`}
              className="w-full border-b border-r border-black/10 bg-white pb-5 pr-5"
            >
              {/* thumbnail */}
              <div className="group relative overflow-hidden">
                <img
                  src={video.img}
                  alt={video.title}
                  className="h-[220px] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* play button */}
                <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#07186b] text-white shadow-lg">
                  <FiPlay className="ml-1 text-[30px]" />
                </button>

                {/* duration */}
                <span className="absolute bottom-3 right-3 rounded bg-black/75 px-2 py-1 text-[13px] font-medium text-white">
                  {video.duration}
                </span>
              </div>

              {/* content */}
              <div className="pt-4">
                {renderTitle(video.title, 6)}

                <p className="mt-3 line-clamp-2 text-[16px] leading-7 text-[#6b7280]">
                  {video.description}
                </p>

                <span className="mt-3 block text-[15px] text-[#6b7280]">
                  {video.publishedAt}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVideo;
