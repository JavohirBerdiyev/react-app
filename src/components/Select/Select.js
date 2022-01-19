import React from 'react';

const Select = ({ className, children, ...props }) => {
  return (
    <div className='container my-3'>
      <select className={className} {...props}>
        {children}
      </select>
    </div>

  );
}

export default Select;
