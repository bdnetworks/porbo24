import { useEffect, useState } from "react";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRedoAlt,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const categories = [
  "হোম",
  "সর্বশেষ",
  "বাংলাদেশ",
  "রাজনীতি",
  "বিশ্ব",
  "বাণিজ্য",
  "মতামত",
  "খেলা",
  "বিনোদন",
  "ভিডিও",
  "সর্বশেষ",
  "বাংলাদেশ",
  "রাজনীতি",
  "বিশ্ব",
  "বাণিজ্য",
  "মতামত",
  "খেলা",
  "বিনোদন",
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white">
        {/* ========== 1st Line: Top Info Bar ========== */}
        <div className="bg-[#07186b] text-white ">
          <div className="mx-auto flex max-sm:flex-wrap max-w-[1280px] items-center justify-between px-4 py-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[14px]" />
                <span>ঢাকা</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[14px]" />
                <span>বুধবার, ২৪ জুন, ২০২৬</span>
              </div>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <FaRedoAlt className="text-[14px]" />
              <span>আপডেট: ৫ মিনিট ১২ সেকেন্ড আগে</span>
            </div>
          </div>
        </div>

        {/* ========== 2nd Line: Logo + Search + Hamburger ========== */}
        <div
          className={`border-b border-gray-200 bg-white transition-all duration-300 overflow-hidden ${
            isSticky
              ? "max-h-[100px] py-2 opacity-100 md:max-h-0 md:py-0 md:opacity-0"
              : "max-h-[100px] py-2 opacity-100"
          }`}
        >
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4">
            <div className="shrink-0">
             <img src="./Logo.png" alt="porbo25-logo"  className="w-[4rem]"/>
            </div>
             {/* ads section only visible tab and big device */}
            <div className="hidden md:block">
              <img src='./adsNav.png' alt="If ad's need call: 9617-888-807" className="w-[500px] max-sm:w-[350px]" />
            </div>

            <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
              <div className="flex h-10 w-full max-w-[220px] items-center overflow-hidden rounded border border-gray-300 bg-white">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-full w-full px-3 text-sm text-gray-700 outline-none"
                />
                <button className="flex h-full w-10 items-center justify-center border-l border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                  <FaSearch className="text-[12px]" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded bg-[#07186b] text-white hover:bg-[#0a1f5e] transition-colors"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* ========== 3rd Line: Category Menu (large screens only) ========== */}
        <div className="hidden md:block bg-[#07186b] text-white">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="flex items-center gap-3">
              {/* Search + Hamburger (Only visible when sticky) */}
             
                <div className="hidden items-center gap-2 sm:flex shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    className="flex h-10 w-10 items-center justify-center rounded bg-white text-[#07186b] hover:bg-gray-200 transition-colors"
                  >
                    <FaBars />
                  </button>

                  <div className="flex h-10 w-[200px] items-center overflow-hidden rounded border border-white bg-white">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="h-full w-full px-3 text-sm text-gray-700 outline-none"
                    />
                    <button className="flex h-full w-10 items-center justify-center border-l border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                      <FaSearch className="text-[12px]" />
                    </button>
                  </div>
                </div>
           

              {/* Categories */}
              <div className="flex items-center overflow-x-auto whitespace-nowrap flex-1 thin-scrollbar">
                {categories.map((item, index) => (
                  <a
                    key={`${item}-${index}`}
                    href="#"
                    className="flex-shrink-0 border-r border-white/40 px-3 py-3 text-[16px] font-medium first:pl-0 last:border-r-0 hover:text-gray-200 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-stretch">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          />

          <aside className="relative z-10 w-[280px] max-w-[85vw] h-[100vh] overflow-y-scroll bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-24 border-b border-gray-200 px-4 py-4 fixed bg-white">
              <h2 className="text-lg font-semibold">ক্যাটেগরি মেনু</h2>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07186b] text-white hover:bg-[#0a1f5e] transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="overflow-y-auto px-4 py-4 mt-16">
              <nav className="space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full  px-4 py-3 border-b border-gray-300 text-left text-base font-medium text-gray-800 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}