import { useState } from "react";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        serviceInterestedIn: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., sending data to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            firstName: "",
            phoneNumber: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="lg:w-[90%] w-full h-full bg-white border border-[#a0a0a0] md:p-10 p-7 md:rounded-[30px] rounded-[20px]">
            <form
                onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
            >
                <div className="md:flex md:space-x-4">
                    <div className="w-full">
                        <label htmlFor="firstName">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full border border-[#a0a0a0] rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="md:flex flex justify-between md:space-x-4">
                    <div className="md:w-1/2 w-[48%]">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full border border-[#a0a0a0] rounded-md p-2"
                        />
                    </div>
                    <div className="md:w-1/2 w-[48%]">
                        <label htmlFor="email" className="">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-[#a0a0a0] rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-left">
                        Message*
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write here"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="md:w-full w-full border border-[#a0a0a0] rounded-md p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-[#285196] text-white px-4 py-2 w-full md:w-full rounded-[50px]"
                >
                    Submit
                </button>
            </form>

        </div>
    );
}
