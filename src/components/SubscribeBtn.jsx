import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const SubscribeBtn = () => {
  return (
    <section className="mx-auto mt-18 mb-2 max-w-[1250px] w-[100%] px-2">
      <div className="overflow-hidden rounded-xl border border-[#fcd2d4] bg-gradient-to-r from-[#07186b] to-[#0b2b9b] shadow-xl">
        <div className="flex flex-col items-center justify-between gap-8 p-8 lg:flex-row lg:p-12">
          {/* Left Content */}
          <div className="max-w-[520px] text-white">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <HiOutlineMail className="text-3xl text-[#fcd2d4]" />
            </div>

            <h2 className="text-3xl font-bold">
              পর্ব২৪-এর নিউজলেটার পেতে চান?
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-200">
              প্রতিদিনের গুরুত্বপূর্ণ খবর, ব্রেকিং নিউজ এবং বিশেষ প্রতিবেদন
              সরাসরি আপনার ইমেইলের ইনবক্সে পৌঁছে যাবে।
            </p>
          </div>

          {/* Right Form */}
          <form className="flex w-full max-w-[500px] flex-col gap-4">
            <input
              type="email"
              placeholder="আপনার ইমেইল লিখুন..."
              className="rounded-lg border border-white/20 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-[#fcd2d4] focus:ring-2 focus:ring-[#fcd2d4]"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#fcd2d4] px-8 py-4 text-lg font-semibold text-[#07186b] transition duration-300 hover:scale-[1.02] hover:bg-white"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBtn;