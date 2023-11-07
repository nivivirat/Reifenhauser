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

export function CardWithLink({ description, buttonText, pos, kl }) {
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
          <Typography variant="text" className="flex items-center gap-2 pl-16 test1">
            {buttonText}
            {/* Your existing SVG component */}
          </Typography>
          <Typography variant="text" className="flex items-center gap-2 test2">
            {pos}
            
          </Typography>
          <Typography variant="text" className="test3">
            {kl}
            
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