'use client';
import React from 'react';

const Input = React.memo(
  ({ svg, name, placeholder, type, value, onChange }) => {
    return (
      <div className="mb-4 flex">
        {svg}
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="border-b-2 border-mint px-2 text-[16px] outline-none"
          required
        />
      </div>
    );
  },
);

export default Input;
