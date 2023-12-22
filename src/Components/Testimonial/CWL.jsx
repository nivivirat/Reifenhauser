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

export function CWL({ description, buttonText, pos, kl, poss, buttonTextt }) {
  
  return (
    <Card className="mt-2 w-128 h-72 lg:h-56 md:h-80 border border-blue-500 vvvv">
      {description && (
        <CardBody>
          {/* Your existing SVG and Typography components */}
          
          <Typography className="text-left">{description}</Typography>
        </CardBody>
      )}
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
        <Typography variant="text" className="flex items-center gap-2 test31 ">
            {buttonText}
            {/* Your existing SVG component */}
          </Typography>
          <Typography variant="text" className="flex items-center gap-2 test31 ol">
            {buttonTextt}
            {/* Your existing SVG component */}
          </Typography>
      <Typography variant="text" className="flex items-left gap-2 test30 ol">
            {pos}
            
          </Typography>
          <Typography variant="text" className="flex items-right gap-2 test3 ol">
            {kl}
            
          </Typography>
          <Typography variant="text" className="flex items-right gap-2 test30 ol">
            {poss}
            
          </Typography>
          
        </a>
      </CardFooter>
    
    </Card>
  );
}

CWL.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
