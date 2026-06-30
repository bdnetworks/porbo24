import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollManager = () => {
  const location = useLocation();
  const positions = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      positions.current[location.pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const savedPosition = positions.current[location.pathname];

    window.scrollTo({
      top: savedPosition ?? 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
};

export default ScrollManager;