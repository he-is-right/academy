"use client"
import React, { useState } from 'react';

export default function Subscriber() {
    const [email, setEmail] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
            })
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error submitting form:', error)
        }

        setEmail('');
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="py-[10rem] bg-white">
                <input value={email} onChange={handleEmail} type="email" placeholder="Enter Email" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}