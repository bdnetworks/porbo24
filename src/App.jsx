import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router";

import Layout from "./Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsDetails from "./pages/NewsDetails";
import LatestNews from "./components/newsCategories/LatestNews";
import ApnerJonno from "./pages/ApnerJonno";
import AllVideo from "./pages/AllVideo";
import ApnerOpnion from "./pages/ApnerOpnion";
import PhotoNewsDetails from "./pages/PhotoNewsDetails";

// ১. অন্য পেজ বা কম্পোনেন্ট থেকে ডেটা পাওয়ার জন্য একটি Context তৈরি
export const NewsContext = createContext();

// গুগল অ্যাপস স্ক্রিপ্ট থেকে পাওয়া Web App URL-টি এখানে বসাবেন
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzgDFHHrLxxgoXPIZg50eX8fyVYmF1hpVGYq2EpQa5ei65uQASV8Itd8o7uYBpaiSKpRg/exec"; 

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ক. প্রথমে লোকাল স্টোরেজে ক্যাশ করা ডেটা আছে কিনা চেক করবে ও লোড করবে (ইনস্ট্যান্ট স্পিড)
    const cachedData = localStorage.getItem('cached_news_data');
    if (cachedData) {
      setNewsData(JSON.parse(cachedData));
      setLoading(false);
    }

    // খ. ব্যাকগ্রাউন্ডে গুগল শীট থেকে লেটেস্ট আপডেট নিয়ে আসবে (সাইট স্লো হবে না)
    fetch(GOOGLE_SHEET_API)
      .then((res) => res.json())
      .then((data) => {
        // নতুন ডেটা সবার ওপরে দেখানোর জন্য অবজেক্টের ক্রম উল্টে দেওয়া (Reverse করা)
        const updatedData = data.reverse(); 
        setNewsData(updatedData);
        localStorage.setItem('cached_news_data', JSON.stringify(updatedData)); // ক্যাশ আপডেট
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching sheet data:", err);
        setLoading(false);
      });
  }, []);

  return (
    // ২. প্রোভাইডার দিয়ে পুরো অ্যাপের ভেতরে ডেটা পাঠিয়ে দেওয়া হলো
    <NewsContext.Provider value={{ newsData, loading }}>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Special Pages */}
          <Route path="/latest" element={<LatestNews />} />
          <Route path="/video" element={<AllVideo />} />
          <Route path="/for-you" element={<ApnerJonno />} />
          <Route path="/opinion" element={<ApnerOpnion />} />
          <Route path="/photo-news/:id" element={<PhotoNewsDetails />} />

          {/* Dynamic Category */}
          <Route path="/:category" element={<CategoryPage />} />

          {/* Dynamic Sub Category */}
          <Route path="/:category/:subCategory" element={<CategoryPage />} />}
          />

          {/* Dynamic News Details */}
          <Route path="/news/:source/:id" element={<NewsDetails />} />
        </Routes>
      </Layout>
    </NewsContext.Provider>
  );
};

export default App;
