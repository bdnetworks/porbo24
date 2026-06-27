import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import { videoNewsData } from "../../data/videoNewsData";

const VideoNews = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = 325; // একেক click এ যতটুকু slide হবে
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

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
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        {/* ===================== Header ===================== */}
        <div className="mb-6 flex items-center justify-between border-t-4 border-black/35 pt-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-bold text-[#111827]">ভিডিও</h2>
            <span className="text-[32px] font-light text-[#07186b]">›</span>
          </div>

          {/* arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollSlider("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[22px] text-[#111827] transition hover:bg-gray-50"
            >
              <FiChevronLeft />
            </button>

            <button
              onClick={() => scrollSlider("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[22px] text-[#111827] transition hover:bg-gray-50"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* ===================== Slider ===================== */}
        <div
          ref={sliderRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        >
          {videoNewsData.map((video) => (
            <article
              key={video.id}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white sm:min-w-[360px] sm:max-w-[360px] lg:min-w-[380px] lg:max-w-[380px]"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoNews;