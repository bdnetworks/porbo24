import React, { useState } from "react";
import { Link } from "react-router";
import { FiChevronRight, FiEdit3 } from "react-icons/fi";
import { opinionData } from "../../data/opinionaData";

const OpinionNews = () => {
  const [selectedNews, setSelectedNews] = useState(opinionData[0]);
  const sideNews = opinionData.slice(1, 5);
  const selectedDescription =
    selectedNews.description || opinionData[0]?.description || selectedNews.title;

  const renderTitle = (title, limit = 7, className = "") => {
    const words = title.split(" ");
    const isLong = words.length > limit;
    const shortTitle = isLong ? words.slice(0, limit).join(" ") : title;

    return (
      <h3 className={className}>
        {shortTitle}
        {isLong && "..."}
      </h3>
    );
  };

  return (
    <section className="bg-white py-8 mt-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
         {/* ===================== Section Header ===================== */}
        <div className="mb-6 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">মতামত</h2>
          <span className="text-[30px] font-light text-[#07186b]">›</span>
        </div>

        {/* =================== Main Layout =================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[460px_1fr]">
          {/* ================= LEFT FEATURED CARD ================= */}
          <article className="block border border-black/20 bg-white px-8 py-8">
            {/* top title blocks */}
            <div className="mb-8">
              <div className="inline-block bg-[#001b5e] px-4 py-2 text-[20px] font-bold leading-tight text-[#ffcc00]">
                মতামত <span className="text-[#ffcc00]">•</span>{" "}
                <span className="text-white">{selectedNews.title}</span>
              </div>
            </div>

            {/* description */}
            <p className="mb-14 max-w-[290px] text-[18px] leading-10 text-[#4b5563]">
              {selectedDescription}
            </p>

            {/* small gray line */}
            <div className="mb-4 h-[4px] w-12 bg-[#d1d5db]"></div>

            {/* author */}
            <p className="text-[18px] text-[#111827]">
              <span className="font-semibold">লেখা:</span>{" "}
              <span className="text-[#6b7280]">{selectedNews.author}</span>
            </p>
          </article>

          {/* ================= RIGHT LIST ================= */}
          <div className="flex flex-col">
            {sideNews.map((item, index) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedNews(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedNews(item);
                  }
                }}
                className={`flex gap-6 py-6 ${
                  index !== sideNews.length - 1 ? "border-b border-black/15" : ""
                } cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedNews.id === item.id ? "bg-gray-50" : ""
                }`}
              >
                {/* author image / fallback icon */}
                <div className="shrink-0">
                  {item.authorImage ? (
                    <img
                      src={item.authorImage}
                      alt={item.author}
                      className="h-28 w-28 max-sm:w-22 max-sm:h-22 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-28 max-sm:h-22 w-28 max-sm:w-22  items-center justify-center rounded-full bg-[#e5e7eb] text-[#c4c4c4]">
                      <FiEdit3 className="text-[42px]" />
                    </div>
                  )}
                </div>

                {/* content */}
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap max-sm:flex-col items-center max-sm:items-start gap-2">
                    <span className="text-[18px]  font-bold text-red-600">
                      {item.label}
                    </span>
                    <span className="text-[19px] leading-none text-[#9ca3af]">
                      •
                    </span>
                    <div className="min-w-0 flex-1">
                      {renderTitle(
                        item.title,
                        8,
                        "text-[22px] font-medium leading-[1.5] text-[#111827]"
                      )}
                    </div>
                  </div>

                  {/* ছোট underline */}
                  <div className="mb-4 h-[4px] w-11 bg-[#e5e7eb]"></div>

                  {/* author */}
                  <p className="text-[16px] text-[#111827]">
                    <span className="font-semibold">লেখা:</span>{" "}
                    <span className="text-[#6b7280]">{item.author}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionNews;
