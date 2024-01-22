import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Icon } from '@iconify/react';
import Slider from './HomeTestimonalCard/Slider';
import { CWL } from '../../Testimonial/CWL';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
} from "@material-tailwind/react";

// const firebaseConfig = {
//     apiKey: "AIzaSyDiNLjf19bW0-5cvkOtdlqYI7YiDzt3WA0",
//     authDomain: "reifenhauser-2d366.firebaseapp.com",
//     projectId: "reifenhauser-2d366",
//     storageBucket: "reifenhauser-2d366.appspot.com",
//     messagingSenderId: "1000320736803",
//     appId: "1:1000320736803:web:c9db2603f14597edf45b96",
//     measurementId: "G-80E388KDKZ",
//   };

const firebaseConfig = {
  apiKey: "AIzaSyA1h6QXsmX4PcYCZILMTtry8UaaMbcBNKg",
  authDomain: "agent-807a7.firebaseapp.com",
  databaseURL: "https://agent-807a7-default-rtdb.firebaseio.com",
  projectId: "agent-807a7",
  storageBucket: "agent-807a7.appspot.com",
  messagingSenderId: "918626263804",
  appId: "1:918626263804:web:627f47367e84af8e5c2d79"
};

export default function HomeTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const testimonialsRef = ref(database, 'testimonials');

    onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      const testimonialsArray = [];

      for (const uid in data) {
        const testimonialData = data[uid];
        const testimonial = {
          uid,
          buttonText: testimonialData?.buttonText || '',
          pos: testimonialData?.pos || '',
          kl: testimonialData?.kl || '',
          poss: testimonialData?.poss || '',
          description: testimonialData?.description || '',
        };

        testimonialsArray.push(testimonial);
      }

      setTestimonials(testimonialsArray);
    });
  }, []);

  return (
    <div className="bg-base flex flex-col">
      <div className="md:px-[3%] pt-10 font-semibold md:w-[50%] xl:text-3xl text-2xl xl:font-semibold md:font-bold md:text-4xl w-full">
        <span>Here's what our <span className="text-primary">customers</span> say about us</span>
      </div>

      <div className="text-[#6B6B78] text-xs ">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_80%] lg:flex-[0_0_30%] ">
              <div>
                <CWL
                  key={index}
                  description={testimonial.description}
                  buttonText={testimonial.buttonText}
                  buttonTextt={testimonial.buttonTextt}
                  pos={testimonial.pos}
                  kl={testimonial.kl}
                  poss={testimonial.poss}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex justify-center place-items-center mt-10 md:mb-10">
        <a href="/testimonials" className="text-primary flex flex-row gap-2 p-3 mb-6 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary md:w-[17%] w-[60%]">
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
