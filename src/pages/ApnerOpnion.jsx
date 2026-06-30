import React from "react";
import { Link } from "react-router";
import { FiChevronRight, FiEdit3 } from "react-icons/fi";
import { opinionData } from "../data/opinionaData";

const ApnerOpnion = () => {
  const featuredNews = opinionData[0];
  const sideNews = opinionData.slice(1, 5);

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
      <div className="mx-auto max-w-[1300px] px-4 lg:px-6">
        {/* =================== Section Header =================== */}
        <div className="mb-8 flex items-center gap-3  pt-4">
          <h2 className="text-[32px] font-bold text-[#111827]">মতামত</h2>
          <FiChevronRight className="text-[30px] text-red-600" />
        </div>

        {/* =================== Main Layout =================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[460px_1fr]">
          {/* ================= LEFT FEATURED CARD ================= */}
          <Link to={`/news/opinion/${featuredNews.id}`} className="block border border-black/20 bg-white px-8 py-8">
            {/* top title blocks */}
            <div className="mb-8">
              <div className="inline-block bg-[#001b5e] px-4 py-2 text-[20px] font-bold leading-tight text-[#ffcc00]">
                মতামত <span className="text-[#ffcc00]">•</span>{" "}
                <span className="text-white">{featuredNews.title}</span>
              </div>
            </div>

            {/* description */}
            <p className="mb-14 max-w-[290px] text-[18px] leading-10 text-[#4b5563]">
              {featuredNews.description}
            </p>

            {/* small gray line */}
            <div className="mb-4 h-[4px] w-12 bg-[#d1d5db]"></div>

            {/* author */}
            <p className="text-[18px] text-[#111827]">
              <span className="font-semibold">লেখা:</span>{" "}
              <span className="text-[#6b7280]">{featuredNews.author}</span>
            </p>
          </Link>

          {/* ================= RIGHT LIST ================= */}
          <div className="flex flex-col">
            {sideNews.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/opinion/${item.id}`}
                className={`flex gap-6 py-6 ${
                  index !== sideNews.length - 1 ? "border-b border-black/15" : ""
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
              </Link>
            ))}
          </div>
        </div>

       {/* comment box */}
      <div className="mt-18">
         <b className="underline decoration-2 underline-offset-6 text-[1.4rem] ml-4 ">Write your own opnion</b>
        <div className="my-2 p-6 py-8 border-2 border-gray-300 rounded-[1rem]">
          
          <form className="flex flex-col gap-4"
           action="">
            <input type="text" placeholder="Your name" className="border border-gray-300 p-2 rounded-[0.5rem]"/>
            <input type="text" placeholder="Your Role" className="border border-gray-300 p-2 rounded-[0.5rem]"/>
            <textarea className="border border-gray-300 p-2 rounded-[0.5rem] min-h-[200px]"
            name="text" placeholder="Enter Your Opnion details..." id="">

            </textarea>
             <button className="bg-[#07186b] w-[200px] p-3 text-white rounded-[0.7rem]" 
              type="submit">Done</button>
          </form>

        </div>
      </div>

      </div>
    </section>
  );
};

export default ApnerOpnion;