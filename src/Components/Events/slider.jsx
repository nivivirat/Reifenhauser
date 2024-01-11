// Slider.js
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    loop: true,
    scrollSnap: true, // Enable smooth scrolling without stopping at the nearest card
    ...options,
  });

  const sidebarRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const handlePointerDown = () => {
      clearInterval(intervalId);
    };

    const handlePointerUp = () => {
      startAutoScroll();
    };

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (embla) {
          embla.scrollNext();
        }
      }, 3000);
    };

    if (embla) {
      startAutoScroll();

      embla.on("pointerDown", handlePointerDown);
      embla.on("pointerUp", handlePointerUp);

      return () => {
        clearInterval(intervalId);
        embla.off("pointerDown", handlePointerDown);
        embla.off("pointerUp", handlePointerUp);
      };
    }
  }, [embla]);

  const handleSidebarClick = (index) => {
    if (embla) {
      embla.scrollTo(index);
    }
  };

  return (
    <div className="w-5/6 overflow-hidden relative" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Slider;
