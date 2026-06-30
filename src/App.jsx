import React from "react";
import { Routes, Route } from "react-router";

import Layout from "./Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsDetails from "./pages/NewsDetails";
import LatestNews from "./components/newsCategories/LatestNews";
import ApnerJonno from "./pages/apnerJonno";
import AllVideo from "./pages/AllVideo";
import ApnerOpnion from "./pages/ApnerOpnion";

// পরে এগুলো আলাদা page হবে
const Latest = () => <CategoryPage />;
const Video = () => <CategoryPage />;
const ForYou = () => <CategoryPage />;

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Special Pages */}
        <Route path="/latest" element={<LatestNews />} />
        <Route path="/video" element={<AllVideo />} />
        <Route path="/for-you" element={<ApnerJonno />} />
        <Route path="/opinion" element={<ApnerOpnion/>}/>

        {/* Dynamic Category */}
        <Route path="/:category" element={<CategoryPage />} />

        {/* Dynamic Sub Category */}
        <Route
          path="/:category/:subCategory"
          element={<CategoryPage />}
        />

        {/* Dynamic News Details */}
        <Route path="/news/:source/:id" element={<NewsDetails />} />
        
        {/* <Route path="/news/:slug" element={<NewsDetails />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;