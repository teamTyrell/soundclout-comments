import React from 'react';
import './Button.css';

const Button = props => (
  <button
    className={

      `Button
      ${ props.type
        ? `Button--${ props.type }`
        : `Button--primary` }

       ${ props.size
        ? `Button--${ props.size }`
        : `Button--medium` }`

      }
  >
    { props.children }
  </button>
);

export default Button;