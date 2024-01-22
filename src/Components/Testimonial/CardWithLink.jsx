// CardWithLink.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export function CardWithLink({ title, testimonial }) {
  return (
    <Card className="mt-12 mb-10 ml-2 mr-2 sm:w-80 lg:w-96 md:w-96 border border-blue-500">
      <CardBody>
        <Typography className="text-left text-black text-2xs">
          {testimonial.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-blue">
        <a href="#" className="inline-block">
          <Typography variant="text" style={{ color: '#013A98', fontSize: '14px' }} className="flex  items-center -ml-3 gap-2 test90">
            {testimonial.buttonText}
          </Typography>
          <Typography variant="text" style={{ color: '#013A98', fontSize: '14px' }} className="flex items-left gap-2 mt-8 test2">
            {testimonial.pos}
          </Typography>
          <Typography variant="text" style={{ color: '#013A98', fontSize: '14px' }} className="flex items-right gap-2 -mb-1 test3">
            {testimonial.kl}
          </Typography>
          <Typography variant="text" style={{ color: '#013A98', fontSize: '14px' }} className="flex  items-right gap-2 test4">
            {testimonial.poss}
          </Typography>
        </a>
      </CardFooter>
    </Card>
  );
}

CardWithLink.propTypes = {
  title: PropTypes.string.isRequired,
  testimonial: PropTypes.shape({
    description: PropTypes.string,
    buttonText: PropTypes.string,
    pos: PropTypes.string,
    kl: PropTypes.string,
    poss: PropTypes.string,
  }).isRequired,
};
