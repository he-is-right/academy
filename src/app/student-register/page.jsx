"use client"
import React, { useState } from 'react';

export default function StudentRegister() {
    // variables for the inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [age, setAge] = useState('');
    const [join, setJoin] = useState(false);

    // writing functions for the input tags
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePhone = (event) => {
        // const phoneNumber = parsePhoneNumber();
        setPhone(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleCourse = (event) => {
        setCourse(event.target.value);
    }
    const handleAge = (event) => {
        setAge(event.target.value);
    }
    const handleJoin = () => {
        setJoin(!join);
    }

    // submit function handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('/api/create-student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, phone, gender, course, age, join })
            })
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setGender('');
        setCourse('');
        setAge('');
        // setJoin(false);
    }

    return (
        <>
            <div className="bg-[#f0f7ff] py-[2rem] md:py-[3rem]">
                <form onSubmit={handleSubmit} className="pb-[2rem] w-[95%] md:w-[50%] mx-auto bg-[white] shadow flex flex-col rounded-lg md:mt-[4rem]" action="">
                    <h1 className="font-bold text-lg mb-2 text-[#01303F] text-center bg-[#f5f5f5] py-4">Register Now!</h1>
                    <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                        <label className="form-control w-[100%] md:w-[95%]">
                            <div className="label">
                                <span className="label-text text-[#01303F]">First Name</span>
                            </div>
                            <input value={firstName} onChange={handleFirstName} required type="text" placeholder="Enter your first name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                        </label>
                        <label className="form-control w-[100%] md:w-[95%]">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Last Name</span>
                            </div>
                            <input value={lastName} onChange={handleLastName} required type="text" placeholder="Enter your last name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                        </label>
                    </div>
                    {/* email and phone number */}
                    <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                        <label className="form-control w-[100%] md:w-[95%] ">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Email</span>
                            </div>
                            <input value={email} onChange={handleEmail} required type="email" placeholder="Enter a valid email address" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                        </label>
                        <label className="form-control w-[100%] md:w-[95%] ">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Phone Number</span>
                            </div>
                            <input
                                value={phone}
                                onChange={handlePhone}
                                required
                                type="text"
                                placeholder="Enter Phone Number"
                                className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]"
                            />
                        </label>
                    </div>
                    {/* gender, course and age */}
                    <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                        <label className="form-control w-[100%] md:w-[95%] ">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Gender</span>
                            </div>
                            <select value={gender} onChange={handleGender} required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                                <option disabled value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>
                        <label className="form-control w-[100%] md:w-[95%] ">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Course</span>
                            </div>
                            <select value={course} onChange={handleCourse} required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                                <option disabled value="">Select Course</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Product Design">Product Design</option>
                                <option value="PC/Phone Maintainance">PC/Phone Maintenance</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="Social Media Management">Social Media Management</option>
                            </select>
                        </label>
                        <label className="form-control w-[100%] md:w-[95%] ">
                            <div className="label">
                                <span className="label-text text-[#01303F]">Age</span>
                            </div>
                            <select value={age} onChange={handleAge} required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                                <option disabled value="">Select Age</option>
                                <option value="13 - 17">13 - 17</option>
                                <option value="18 - 25">18 - 25</option>
                                <option value="26 - 30">26 - 30</option>
                                <option value="31 -">31 - </option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control w-[95%] mx-auto mt-4">
                        <label className="label cursor-pointer w-[50%] md:w-[24%]">
                            <input type="checkbox" checked={join} onChange={handleJoin} className="checkbox border-[#01303F]" />
                            <span className="label-text text-[#01303F]">Join Community</span>
                        </label>
                    </div>
                    <button type="submit" className="bg-[#01303F] border border-2 border-[#01303F] py-4 mt-8 md:mt-7 w-[90%] md:w-[95%] mx-auto rounded btn text-white">Submit</button>
                </form>
            </div>
        </>
    );
}
