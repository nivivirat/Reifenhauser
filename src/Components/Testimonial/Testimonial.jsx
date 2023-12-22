import React from 'react';
import { CardWithLink } from './CardWithLink';
import cardContent from './Content.json';
import Testo from'../../assets/Images/Testimonial/Test11.svg'
function Testimonial() {
  return (
    <div className="App">
      <div className="lg:hidden flex-row flex gap-1 ml-3 mt-3">
                    <p className="text-[#999999]">Home-</p>
                    <p className="text-primary font-semibold"> Testimonials</p>
                </div>
      <p className="text-xl test11">
        Testimonials
      </p>
      <p className="text-2xs mt-8 test13">
        They already love our Services
      </p>
      <p className="text-3xl mt-8 test112"><strong>See what our users say about us</strong>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {cardContent.map((card, index) => (
          <CardWithLink
            key={index}
            // title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonTextt={card.buttonTextt}
            pos={card.pos}
            kl={card.kl}
            poss={card.poss}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
