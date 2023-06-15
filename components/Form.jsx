import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center">
      {children}
    </form>
  );
};

export default Form;
