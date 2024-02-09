import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import PageNotFound from '../404/PageNotFound'

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const MainBlog = () => {
  const { id } = useParams();
  const [innerContent, setInnerContent] = useState(null);

  const [heading, setHeading] = useState(null);
  const [desc, setDesc] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, `Media/${id}`);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.innerContent) {
        setInnerContent(data.innerContent);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, [id]);

  // for heading

  useEffect(() => {
    const dbRef = ref(database, `media/${id}`);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.heading) {
        setHeading(data.heading);
      }
      if (data && data.description) {
        setDesc(data.description);
      }
      if (data && data.date) {
        setDate(data.date);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, [id]);

  if (!innerContent) {
    return <div>
      <PageNotFound />
    </div>;
  }

  return (
    <div className='p-10 flex flex-col justify-center place-items-center'>
      <div>
        <p className='text-center text-[#183B56] font-bold text-[26px] px-[15%] w-screen'>{heading}</p>
      </div>
      <div>
        <p className='text-[#183B56] font-semibold py-5 text-center w-screen'>{desc}</p>
      </div>
      <div>
        <p className='text-[#0078A6] w-screen text-center'>{date}</p>
      </div>
      <div className='flex flex-col justify-center'>
        <img src={innerContent.Image} alt="Blog" className='py-5  h-[500px] m-auto md:mx-[100px] md:my-10 object-contain' />
        <div dangerouslySetInnerHTML={{ __html: innerContent.HTMLContent }} />
      </div>
    </div>
  );
};

export default MainBlog;
