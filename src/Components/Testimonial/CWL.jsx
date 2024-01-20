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
    <Card className="mt-2 w-128 h-80 lg:h-64 md:h-80 border  border-blue-500 vvvv">
      {description && (
        <CardBody>
          {/* Your existing SVG and Typography components */}
          
          <Typography className="text-black text-xs">{description}</Typography>
        </CardBody>
      )}
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
        <Typography variant="text" style={{ color: '#013A98' }} className="flex items-center gap-2 -ml-40 test1 text-black">
            {buttonText}
            {/* Your existing SVG component */}
          </Typography>
          <Typography variant="text" style={{ color: '#013A98' }} className="flex items-center gap-2 test90 text-[#013a98]">
            {buttonTextt}
            {/* Your existing SVG component */}
          </Typography>
      <Typography variant="text" style={{ color: '#013A98' }} className="flex items-left gap-2 test2 text-[#013a98]">
            {pos}
            
          </Typography>
          <Typography variant="text" style={{ color: '#013A98' }} className="flex items-right gap-2 test3 text-[#013a98]">
            {kl}
            
          </Typography>
          <Typography variant="text" style={{ color: '#013A98' }} className="flex items-right gap-2 test4 text-[#013a98]">
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
