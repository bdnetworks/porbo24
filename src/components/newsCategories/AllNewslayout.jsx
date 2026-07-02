import React from "react";
import { Link } from "react-router";
import { newsData } from "../../data/newsData";


/* =========================
   helper: title truncate
========================= */
const TITLE_WORD_LIMIT = 7;

const getTruncatedTitle = (title, wordLimit = TITLE_WORD_LIMIT) => {
  const words = title.trim().split(" ");
  const isLong = words.length > wordLimit;

  return {
    shortTitle: isLong ? words.slice(0, wordLimit).join(" ") : title,
    isLong,
  };
};

/* =========================
   reusable title block
========================= */
const NewsTitle = ({
  title,
  className = "",
  wordLimit = TITLE_WORD_LIMIT,
  showSeeMore = true,
}) => {
  const { shortTitle, isLong } = getTruncatedTitle(title, wordLimit);

  return (
    <div>
      <h3 className={className}>
        {shortTitle}
        {isLong && "..."}
      </h3>


    </div>
  );
};

/* =========================
   time text
========================= */
const NewsTime = ({ text = "১ ঘণ্টা আগে" }) => (
  <p className="mt-3 text-[14px] text-[#7b7b7b]">{text}</p>
);

/* =========================
   small horizontal news
========================= */
const SmallSideNews = ({ news, reverse = false }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="grid items-start gap-3 border-b border-black/10 pb-5">
      {!reverse && (
        <div className="min-w-0 flex">
          <NewsTitle
            title={news.title}
            wordLimit={12}
            className="text-[19px] font-bold leading-[1.45] text-[#1f1f1f]"
          />
         {news.img && (
        <div className="h-[82px] w-[110px] shrink-0 overflow-hidden max-xl:ml-2">
          <img
            src={news.img}
            alt={news.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
        </div>
      )}

        {news.description && (
            <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-3">
              {news.description}
            </p>
          )}
      <NewsTime />

     

      {reverse && (
        <div className="min-w-0 flex-1">
          <NewsTitle
            title={news.title}
            wordLimit={6}
            className="text-[17px] font-bold leading-[1.45] text-[#1f1f1f]"
          />
          {news.description && (
            <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-3">
              {news.description}
            </p>
          )}
          <NewsTime />
        </div>
      )}
    </Link>
  );
};

/* =========================
   opinion card (right side)
========================= */
const OpinionCard = ({ news }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="block border-b border-black/10 pb-5">
      <div className="flex items-start gap-4 ">
        <div className="min-w-0 flex">
          

          <NewsTitle
            title={news.title}
            wordLimit={10}
            className="text-[19px] font-bold leading-[1.45] text-[#1f1f1f]"
            
          />
            {news.img && (
          <div className="h-[78px] w-[110px] shrink-0 overflow-hidden max-xl:ml-2">
            <img
              src={news.img}
              alt={news.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
          

        </div>

       
      </div>
      {news.description && (
            <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-4">
              {news.description}
            </p>
          )}
          <NewsTime text="৪৮ মিনিট আগে" />
    </Link>
  );
};

/* =========================
   top feature card
========================= */
const TopFeatureCard = ({ news, imageLeft = false }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="grid grid-cols-1 gap-4 border-b border-black/10 pb-5 lg:grid-cols-[1.1fr_1fr]">
      {imageLeft && news.img && (
        <div className="overflow-hidden">
          <img
            src={news.img}
            alt={news.title}
            className="h-[230px] w-full object-cover"
          />
        </div>
      )}

      <div>
        <NewsTitle
          title={news.title}
          wordLimit={9}
          className="text-[20px] md:text-[22px] font-bold leading-[1.45] text-[#1f1f1f]"
        />

        {news.description && (
          <p className="mt-3 text-[15px] leading-7 text-[#6b7280]">
            {news.description}
          </p>
        )}

        <NewsTime text="১৭ মিনিট আগে" />
      </div>

      {!imageLeft && news.img && (
        <div className="overflow-hidden">
          <img
            src={news.img}
            alt={news.title}
            className="h-[230px] w-full object-cover"
          />
        </div>
      )}
    </Link>
  );
};

/* =========================
   medium card
========================= */
const MediumCard = ({ news }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="block border-b border-black/10 pb-4 ">
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex">
          <NewsTitle
            title={news.title}
            wordLimit={8}
            className="text-[19px] font-bold leading-[1.45] text-[#1f1f1f]"
          />
            {news.img && (
          <div className="h-[85px] w-[110px] shrink-0 overflow-hidden max-xl:ml-2">
            <img
              src={news.img}
              alt={news.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        </div>
        
      </div>
       {news.description && (
            <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-4">
              {news.description}
            </p>
          )}
          <NewsTime text="১ ঘণ্টা আগে" />
    </Link>
  );
};

/* =========================
   image top card
========================= */
const ImageTopCard = ({ news }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="block border-b border-black/10 pb-4 lg:border-b-0 lg:border-r lg:border-black/10 lg:pr-4">
      {news.img && (
        <div className="mb-3 overflow-hidden">
          <img
            src={news.img}
            alt={news.title}
            className="h-[155px] max-lg:h-[220px] w-full object-cover"
          />
        </div>
      )}

      <NewsTitle
        title={news.title}
        wordLimit={7}
        className="text-[18px] font-bold leading-[1.45] text-[#1f1f1f]"
      />

      <NewsTime text="২ ঘণ্টা আগে" />
    </Link>
  );
};

/* =========================
   text only card
========================= */
const TextOnlyCard = ({ news }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="block  pb-5">
      <NewsTitle
        title={news.title}
        wordLimit={8}
        className="text-[18px] font-bold leading-[1.5] text-[#1f1f1f]"
      />

      {news.description && (
        <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-4">
          {news.description}
        </p>
      )}

      <NewsTime text="৫৫ মিনিট আগে" />
    </Link>
  );
};

const TitleOnlyCard = ({ news }) => {
  return (
    <Link to={`/news/news/${news.id}`} className="block border-b border-black/10 pb-4">
      <NewsTitle
        title={news.title}
       wordLimit={8}
        className="text-[19px] font-bold leading-[1.4] text-[#1f1f1f] line-clamp-4"
      />

       {news.description && (
        <p className="mt-2 text-[15px] leading-7 text-[#6b7280] line-clamp-4">
          {news.description}
        </p>
      )}

    </Link>
  );
};

const AllNewsLayout = () => {
  // সব category-এর news একসাথে নিচ্ছি
  const allNews = newsData.slice(0, 18);

  if (allNews.length < 14) return null;

  // ===== Left column =====
  const leftTop = allNews[0];
  const leftBottom1 = allNews[1];
  const leftBottom2 = allNews[2];
  const leftBottom3 = allNews[3];
  const leftBottom4 = allNews[4];

  // ===== Middle column =====
  const middleTopLeft = allNews[5];
  const middleTopRight = allNews[6];
  const middleRow2Left = allNews[7];
  const middleRow2Right = allNews[8];
  const middleImage1 = allNews[9];
  const middleImage2 = allNews[10];
  const middleImage3 = allNews[11];
  const middleImage4 = allNews[12];
  const middleText1 = allNews[13];
  const middleText2 = allNews[14];

  // ===== Right column =====
  const right1 = allNews[15];
  const right2 = allNews[16];
  const right3 = allNews[17];
  const rightTitles = [right1, right2, right3];

  return (
    <section className="">
      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-6">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[300px_1fr_320px]">
          {/* =========================================================
              LEFT COLUMN
          ========================================================= */}
          <div className="space-y-5 gap-4 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 xl:border-r xl:border-black/15 xl:pr-6">
          
  
            <SmallSideNews news={leftTop} />
           
            
            {/* ad / promo block */}
            <div className="overflow-hidden bg-[#07186b] px-5 py-6 text-center">
              <p className="text-[18px] font-medium text-white">
                ADS লোড করা বাকি
              </p>
            </div>

            <SmallSideNews news={leftBottom1} />
            <SmallSideNews news={leftBottom2} />
            <SmallSideNews news={leftBottom3} />
            <SmallSideNews news={leftBottom4} />
          </div>

          {/* =========================================================
              MIDDLE COLUMN
          ========================================================= */}
          <div className="space-y-5 xl:border-r xl:border-black/15 xl:pr-6">
            {/* top two feature */}
            <div className="grid grid-cols-1 gap-5 ">
              <TopFeatureCard news={middleTopLeft} imageLeft />
             
            </div>

            {/* second row */}
            <div className="grid grid-cols-1 gap-5 border-t border-black/10 pt-5 sm:grid-cols-2">
              <MediumCard news={middleRow2Left} />
              <MediumCard news={middleRow2Right} />
            </div>

            {/* image cards row */}
            <div className="grid grid-cols-1 gap-5 border-t border-black/10 pt-5 md:grid-cols-2 lg:grid-cols-2">
              <ImageTopCard news={middleImage1} />
              <ImageTopCard news={middleImage2} />
              <ImageTopCard news={middleImage3} />
              <ImageTopCard news={middleImage4} />
               
            </div>

            {/* text cards row */}
            <div className="grid grid-cols-1 gap-5 border-t border-black/10 pt-5 md:grid-cols-2 lg:grid-cols-2">
              <div className="md:border-r md:border-black/10 md:pr-5">
                <TextOnlyCard news={middleText1} />
              </div>
              <TextOnlyCard news={middleText2} />
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN
          ========================================================= */}
          <div className="space-y-5 ">
    
            <main className="space-y-5 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4">

        
            <OpinionCard news={right1} />
            <OpinionCard news={right2} />
            <OpinionCard news={right3} />

            <div className="max-w-[320px] w-[100%] border-2 h-[300px] max-xl:h-[250px] border-gray-300 bg-[#07186b] text-center text-white">
              ADS LOAD NEED
              </div>
            </main>

              
              <div className="space-y-4 max-xl:w-full max-xl:grid max-xl:grid-cols-3 max-sm:grid-cols-1 gap-4 text-[19px] font-bold hover:text-sky-100 ">
                {rightTitles.map((news) => (
                  <TitleOnlyCard key={news.id} news={news} />
                ))}
              </div>
      
          </div>


        </div>
      </div>
    </section>
  );
};

export default AllNewsLayout;
