import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1h6QXsmX4PcYCZILMTtry8UaaMbcBNKg",
  authDomain: "agent-807a7.firebaseapp.com",
  databaseURL: "https://agent-807a7-default-rtdb.firebaseio.com",
  projectId: "agent-807a7",
  storageBucket: "agent-807a7.appspot.com",
  messagingSenderId: "918626263804",
  appId: "1:918626263804:web:627f47367e84af8e5c2d79"
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
    return <div>Loading...</div>;
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
        <img src={innerContent.Image} alt="Blog" className='py-5 mx-[100px] my-10 object-contain' />
        <div dangerouslySetInnerHTML={{ __html: innerContent.HTMLContent }} />
      </div>
    </div>
  );
};

export default MainBlog;