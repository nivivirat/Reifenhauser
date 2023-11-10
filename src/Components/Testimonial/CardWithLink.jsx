import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import './Test.css'

export function CardWithLink({ description, buttonText, pos, kl, poss, buttonTextt }) {
  return (
    <Card className="mt-12 w-96 border border-blue-500">
      {description && (
        <CardBody>
          {/* Your existing SVG and Typography components */}
          
          <Typography>{description}</Typography>
        </CardBody>
      )}
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
        <Typography variant="text" className="flex items-center gap-2 test1">
            {buttonText}
            {/* Your existing SVG component */}
          </Typography>
          <Typography variant="text" className="flex items-center gap-2 test90">
            {buttonTextt}
            {/* Your existing SVG component */}
          </Typography>
      <Typography variant="text" className="flex items-left gap-2 test2">
            {pos}
            
          </Typography>
          <Typography variant="text" className="flex items-right gap-2 test3">
            {kl}
            
          </Typography>
          <Typography variant="text" className="flex items-right gap-2 test4">
            {poss}
            
          </Typography>
          
        </a>
      </CardFooter>
    
    </Card>
  );
}

CardWithLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};