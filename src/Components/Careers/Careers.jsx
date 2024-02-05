import React, { useState } from 'react';
import one from '../../assets/Images/Careers/one.svg';
import grpImg from '../../assets/Images/Careers/grpImg.svg';
import managingDirector from '../../assets/Images/Careers/managingDir.svg';
import resume from '../../assets/Images/Careers/resume.svg';
import { Icon } from '@iconify/react';
import { db } from '../../../firebase';
import { getDatabase, ref, push, set } from 'firebase/database';
import bluetick from '../../assets/Images/Careers/bluetick.svg'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import ref from firebase/storage

export default function Careers() {
    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        setFileName(uploadedFile.name); // Set the file name for display
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Reference to the careers node in the Realtime Database
        const careersRef = ref(db, 'careers');

        // Get the current timestamp
        const timestamp = new Date().toISOString();

        // Form data
        const formData = {
            name: event.target.name.value,
            number: event.target.number.value,
            email: event.target.email.value,
            message: event.target.message.value,
            status: "applied",
            timestamp: timestamp, // Adding timestamp to the form data
        };

        // Check if all fields are filled
        const fieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

        console.log(formData);
        if (!fieldsFilled || !file) {
            setErrorMessage('All fields are mandatory, including the file.');
            setLoading(false);
            return;
        }

        try {
            // Push form data to the database
            const newCareerRef = push(careersRef);

            // Get the unique ID generated for the form data
            const formUID = newCareerRef.key;

            formData.id = formUID;

            await set(ref(db, `careers/${formUID}`), formData);

            // Save a reference to the file in the database
            await set(ref(db, `resumes/${formUID}`), { fileURL: `resumes/${formUID}` });

            // Handle file upload using Firebase Storage with the folder named after the form's UID
            const storage = getStorage(); // Create storage instance
            const folderRef = storageRef(storage, `resumes/${formUID}/${file.name}`); // Folder named after the form UID
            await uploadBytes(folderRef, file);

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(folderRef);

            // Update the formData object with the download URL
            formData.fileDownloadURL = downloadURL; // Update the fileDownloadURL

            // Update the form data in the database with the fileDownloadURL and timestamp
            await set(newCareerRef, formData); // Update the form data in the database

            // Reset form and state
            setErrorMessage('');
            setFile(null);
            event.target.reset();

            setLoading(false);
            setFormSuccess(true);

            setTimeout(() => {
                setFormSuccess(false);
            }, 3000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while processing your request');
        }
    };



    return (
        <div className='lg:p-10 p-5 flex flex-col lg:gap-10 gap-8'>
            <div className='bg-[#cfe1ff] lg:h-[500px] xl:h-[400px] h-[250px] lg:rounded-[25px] rounded-[20px] overflow-clip relative'>
                <img src={one} className='h-full w-full md:object-cover' alt='One' />
                <div className='absolute z-10 top-0 flex flex-col justify-center place-items-center w-full lg:gap-8 md:gap-6 gap-5 p-10'>
                    <div className='text-[#5997FF] lg:text-[18px]'>Careers</div>
                    <div className='text-primary md:text-[30px] lg:text-[45px] text-center font-bold lg:px-28 md:px-18'>Become part of our agile and quick-thinking team, shaping a brighter future together.</div>
                    <button className='lg:px-10 md:px-6 px-4 lg:py-3 py-2 bg-primary lg:rounded-3xl md:rounded-xl rounded-lg lg:text-xl md:text-[16px] text-[12px] text-white' onClick={toggleForm}>Apply Now</button>
                </div>
            </div>
            <div className=''>
                <img src={grpImg} className='md:px-[10%]' alt='Group' />
            </div>
            <div className='w-full flex md:flex-row flex-col-reverse justify-center place-items-center'>
                <div className='md:w-[40%] md:p-10'>
                    <img src={managingDirector} className='md:px-10 p-10' alt='Managing Director' />
                </div>
                <div className='md:p-10 md:w-[60%] flex flex-col md:gap-6 p-2'>
                    <p className='text-primary opacity-90 italic md:text-[24px] text-[18px] md:p-0 p-4'>“A vibrant work culture and a team building spirit is what you will perceive while working with us. Your journey will certainly be memorable and unforgettable when you commence on a fresh note. While we work hard, we celebrate harder!”</p>
                    <div className='md:p-0 p-4'>
                        <span className='opacity-50 font-bold'>— Mr. Manish Mehta, </span>
                        <span className='opacity-50 italic'>Managing Director</span>
                    </div>
                </div>
            </div>

            {showForm && (

                !formSuccess ?
                    (
                        <div className='fixed md:top-[40%] top-[25%] left-[10%] w-[80%] md:h-[50%] h-[70%] flex items-center justify-center z-20'>
                            <div className='bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-5'>
                                <div className='flex flex-row justify-center'>
                                    <p className='w-[90%] text-center text-primary font-semibold md:text-[18px]'>Please fill the details and submit your resume. We shall get back to you</p>
                                    <div className='w-[10px] text-xl cursor-pointer md:ml-2' onClick={toggleForm}>
                                        <Icon icon="ph:x" />
                                    </div>
                                </div>
                                <form className='flex flex-col justify-center place-items-center md:px-10' onSubmit={handleSubmit}>
                                    {/* <label htmlFor='name'>Name*</label> */}

                                    <div className='w-full flex md:flex-row flex-col md:justify-between'>
                                        <input type='text' id='name' className='border-b border-black p-2 md:w-[40%] w-full mb-4' required placeholder='Name*' />

                                        {/* <label htmlFor='number'></label> */}
                                        <input
                                            type='tel'
                                            id='number'
                                            className='border-b border-black p-2 md:w-[40%] w-full mb-4'
                                            required
                                            placeholder='Number*'
                                            pattern='[0-9]{10}'
                                            title='Please enter a 10-digit phone number'
                                        />
                                    </div>

                                    {/* <label htmlFor='email'></label> */}
                                    <div className='w-full'>
                                        <input type='email' id='email' className='border-b border-black p-2 md:w-[40%] w-full mb-4' required placeholder='Email Address*' />
                                    </div>

                                    {/* <label htmlFor='message'></label> */}
                                    <textarea id='message' className='border-b border-black p-3 w-full mb-4 bg-[#f5f7fb] md:h-[100px]' placeholder='Message'></textarea>

                                    <div className={`md:py-4 relative flex place-items-center justify-center cursor-pointer border border-gray-400 w-full rounded-lg ${file ? 'bg-[#cfe1ff]' : ''}`}>
                                        <input
                                            type='file'
                                            id='resume'
                                            onChange={handleFileChange}
                                            accept='.pdf,.doc,.docx'
                                            title="There aren't any files chosen yet."
                                            placeholder='upload'
                                            className='z-20 cursor-pointer opacity-0 border border-gray-300 w-full mb-4'
                                        />
                                        <div className='flex flex-row absolute md:top-7 top-3 gap-2 opacity-30 z-10 place-items-center justify-center'>
                                            <img src={resume} alt='Resume' />
                                            <p className={`${file ? 'text-primary' : ''}`}>{fileName || 'Upload Your Resume'}</p> {/* Apply primary color if file is uploaded */}
                                        </div>
                                    </div>

                                    {errorMessage && (
                                        <p className='text-red-500 text-sm mt-2 mb-4'>{errorMessage}</p>
                                    )}

                                    <button
                                        className={`text-white px-4 py-2 rounded-md md:mt-5 mt-2 w-full md:w-[30%] ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-900 to-blue-400'
                                            }`}
                                        type='submit'
                                        disabled={loading} // Disable button when loading
                                    >
                                        {loading ? 'Loading...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className='fixed md:top-[40%] top-[25%] left-[10%] w-[80%] md:h-[50%] h-[70%] flex items-center justify-center z-20'>
                            <div className='w-full h-full bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-7 place-items-center justify-center'>
                                <img src={bluetick} className='md:h-[100px] md:w-[100px]'></img>
                                <p className='text-xl text-primary text-center'>You have submitted your profile successfully.</p>
                            </div>
                        </div>
                    )

            )}
        </div>
    );
}
