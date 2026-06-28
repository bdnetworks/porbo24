import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#07186b] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo & About */}
          <div className="lg:col-span-2">
       
          <div className="p-2 bg-white w-[120px] rounded-[1rem]">
          <img src="./Logo.png" alt="porbo logo" />
          </div>
          

            <p className="mt-6 max-w-xl leading-8 text-white/80">
              porbo24.com is not only an online news portal. We are a family
              and work together for giving the better news around the world.
              We are here to give a nice and colorful media for Bangladesh
              and for the world.
            </p>

            {/* Social */}
            <div className="mt-8 flex flex-wrap gap-4">

              {[
                <FaFacebookF />,
                <FaXTwitter />,
                <FaYoutube />,
                <FaInstagram />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#fcd2d4] hover:text-[#07186b]"
                >
                  {icon}
                </a>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-[#fcd2d4]">
              যোগাযোগ
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-[#fcd2d4]"
                />

                <p className="leading-7 text-white/80">
                  হাবিব কমার্শিয়াল কমপ্লেক্স (লিফট-৩)
                  <br />
                  গুলশান-১, ঢাকা ১২১২
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-[#fcd2d4]" />

                <a
                  href="tel:+8809617888807"
                  className="text-white/80 transition hover:text-[#fcd2d4]"
                >
                  +880 9617-888-807
                </a>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#fcd2d4]" />

                <a
                  href="mailto:info@porbo24.com"
                  className="text-white/80 transition hover:text-[#fcd2d4]"
                >
                  info@porbo24.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#fcd2d4]" />

                <a
                  href="mailto:ads@porbo24.com"
                  className="text-white/80 transition hover:text-[#fcd2d4]"
                >
                  ads@porbo24.com
                </a>

              </div>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-[#fcd2d4]">
              কোম্পানি
            </h3>

            <ul className="space-y-4">

              <li className="text-white/80">
                <span className="font-semibold text-white">
                  Powered by
                </span>
                <br />
                আনফোল্ড গ্রুপ
              </li>

              <li className="text-white/80">
                <span className="font-semibold text-white">
                  সম্পাদক
                </span>
                <br />
                মোঃ রবিউল আলম
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/15 pt-6">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} porbo24. All Rights Reserved.
            </p>

            <div className="space-y-1 text-sm text-white/70 md:text-right">

              <p>
                Powered by{" "}
                <span className="font-semibold text-[#fcd2d4]">
                  আনফোল্ড গ্রুপ
                </span>
              </p>

              <p>
                Site Developed by{" "}
                <a
                  href="https://banglapuzzle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#fcd2d4] hover:underline"
                >
                  Bangla Puzzle Limited
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;