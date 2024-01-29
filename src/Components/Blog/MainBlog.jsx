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

  if (!innerContent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: innerContent.HTMLContent }} />
      <img src={innerContent.Image} alt="Blog" />
    </div>
  );
};

export default MainBlog;