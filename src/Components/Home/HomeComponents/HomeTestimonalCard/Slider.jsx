import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, options }) => {
  const [clonedSlides, setClonedSlides] = useState([]);
  const [iterationCount, setIterationCount] = useState(0);

  // Clone the initial set of slides and append them to create a loop
  useEffect(() => {
    const cloned = [...children, ...children];
    setClonedSlides(cloned);
  }, [children]);

  // Initialize EmblaCarousel using the custom hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  // Set up auto-scrolling
  useEffect(() => {
    let intervalId;

    const handleScroll = () => {
      // Check if one iteration is completed
      if (emblaApi.selectedScrollSnap() === 0) {
        setIterationCount((prevCount) => prevCount + 1);

        // Check if all 10 iterations are completed
        if (iterationCount === 9) {
          clearInterval(intervalId);
        }
      }
    };

    if (emblaApi) {
      intervalId = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 7000); // Adjust the interval duration (in milliseconds) as needed

      emblaApi.on("scroll", handleScroll);

      // Clear the interval and remove the event listener on component unmount
      return () => {
        clearInterval(intervalId);
        emblaApi.off("scroll", handleScroll);
      };
    }
  }, [emblaApi, iterationCount]);

  return (
    // Set ref as emblaRef.
    // Make sure we have overflow-hidden and flex so that it displays properly
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{clonedSlides}</div>
    </div>
  );
};

export default Slider;
