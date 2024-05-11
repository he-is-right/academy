import React from 'react';

interface AgeProps {
    value: string;
    onChange: (value: string) => void;
}

const AgeSelect: React.FC<AgeProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={handleChange} required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
            <option value="" disabled selected>Select your Age</option>
            <option value="13 - 17">13 - 17</option>
            <option value="18 - 25">18 - 25</option>
            <option value="26 - 30">26 - 30</option>
            <option value="31 - ">31 - </option>
        </select>
    );
};

export default AgeSelect;