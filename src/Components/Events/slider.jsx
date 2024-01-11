import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  // Initialize EmblaCarousel using the custom hook
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    loop: true, // Enable loop option
    ...options,
  });

  useEffect(() => {
    let intervalId;

    const handlePointerDown = () => {
      // Pause auto-scrolling when the user touches any card
      clearInterval(intervalId);
    };

    const handlePointerUp = () => {
      // Resume auto-scrolling when the user releases the touch
      startAutoScroll();
    };

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (embla) {
          embla.scrollNext();
        }
      }, 5000); // Adjust the interval as needed (e.g., 3000ms for 3 seconds)
    };

    // If Embla instance exists, enable autoplay
    if (embla) {
      startAutoScroll();

      // Add event listeners for touch events
      embla.on("pointerDown", handlePointerDown);
      embla.on("pointerUp", handlePointerUp);

      // Clear the interval and remove the event listeners when the component is unmounted
      return () => {
        clearInterval(intervalId);
        embla.off("pointerDown", handlePointerDown);
        embla.off("pointerUp", handlePointerUp);
      };
    }
  }, [embla]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex ">{children}</div>
    </div>
  );
};

export default Slider;
