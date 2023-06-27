import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <div className="flex flex-col">{children}</div>
    </form>
  );
};

export default Form;
