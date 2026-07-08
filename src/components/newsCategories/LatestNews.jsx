import React from 'react'
import { Link } from 'react-router'
import { newsData } from '../../data/newsData'

const latesNews = newsData.slice(0, 15)

const LatestNews = () => {
  const [featuredNews, ...otherNews] = latesNews
  const sideNews = otherNews.slice(0, 2)
  const gridNews = otherNews.slice(2)

  return (
    <main className='mx-auto max-w-[1280px] px-4 py-10'>
      <div className='mb-7 flex items-center justify-between border-b border-black/10 pb-4'>
        <div>
         
          <h2 className='mt-1 text-3xl font-bold text-gray-950'>
            সর্বশেষ সংবাদ
          </h2>
        </div>

      
      </div>

      <section className='grid gap-6 lg:grid-cols-[1.55fr_1fr]'>
        {featuredNews && (
          <Link
            to={`/news/news/${featuredNews.id}`}
            className='group grid overflow-hidden border-b border-black/10 pb-6 md:grid-cols-[1.15fr_0.85fr] md:gap-6 lg:border-b-0 lg:border-r lg:pr-6'
          >
            <div className='overflow-hidden bg-gray-100'>
              <img
                src={featuredNews.img}
                alt={featuredNews.title}
                className='h-[260px] w-full object-cover transition duration-300 group-hover:scale-105 md:h-full'
              />
            </div>

            <div className='mt-4 flex flex-col justify-center md:mt-0'>
              <span className='mb-3 w-fit border-l-4 border-red-600 pl-3 text-sm font-semibold text-red-600'>
                প্রধান খবর
              </span>
              <h1 className='line-clamp-3 text-3xl font-bold leading-tight text-gray-950 '>
                {featuredNews.title}
              </h1>
              <p className='mt-4 line-clamp-4 text-[16px] leading-7 text-gray-600'>
                {featuredNews.description}
              </p>
              <p className='mt-5 text-sm font-medium text-gray-400'>
                ৫ মিনিট আগে
              </p>
            </div>
          </Link>
        )}

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-1'>
          {sideNews.map((news) => (
            <Link
              key={news.id}
              to={`/news/news/${news.id}`}
              className='group grid grid-cols-[120px_1fr] gap-4 border-b border-black/10 pb-5'
            >
              <img
                src={news.img}
                alt={news.title}
                className='h-24 w-full object-cover'
              />

              <div>
                <h3 className='line-clamp-3 text-[18px] font-bold leading-snug text-gray-900 '>
                  {news.title}
                </h3>
                <p className='mt-3 text-sm text-gray-400'>৫ মিনিট আগে</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {gridNews.map((news) => (
          <Link
            key={news.id}
            to={`/news/news/${news.id}`}
            className='group border-b border-black/10 pb-5'
          >
            <div className='mb-4 overflow-hidden bg-gray-100'>
              <img
                src={news.img}
                alt={news.title}
                className='h-[190px] w-full object-cover transition duration-300 group-hover:scale-105'
              />
            </div>

            <h3 className='line-clamp-2 text-[19px] font-bold leading-snug text-gray-950 '>
              {news.title}
            </h3>
            <p className='mt-3 line-clamp-3 text-[15px] leading-7 text-gray-600'>
              {news.description}
            </p>
            <p className='mt-4 text-sm font-medium text-gray-400'>
              ৫ মিনিট আগে
            </p>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default LatestNews
