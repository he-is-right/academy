import React from 'react';

interface GenderSelectProps {
    value: string;
    onChange: (value: string) => void;
}

// const GenderSelect: React.FC<GenderProps> = ({ value, onChange }) => {
//     const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         onChange(e.target.value);
//     };

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={handleChange} required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
            <option value="" disabled selected>Select your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    );
};

export default GenderSelect;