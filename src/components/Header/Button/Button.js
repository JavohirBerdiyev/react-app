import React from 'react';

const Button = (props) => {
  return (
    <button {...props} className='btn btn-primary'>
      {props.children}
    </button>
  );
}

export default Button;
