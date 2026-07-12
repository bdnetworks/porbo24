import { Link } from "react-router";
import { videoNewsData } from "../../data/videoNewsData";
import { FaPlay } from "react-icons/fa";

const data = videoNewsData.slice(0, 4);

const VideoNewsMobile = () => {
  return (
    <main>
    
        {/* ===================== Section Header ===================== */}
        <div className="mb-6 flex items-center gap-3 border-t-4 border-black pt-4">
          <h2 className="text-[28px] font-bold text-[#111827]">ভিডিও </h2>
          <span className="text-[30px] font-light text-[#07186b]">›</span>
        </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-10 p-2">
        
      {data.map((data) => (
        <Link
          to={`/news/data/${data.id}`}
          key={data.id}
          className="border-b-[0.5px] border-gray-300 pb-6"
        >
          {/* Image Wrapper */}
        <div className="relative">
  <img
    className="w-full max-w-[300px] h-[140px] object-cover"
    src={data.img}
    alt={data.title}
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07186b] text-white shadow-lg">
      <FaPlay className="ml-[2px] text-base" />
    </div>
  </div>
</div>

          <h1 className="my-6 line-clamp-2 text-[17px]">
            {data.title}
          </h1>

          <span className="text-[14px] text-gray-500">
            ১৯ মিনিট আগে
          </span>
        </Link>
      ))}
    </div>
    </main>
  );
};

export default VideoNewsMobile;