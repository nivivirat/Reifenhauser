import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  // Initialize EmblaCarousel using the custom hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  // Set up auto-scrolling
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 2000); // Adjust the interval duration (in milliseconds) as needed

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    // Set ref as emblaRef.
    // Make sure we have overflow-hidden and flex so that it displays properly
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};

export default Slider;
