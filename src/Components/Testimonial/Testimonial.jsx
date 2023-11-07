import React from 'react';
import { CardWithLink } from './CardWithLink';
import cardContent from './Content.json';

function Testimonial() {
  return (
    <div className="App">
     
    <p class="text-xl test11">
    Testimonials
</p>
<p className="text-2xs mt-8 test13">
They already love our  Services
 </p>
 <p className="text-3xl mt-8 test12"><strong>See what our users say about us</strong>
 </p>
 
    <div className="flex flex-wrap justify-center gap-4">
      {cardContent.map((card, index) => (
        <CardWithLink
          key={index}
          // title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          pos={card.pos}
          kl={card.kl}
        />
      ))}
    </div>
    </div>
  );
}

export default Testimonial;