import React, { useState } from 'react';
import { CardWithLink } from './CardWithLink';
import cardContent from './Content.json';


import Testo from '../../assets/Images/Testimonial/Test11.svg';
import { Icon } from '@iconify/react';
function Testimonial() {
  const initialDisplayLimit = 6;
  const loadMoreIncrement = 3;

  const [displayLimit, setDisplayLimit] = useState(initialDisplayLimit);

  const handleLoadMore = () => {
    if (displayLimit < cardContent.length) {
      setDisplayLimit((prevDisplayLimit) => prevDisplayLimit + loadMoreIncrement);
    } else {
      toast.info('No more data available!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div className="App">
      <div className="lg:hidden flex-row flex gap-1 ml-3 mt-3">
        <p className="text-[#999999]">Home-</p>
        <p className="text-primary font-semibold"> Testimonials</p>
      </div>
      <p className="text-xl test11">Testimonials</p>
  
      <p className="text-3xl mt-8 test112">
        <strong>See what our users say about us</strong>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6 h-auto">
        {cardContent.slice(0, displayLimit).map((card, index) => (
          <CardWithLink
            key={index}
            description={card.description}
            buttonText={card.buttonText}
            buttonTextt={card.buttonTextt}
            pos={card.pos}
            kl={card.kl}
            poss={card.poss}
          />
        ))}
      </div>

      {displayLimit < cardContent.length && (
        <div className="w-full flex justify-center place-items-center mt-10 md:mb-10">
          <div className="">
          <button
            onClick={handleLoadMore}
            className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary"
          >
            Load More
                 <div className="text-primary md:text-xl">
    <Icon icon="iconoir:arrow-tr" />
  </div>
          </button>
     
          </div>
     
        </div>
      )}

     
    </div>
  );
}

{/* <div className="w-full flex justify-center place-items-center mt-10 md:mb-10">
<a href="/testimonials" className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary">
  <p>View All Testimonials</p> */}
  
// </a>
// </div>

export default Testimonial;
