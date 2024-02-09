

// Testimonial.jsx
import React, { useEffect, useState } from 'react';
import { CardWithLink } from './CardWithLink';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDiNLjf19bW0-5cvkOtdlqYI7YiDzt3WA0",
  authDomain: "reifenhauser-2d366.firebaseapp.com",
  databaseURL: "https://reifenhauser-2d366-default-rtdb.firebaseio.com",
  projectId: "reifenhauser-2d366",
  storageBucket: "reifenhauser-2d366.appspot.com",
  messagingSenderId: "1000320736803",
  appId: "1:1000320736803:web:c9db2603f14597edf45b96",
  measurementId: "G-80E388KDKZ"
};

function Testimonial() {
  const initialDisplayLimit = 6;
  const loadMoreIncrement = 3;

  const [testimonials, setTestimonials] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(initialDisplayLimit);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const testimonialsRef = ref(database, 'testimonials');

    const fetchTestimonials = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };


    fetchTestimonials();
  }, []);

  const handleLoadMore = () => {
    if (displayLimit < testimonials.length) {
      setDisplayLimit((prevDisplayLimit) => prevDisplayLimit + loadMoreIncrement);
    } else {
      // Handle the case when no more data is available
    }
  };

  return (
    <div className="App">
      <p className="text-xl test11">Testimonials</p>
      <p className="text-3xl mt-8 test112">
        <strong>See what our users say about us</strong>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6 h-auto">
        {testimonials.slice(0, displayLimit).map((testimonial, index) => (
          <CardWithLink
            key={index}
            title={`Testimonial #${index + 1}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {displayLimit < testimonials.length && (
        <div className="w-full flex justify-center place-items-center mt-10 md:mb-10">
          <div className="">
            <button
              onClick={handleLoadMore}
              className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary"
            >
              Load More
              {/* You may need to adjust the icon based on your icon library */}
              {/* <div className="text-primary md:text-xl">
                <Icon icon="iconoir:arrow-tr" />
              </div> */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
