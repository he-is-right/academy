"use client"
import React, { useState } from 'react';
import GenderSelect from '../components/GenderSelect';
import AgeSelect from '../components/AgeSelect';

// name, firstName, lastName, email, phone, gender, numberOfStudents, age, role
export default function Team() {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [numberOfStudents, setNumberOfStudents] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }

    // const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setGender(event.target.value);
    // }

    const handleNumberOfStudents = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfStudents(event.target.value);
    }

    // const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAge(event.target.value);
    // }

    const handleRole = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value);
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await fetch('api/add-team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, fullName, email, phone, gender, numberOfStudents, age, role })
            })
        } catch (error) {
            console.error('Error submitting Team data:', error)
        }

        setName('');
        setFullName('')
        setEmail('');
        setPhone('');
        setGender('');
        setNumberOfStudents('');
        setAge('');
        setRole('');

    }

    return <div className="bg-[#f0f7ff] py-[2rem] md:py-[3rem]">
        <form onSubmit={handleSubmit} className="pb-[2rem] w-[95%] md:w-[50%] mx-auto bg-[white] shadow flex flex-col rounded-lg md:mt-[4rem]" action="">
            <h1 className="font-bold text-lg mb-2 text-[#01303F] text-center bg-[#f5f5f5] py-4">Register Your Team/Organisation</h1>
            <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Team or Organisation</span>
                    </div>
                    <input value={name} onChange={handleName} required type="text" placeholder="Enter Team or Organisation name here" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Number of students</span>
                    </div>
                    <input value={numberOfStudents} onChange={handleNumberOfStudents} required type="number" placeholder="Enter Number of students" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
            </div>
            {/* full name and role*/}
            <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Full Name</span>
                    </div>
                    <input value={fullName} onChange={handleFullName} required type="text" placeholder="Enter your full name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
                <label className="form-control w-[100%] md:w-[95%] ">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Your Role</span>
                    </div>
                    <input value={role} onChange={handleRole} required type="phone" placeholder="Example: Teacher, Supervisor, CEO..." className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
            </div>
            {/* full name, email and phone number */}
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
                    <input value={phone} onChange={handlePhone} required type="text" placeholder="Enter Phone Number" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
            </div>
            {/* gender, course and age */}
            <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                <label className="form-control w-[100%] md:w-[95%] ">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Gender</span>
                    </div>
                    <GenderSelect value={gender} onChange={(value) => setGender(value)} />
                </label>

                <label className="form-control w-[100%] md:w-[95%] ">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Age</span>
                    </div>
                    <AgeSelect value={age} onChange={(value) => setAge(value)} />
                </label>
            </div>
            <button type="submit" className="bg-[#01303F] border border-2 border-[#01303F] py-4 mt-8 md:mt-7 w-[90%] md:w-[95%] mx-auto rounded btn text-white">Submit</button>
        </form>
    </div>
}