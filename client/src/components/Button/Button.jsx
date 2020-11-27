import React from 'react';
import './Button.css';

const Button = props => (
  <button
    id={ props.id && props.id }
    onMouseOver={ props.onMouseOver && props.onMouseOver }
    className={

      `Button
      ${ props.type
        ? `Button--${ props.type }`
        : `Button--primary` }

       ${ props.size
        ? `Button--${ props.size }`
        : `Button--medium` }
        ${ props.className && props.className }`

    }
  >
    { props.children }
  </button>
);

export default Button;