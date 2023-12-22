import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  // Initialize EmblaCarousel using the custom hook
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  useEffect(() => {
    // If Embla instance exists, enable autoplay
    if (embla) {
      const intervalId = setInterval(() => {
        embla.scrollNext();
      }, 3000); // Adjust the interval as needed (e.g., 3000ms for 3 seconds)
      
      // Clear the interval when component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [embla]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};

export default Slider;
