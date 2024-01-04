import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const ArchivedForm = ({ event, onSubmit, onChange, onClose, title }) => {
    console.log(event);

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onChange({
                    target: {
                        name: field,
                        value: e.target.result,
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        onSubmit(formData); // Call the onSubmit function passed through props
    };

    return (
        // <div className="absolute top-0 left-0 z-10 w-full h-[600px] bg-gray-200 bg-opacity-50 flex justify-center items-center">
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center overflow-auto">
            <div className="bg-white p-10 rounded-md relative flex flex-col gap-4">
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>
                    <Icon icon="mingcute:close-fill" />
                </button>
                <h2 className="text-2xl font-semibold text-center">{title}</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <label className="text-primary flex flex-col">
                        <span>Description:</span>
                        <textarea
                            name="description"
                            value={event.description}
                            onChange={onChange}
                            className="bg-white text-black py-2 px-4 rounded-md border border-gray-300"
                        />
                    </label>
                    <label className="text-primary flex flex-col">
                        <span>Upload Archived Image</span>
                        <input
                            type="file"
                            accept=".jpg, .png, image/jpeg, image/png"
                            onChange={(e) => handleFileChange(e, 'archivedImg')}
                            className="bg-white text-black py-2 px-4 rounded-md border border-gray-300"
                            name="archivedImg"
                        />
                    </label>
                    <button className="bg-primary text-base text-white py-2 px-4 rounded-md" type="submit">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};

ArchivedForm.propTypes = {
    event: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default ArchivedForm;
