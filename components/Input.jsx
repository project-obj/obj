'use client';
import React from 'react';

const Input = React.memo(({ svg, placeholder, type, value, onChange }) => {
  return (
    <>
      {svg}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent"
        required
      />
    </>
  );
});

export default Input;
