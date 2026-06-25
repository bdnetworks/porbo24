import React from 'react'

const BreakingNews = () => {
  return (
    <div className='flex items-center justify-center py-2'>
        <div className="flex max-w-[1280px] items-center overflow-hidden bg-[#07186b] text-white md:rounded-[0.2rem]">
  {/* Left Fixed Part */}
  <div className="shrink-0 bg-red-600 px-4 py-3 max-md:py-4 max-sm:px-2 max-md:text-[12px] font-bold uppercase">
    Breaking News
  </div>

  {/* Right Scrolling News */}
  <div className="relative flex-1 overflow-hidden py-3 max-md:text-[12px]">
    <div className="headline-marquee whitespace-nowrap">
      <span className="mx-8">
        বাংলাদেশে নতুন প্রযুক্তি নীতিমালা ঘোষণা করা হয়েছে।
      </span> |
      <span className="mx-8">
        বিশ্ববাজারে জ্বালানির দাম আবারও বেড়েছে।
      </span> |
      <span className="mx-8">
        জাতীয় দলে নতুন কোচ নিয়োগ নিয়ে চলছে আলোচনা।
      </span> |
      <span className="mx-8">
        ঢাকায় আগামীকাল থেকে ভারী বৃষ্টির সম্ভাবনা রয়েছে।
      </span>
    </div>
  </div>
</div>
    </div>
  )
}

export default BreakingNews