import { Icon } from '@iconify/react';
import { get, push, ref, set } from "firebase/database";
import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import newsletter from '../../../assets/Images/Home/newsletter/newsletter.svg';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [showEmailInput, setShowEmailInput] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async () => {
        if (email.trim() !== '') {
            setLoading(true);
            const emailRef = ref(db, 'newsletter-subscription');
    
            try {
                const snapshot = await get(emailRef);
                const emails = snapshot.val();
    
                if (!emails || !Object.values(emails).some((entry) => entry.email === email)) {
                    const timestamp = new Date().toISOString();
                    const newEmailRef = push(emailRef); // Obtain the reference with the generated key
                    const newEmailId = newEmailRef.key; // Extract the generated key (UID)
    
                    // Set the data with the generated ID (UID)
                    await set(ref(db, `newsletter-subscription/${newEmailId}`), {
                        email,
                        timestamp,
                        id: newEmailId // Include the ID field with the UID
                    });
    
                    setSuccessMessage('Email submitted successfully!');
                    setShowEmailInput(false);
                } else {
                    setSuccessMessage('Email is already subscribed to our newsletter!');
                    setShowEmailInput(false);
                }
    
                setTimeout(() => {
                    setSuccessMessage('');
                    setShowEmailInput(true);
                    setLoading(false);
                }, 3000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setSuccessMessage('An error occurred while processing your request');
            } finally {
                setEmail('');
            }
        } else {
            setSuccessMessage('Please enter a valid email address!');
        }
    };
    
    
    return (
        <div className='md:shadow-sm shadow-2xl shadow-blue-500/50 w-screen text-white flex justify-center relative md:mt-[8%] mt-[40%]'>
            <div className='absolute -bottom-[30px] left-[10%] w-full'>
                <div className='md:w-[80%] md:h-[180px] h-[230px] w-[75%] flex md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-2 md:px-10 place-items-center md:p-5 m-3 relative bg-gradient-to-r from-blue-900 to-blue-400 rounded-2xl'>
                    <img src={newsletter} className='absolute right-0 bottom-0'></img>
                    <div className='flex flex-col md:p-0 p-5 gap-1'>
                        <p className='font-semibold md:text-3xl text-[18px] lg:pr-[100px] md:pr-[100px]'>Subscribe Our Newsletter!</p>
                        <p className='text-[12px] md:text-[12px] lg:text-[16px] lg:pr-[100px] md:pr-[100px]'>Stay Tuned for regular updates</p>
                    </div>

                    {showEmailInput ? (
                        <div className='md:pb-0 pb-2 md:w-[30%] w-full flex flex-col md:justify-normal justify-center place-items-center gap-4 md:mr-[10%]'>
                            <div className='flex flex-row justify-between place-items-center bg-white text-primary lg:w-[400px] md:w-[300px] w-[90%] md:p-3 p-2 px-5 rounded-xl'>
                                <input type='email' value={email} onChange={handleEmailChange} placeholder='E-mail' className='w-full outline-none placeholder:text-primary' />
                                <Icon icon="material-symbols-light:keyboard-arrow-right" />
                            </div>
                            <div className={`cursor-pointer flex flex-row justify-center bg-white text-primary lg:w-[400px] md:w-[300px] w-[90%] md:mb-0 mb-4 p-1 px-2 rounded-xl ${loading ? 'opacity-50' : ''}`}>
                                <button onClick={handleSubmit} className='cursor-pointer w-full h-full' disabled={loading}>
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="md:w-[30%] md:mr-[10%] flex flex-col justify-center items-center w-full h-full text-center">
                            <p className="text-white">{successMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}