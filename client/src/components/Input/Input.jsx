import React from 'react';
import './Input.css';

const Input = props => (
  <div className='Input'>
    <input
      className={ `Input__input ${ props.focused && 'Input__input--focused' }` }
      name='commentInput'
      type='text'
      placeholder={ props.placeholder }
      value={ props.value }
      onChange={ props.handleChange }
      onBlur={ e => {
        props.focused
          ? (props.toggleInputFocus())
          : null
      }}
      onClick={ e => {
        props.focused
          ? null
          : (props.toggleInputFocus())
      }}
    />
  </div>
);

export default Input;
