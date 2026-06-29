import React, { useMemo, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { Link } from "react-router";
import { newsData } from "../data/newsData";

const divisions = [
  "ঢাকা",
  "চট্টগ্রাম",
  "সিলেট",
  "রাজশাহী",
  "খুলনা",
  "বরিশাল",
  "রংপুর",
  "ময়মনসিংহ",
];

const districtOptions = {
  ঢাকা: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ", "টাঙ্গাইল", "মুন্সিগঞ্জ"],
  চট্টগ্রাম: ["চট্টগ্রাম", "কক্সবাজার", "কুমিল্লা", "ফেনী", "ব্রাহ্মণবাড়িয়া"],
  সিলেট: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
  রাজশাহী: ["রাজশাহী", "বগুড়া", "পাবনা", "নাটোর"],
  খুলনা: ["খুলনা", "যশোর", "সাতক্ষীরা", "বাগেরহাট"],
  বরিশাল: ["বরিশাল", "পটুয়াখালী", "ভোলা", "ঝালকাঠি"],
  রংপুর: ["রংপুর", "দিনাজপুর", "কুড়িগ্রাম", "গাইবান্ধা"],
  ময়মনসিংহ: ["ময়মনসিংহ", "নেত্রকোনা", "জামালপুর", "শেরপুর"],
};

const upazilaOptions = {
  ঢাকা: ["সাভার", "ধামরাই", "দোহার", "কেরানীগঞ্জ"],
  গাজীপুর: ["কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"],
  নারায়ণগঞ্জ: ["রূপগঞ্জ", "আড়াইহাজার", "সোনারগাঁ"],
  চট্টগ্রাম: ["রাউজান", "সীতাকুণ্ড", "মীরসরাই", "পটিয়া"],
  কক্সবাজার: ["চকরিয়া", "টেকনাফ", "উখিয়া"],
  কুমিল্লা: ["দাউদকান্দি", "মুরাদনগর", "চৌদ্দগ্রাম"],
  সিলেট: ["বালাগঞ্জ", "বিশ্বনাথ", "গোলাপগঞ্জ"],
  মৌলভীবাজার: ["কুলাউড়া", "শ্রীমঙ্গল", "কমলগঞ্জ"],
  রাজশাহী: ["পবা", "গোদাগাড়ী", "চারঘাট"],
  খুলনা: ["ডুমুরিয়া", "দাকোপ", "পাইকগাছা"],
  বরিশাল: ["বাকেরগঞ্জ", "উজিরপুর", "বানারীপাড়া"],
  রংপুর: ["মিঠাপুকুর", "পীরগঞ্জ", "তারাগঞ্জ"],
  ময়মনসিংহ: ["ত্রিশাল", "ভালুকা", "ফুলপুর"],
};

const DeshSection = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  // শুধু desh category থেকে 6টা news
  const deshNews = newsData
    .filter((item) => item.category === "desh")
    .slice(0, 6);

  if (deshNews.length < 6) return null;

  const featuredNews = deshNews[0];
  const middleNews = deshNews.slice(1, 4);
  const rightNews = deshNews.slice(4, 6);

  // selected division অনুযায়ী district list
  const districts = useMemo(() => {
    if (!selectedDivision) return [];
    return districtOptions[selectedDivision] || [];
  }, [selectedDivision]);

  // selected district অনুযায়ী upazila list
  const upazilas = useMemo(() => {
    if (!selectedDistrict) return [];
    return upazilaOptions[selectedDistrict] || [];
  }, [selectedDistrict]);

  const handleDivisionChange = (e) => {
    const value = e.target.value;
    setSelectedDivision(value);
    setSelectedDistrict("");
    setSelectedUpazila("");
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setSelectedDistrict(value);
    setSelectedUpazila("");
  };

  const handleSearch = () => {
    console.log({
      division: selectedDivision,
      district: selectedDistrict,
      upazila: selectedUpazila,
    });
  };

  return (
    <section className="bg-white py-8 mt-10">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        {/* ===================== Section Header ===================== */}
        <div className="mb-6 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">বাংলাদেশ</h2>
          <span className="text-[30px] font-light text-[#07186b]">›</span>
        </div>

        {/* ===================== Filter/Search Row ===================== */}
        <div className="mb-6 flex flex-col gap-4 bg-[#dceaf4] px-5 py-5 lg:flex-row lg:items-center">
          {/* left text */}
          <div className="flex shrink-0 items-center gap-2 text-[18px] font-medium text-[#1f2937]">
            <FiMapPin className="text-red-600" />
            <span>আমার এলাকার খবর</span>
          </div>

          {/* selects + search */}
          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_180px]">
            {/* Division */}
            <select
              value={selectedDivision}
              onChange={handleDivisionChange}
              className="h-[54px] border border-black/15 bg-white px-4 text-[17px] text-[#374151] outline-none"
            >
              <option value="">বিভাগ</option>
              {divisions.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>

            {/* District */}
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedDivision}
              className="h-[54px] border border-black/15 bg-white px-4 text-[17px] text-[#374151] outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">জেলা</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            {/* Upazila */}
            <select
              value={selectedUpazila}
              onChange={(e) => setSelectedUpazila(e.target.value)}
              disabled={!selectedDistrict}
              className="h-[54px] border border-black/15 bg-white px-4 text-[17px] text-[#374151] outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">উপজেলা</option>
              {upazilas.map((upazila) => (
                <option key={upazila} value={upazila}>
                  {upazila}
                </option>
              ))}
            </select>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="flex h-[54px] items-center justify-center gap-3 bg-[#0b4fb3] px-6 text-[20px] font-medium text-white"
            >
              <FiSearch className="text-[24px]" />
              খুঁজুন
            </button>
          </div>
        </div>

        {/* ===================== Main News Grid ===================== */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_1.15fr_0.75fr]">
          {/* =========================================================
              LEFT COLUMN - Featured big news
          ========================================================= */}
          <Link to={`/news/news/${featuredNews.id}`}>
            <article>
              <div className="mb-4 overflow-hidden">
                <img
                  src={featuredNews.img}
                  alt={featuredNews.title}
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <h3 className="mb-4 text-[26px] font-bold leading-[1.35] text-[#111827]">
                {featuredNews.title}
              </h3>

              {/* পুরো description না, শুধু 3 line */}
              <p className="mb-4 line-clamp-3 text-[18px] leading-8 text-[#6b7280]">
                {featuredNews.description}
              </p>

              <span className="text-[16px] text-[#6b7280]">৬ মিনিট আগে</span>
            </article>
          </Link>

          {/* =========================================================
              MIDDLE COLUMN - 3 stacked news
          ========================================================= */}
          <div className="border-black/10 xl:border-l xl:border-r xl:px-6">
            {middleNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/news/${news.id}`}
                className={`flex flex-col gap-4 py-4 md:flex-row md:items-start ${
                  index !== middleNews.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                {/* text */}
                <div className="flex-1">
                  <h3 className="mb-3 line-clamp-3  text-[19px] font-bold leading-[1.45] text-[#111827]">
                    {news.title}
                  </h3>

                  {/* পুরো description না, শুধু 2 line */}
                  <p className="mb-4 line-clamp-3 text-[16px] leading-6 text-[#6b7280]">
                    {news.description}
                  </p>

                  <span className="text-[16px] text-[#6b7280]">
                    {index === 0
                      ? "৩০ মিনিট আগে"
                      : index === 1
                      ? "৩৮ মিনিট আগে"
                      : "৪১ মিনিট আগে"}
                  </span>
                </div>

                {/* image */}
                <div className="w-full overflow-hidden md:h-[170px] md:w-[220px] md:shrink-0">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* =========================================================
              RIGHT COLUMN - 2 small news
          ========================================================= */}
          <div>
            {rightNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/news/${news.id}`}
                className={`flex gap-4 py-4 ${
                  index !== rightNews.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-[19px] font-bold leading-[1.45] text-[#111827]">
                    {news.title}
                  </h3>

                  <span className="text-[16px] text-[#6b7280]">
                    {index === 0 ? "৫১ মিনিট আগে" : "১ ঘণ্টা আগে"}
                  </span>
                </div>

                <div className="h-[110px] w-[150px] max-sm:w-[120px] shrink-0 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeshSection;