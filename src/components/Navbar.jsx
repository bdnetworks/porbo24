import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRedoAlt,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link,NavLink } from "react-router"; // Link ইমপোর্ট করা হয়েছে

const categories = [
  { title: "হোম", path: "/" },
  { title: "সর্বশেষ", path: "/latest" },
  { title: "বাংলাদেশ", path: "/desh" },
  { title: "রাজনীতি", path: "/rajniti" },
  { title: "বিশ্ব", path: "/international" },
  { title: "বাণিজ্য", path: "/economy" },
  { title: "প্রযুক্তি", path: "/technology" },
  { title: "মতামত", path: "/opinion" },
  { title: "খেলা", path: "/sports" },
  { title: "বিনোদন", path: "/entertainment" },
  { title: "ভিডিও", path: "/video" },
  { title: "আপনার জন্য", path: "/for-you" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white transition-colors">
        {/* ========== 1st Line: Top Info Bar ========== */}
        <div className="bg-[#07186b] text-white ">
          <div className="mx-auto flex  max-w-[1280px] items-center justify-between gap-2 px-4 max-sm:px-2 py-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[14px]" />
                <span>ঢাকা</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[14px]" />
                <span>বুধবার, ২৪ জুন, ২০২৬</span>
              </div>

               <div className="flex items-center gap-2 whitespace-nowrap"> 
                <FaRedoAlt className="text-[14px]" />
                <span>আপডেট: ৫ মিনিট ১২ সেকেন্ড আগে</span>
              </div>
            </div>

            <div className="flex items-center gap-12 whitespace-nowrap">
             
              
               <div className="flex  gap-2">
                <a className="flex  items-center justify-center gap-[5px] text-[1rem] bg-sky-800 px-2 py-[0.5px] rounded-[0.5rem] hover:bg-[#fcd2d471] transition-all cursor-pointer ">
                <FaUser title="login" className="text-[1.2rem]"/> 
              </a>

                <a className="flex  items-center justify-center gap-[5px] text-[1rem] bg-sky-800 px-2 py-[0.5px] rounded-[0.5rem] hover:bg-[#fcd2d471] transition-all cursor-pointer ">
                <TbWorld title="ENG" className="text-[1.2rem]"/> <span className="max-sm:hidden">Eng</span>
              </a>
             
              {/* dark mode button */}
              <button
                type="button"
                onClick={() => setIsDarkMode((prev) => !prev)}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={isDarkMode ? "Light mode" : "Dark mode"}
                className="p-[0.4rem]  bg-sky-800 rounded-[0.5rem] shadow-sm hover:bg-[#fcd2d471] transition-all"
              >
                {isDarkMode ? (
                  <MdLightMode className="text-2xl"/>
                ) : (
                  <MdDarkMode className="text-2xl"/>
                )}
              </button>
               </div>



            </div>
          </div>
        </div>

        {/* ========== 2nd Line: Logo + Search + Hamburger ========== */}
        <div
          className={`border-b border-gray-200 bg-white transition-all duration-300 md:overflow-hidden ${
            isSticky
              ? "max-h-[150px] py-2 max-sm:py-[0.2rem] opacity-100 md:max-h-0 md:py-0 md:opacity-0"
              : "max-h-[100px] py-2 max-sm:py-[0.2rem] opacity-100"
          }`}
        >
          <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 max-sm:px-2">
            <Link to="/" className="shrink-0 max-sm:-ml-1" aria-label="Go to home">
              <img
                src="/Logo.png"
                alt="porbo25-logo"
                className="w-[5rem] max-sm:w-[4rem]"
              />
            </Link>
            <div className="hidden md:block">
              <img src='/adsNav.png' alt="If ad's need call: 9617-888-807" className="w-[500px] max-sm:w-[350px]" />
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:hidden">
              <div className="mobile-category-scroll flex min-w-0 flex-1 items-center overflow-x-auto whitespace-nowrap pb-1">
                {categories.map((item, index) => (
                  <NavLink
                    key={`${item.path}-mobile-${index}`}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex-shrink-0 px-2 py-2 text-[14px] font-medium transition-colors ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-[#455dd3] hover:text-red-500"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>

              <button
                type="button"
                aria-label={isMobileSearchOpen ? "Hide search" : "Search"}
                onClick={() => setIsMobileSearchOpen((current) => !current)}
                className="flex h-10 w-8 shrink-0 items-center justify-center rounded border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100"
              >
                {isMobileSearchOpen ? (
                  <FaTimes className="text-[14px]" />
                ) : (
                  <FaSearch className="text-[14px]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#07186b] text-white hover:bg-[#0a1f5e] transition-colors"
              >
                <FaBars />
              </button>
            </div>

            {isMobileSearchOpen && (
              <div className="absolute left-2 right-2 top-full z-50 mt-2 md:hidden">
                <div className="flex h-11 items-center overflow-hidden rounded border border-gray-300 bg-white shadow-xl">
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="h-full w-full px-3 text-sm text-gray-700 outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Submit search"
                    className="flex h-full w-11 items-center justify-center border-l border-gray-300 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <FaSearch className="text-[13px]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========== 3rd Line: Category Menu (large screens) ========== */}
        <div className="hidden md:block bg-[#07186b] text-white">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="flex items-center justify-between gap-3">
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
              <div className="flex items-center overflow-x-auto whitespace-nowrap thin-scrollbar">
                {categories.map((item, index) => (
                 <NavLink
                    key={`${item.path}-${index}`}
                    to={item.path}
                    // end প্রোপ্রার্টিটি দেওয়া হয়েছে যেন '/' পথটি সব পথের সাথে একটিভ না দেখায়
                    end={item.path === "/"} 
                    className={({ isActive }) =>
                      `flex-shrink-0 border-r border-white/40 px-3 py-3 text-[16px] font-medium first:pl-2 last:border-r-0 transition-colors ${
                        isActive
                          ? "text-red-400 font-bold bg-[#051252] border-b-2 border-red-400" // একটিভ হলে হলুদ রঙ এবং হালকা ব্যাকগ্রাউন্ড হবে
                          : "text-white hover:text-gray-200"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path} // button এর বদলে Link ব্যবহার করা হয়েছে
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-3 border-b border-gray-300 text-left text-base font-medium text-gray-800 hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
