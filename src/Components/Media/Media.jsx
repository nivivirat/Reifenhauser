
import './Media.css';
import React from 'react';
import rimg from '../../assets/Images/Media/R.svg'
import CardComponent from "./CardComponent"; 
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Media() {
  return (
    <div className="App">
     <div className="text-4xl flex-flex media1"><strong>MEDIA</strong></div>
     <div className="text-xl flex-flex media2">Glimpse through the round up of the latest  trends in the packaging industry</div>    
     <div className="text-3xl flex-flex media3">News & Updates</div>
     <div className="text-xl flex-flex media4">Our platform serves as a hub for insights, trends, and stories who lead the company forward.</div>
     <img className ="media56" src={rimg} alt ="image"></img>
     <div className="flex flex-col rounded-lg   md:max-w-full md:flex-row media5">
        <Card className="flex flex-col rounded-lg   md:max-w-full md:flex-row media5">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-3/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/80cc/c55b/b6ca2c4e7525f68f6dea0caebecb5cb8?Expires=1699833600&Signature=O1Sr~zgQ1MKMlYwEYeLx~veWKWeKg052bEpL6bRlW4SImZv4s7mdsDLl~iOA2a5SyhYK2AaxdWP065SRWM2jpvnkOp7A1vJQYJDN0FoqZXKBOu~FS5rMHjlvq-EF8-pLLRj2DglomG3~~TBdejRnK8gU3RSZSWvUqqTmjDsQGEfmaC6GAOoUNmvPkurrZErrBbHjTCt0RdEWfuBTGdlv7aLuDR7f67UeWGl93QPAO~iMmhNGt7CvVPMSC04UGVHN8Ve54Q~WxIuNkd72dC0-dxuyoJvVFh2qSyftUCwfblvVRoi0CLEciJO1SovamfpOAvHkedb6uftq902x3VpmwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="card-image mediax"
              className="h-full w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
            />
             
          </CardHeader>
          <CardBody>
            <div className="flex flex-col justify-start p-6">
              <Typography variant="h4" className="mb-2 media7 text-2xl">
                Sustainable and tricky materials work well with CI flexo
              </Typography>
              <Typography color="gray" className="flex flex-col text-2xs justify-start p-6 media17">
                Manish Mehta, managing director, Reifenhäuser India talks about how gravure and CI flexo are competing in terms of space, speed, cost and more. He highlights the benefits of CI flexo trade shops which are scaling up the industry
              </Typography>
            </div>

            <Typography color="gray" className="mb-8 font-normal media9 text-xl media17">
              31 July 2023
            </Typography>
          </CardBody>
        </Card>
      </div>


   <div className="flex flex-col rounded-lg  md:max-w-full md:flex-row media5">
        <Card className="flex flex-col rounded-lg  md:max-w-full md:flex-row media5">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-3/5 shrink-0 rounded-r-none"
          >
        <img
          src="https://s3-alpha-sig.figma.com/img/8966/dc2c/da67a93dee3bbebd58880095733ec183?Expires=1699833600&Signature=AnRnqWLa2LaDFzBR8VuPdpWoqaPxjG7WRLQVd64bONL562weMVIzlZzm9RCoK2nkDjn4QqAI~wuJEsMXL7viuwYD87RaAEQu5ir-llwSC3ikhXCaf9y1ydyKK9yz16T8RcgOJGjjmGY2YtPDUUKeIeqnp3ikbQkvVZs8P-QGyu0I6y3ZhtQZ6hs4yduhmyB6WcvGFnICCKZXNq50K5eTGx~HhOWOBsN-mwvD22uak75jATkaj-HcZwyIIl6GWxfQUE4gwZunL65zRRm22IA7jblHQ0qwZvyHncn6gsQgJTrn7kTDOrXUmQpvEiVEe6RxqBuXHdm3La64W76yB6QNvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="card-image mediax"
          className="h-full w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg sm:max-w-full media6"
        />
      </CardHeader>
      <CardBody>
        
      <Typography variant="h4" className="mb-2 media7 text-3xl">
      Reifenhäuser India participates with principals at PlastIndia 2023
        </Typography>
      
        
        <Typography color="gray" className="mb-8 font-normal media10 text-xl">
       31 July 2023
        </Typography>
        <img
          src="https://s3-alpha-sig.figma.com/img/584a/2c6f/b09e1acf94f39cd2171d6d7df04dbe4c?Expires=1699833600&Signature=DzGCg2Ix5wdG-bc8a62iEqXrhtJo2tyTU1piEHKuYR3MbWdVI~07ZyNUBvqoPyHxg8f7SdsCfdKpPvz7z8U4MLiKscd7~2TCIyoRvYjJ6hBxF-ZZfhz8-Nw5BmYWlLkWRx1ARSfjkKoFqTd1WUNE9L819rjVMy3KpRWxdemmRruv0JOX5qwfrk2wpeJft65BtazqBeGxsG0u-rX53ubupK6wkl0wHQ7KdrCA8uWFqvwgAQi0JjeqfpHx8XU7xsTiBE1JofEBvkRAMoKXGb1AePv4iSUcXdcf6NPvKPApLpbRUXdBIaPVKZ6qef33Xo8uMCVjDCI5Q-siDDsN8M70FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="card-image mediax"

          className="w-full object-cover media11"
        />
          <Typography variant="h4" className="mb-2 media12 text-xs">
          Packaging Southasia
        </Typography>
      
   
    
      </CardBody>
    </Card>
    </div>
    <div className="text-3xl flex-flex media3">Let’s Connect</div>
     <div className="text-xl flex-flex media4">Here’s what we've been up to recently.</div>
     <CardComponent>
    </CardComponent>
   
    </div>
    
  );
};