
import React from 'react'
import { newsData } from '../../data/newsData'

const latesNews = newsData.slice(0, 15)
const setTime = new Date()
const time = setTime.getDate()

console.log(time)

const LatestNews = () => {
  return (
    <main className='flex justify-center items-center flex-col pt-14 pb-6 px-4'>
          {/* ===================== Header ===================== */}
        {/* <div className="mb-6 text-start w-full pt-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] font-bold text-[#111827]">ভিডিও</h2>
            <span className="text-[32px] font-light text-[#07186b]">›</span>
          </div>
        </div> */}
 
    <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-4 space-x-4 space-y-6 max-sm:space-y-8 max-w-[1250px]'>
       
       
        {
        latesNews.map((news)=>(
                <article key={news.id}
                className='w-[285px] border-b border-r border-black/10 pb-4 pr-4 max-xl:w-[300px] max-lg:w-[350px] max-md:w-[290px]'
                >
                   <img src={news.img} alt={news.title}
                   className='w-[100%] h-[200px]'
                   />
                   <h1 className='line-clamp-2 font-bold text-[19px] my-2'>{news.title}</h1>
                   <p className='line-clamp-3'>{news.description}</p>
                    
                    <h2 className='mt-4 font-bold underline'>29/6/2026 Time 2:30 PM</h2>
                </article>
            ))
        }

    </div>

    </main>
  )
}

export default LatestNews
