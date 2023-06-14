import React from 'react';

const FormField = ({ children }) => {
  return (
    <div className="flex items-center h-[55px] mx-[40px] mb-[30px] border-b-1">
      {children}
    </div>
  );
};

export default FormField;
