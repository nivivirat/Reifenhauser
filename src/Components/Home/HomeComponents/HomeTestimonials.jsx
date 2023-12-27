import cardContent from '../../Testimonial/Content.json'
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// import  { HomeTestimonialCard }  from './HomeTestimonalCard/HomeTestimonialCard';
import Slider from './HomeTestimonalCard/Slider';
import { CWL } from '../../Testimonial/CWL';
import "./Test1.css"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

// import { CardWithLink } from '../../Testimonial/CardWithLink';
export default function HomeTestimonials() {
    // Use slice to get the first 3 items in the array
    const first3Cards = cardContent.slice(0, 3);

    return (
        <div className="bg-base flex flex-col">
            <div className="md:px-[3%] pt-10 font-semibold md:w-[50%] xl:text-3xl text-2xl xl:font-semibold md:font-bold md:text-4xl w-full">
            <span>Here's what our <span className="text-primary">customers</span> say about us</span>

            </div>

            <div className="text-[#6B6B78] text-xs ">
           <Slider options={{ align: "center" }}>
          
            {cardContent.map((card, index) => (
                 <div key={index} className="flex-[0_0_80%] md:flex-[0_0_30%] ">
                 <div >
          <CWL
            key={index}
            // title={card.title}
            description={card.description}
            // buttonText={card.buttonText}
            buttonTextt={card.buttonTextt}
            pos={card.pos}
            kl={card.kl}
            poss={card.poss}
          />
           </div></div>
        ))}
       
        </Slider>
            </div>

            <div className="w-full flex justify-center place-items-center mt-10 md:mb-10">
                <a href="/testimonials" className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary md:w-[17%] w-[60%]">
                    <p>View All Testimonials</p>
                    <div className="text-primary md:text-xl">
                        <Icon icon="iconoir:arrow-tr" />
                    </div>
                </a>
            </div>

        </div>
    );
}
HomeTestimonials.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };
