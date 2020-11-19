import React from 'react';
import './CommentInput.css';
import {
  Input,
} from '../components';

const CommentInput = props => (
  <div className='CommentInput'>

    <img className='CommentInput__user-photo' src='https://soundclout-images.s3.ca-central-1.amazonaws.com/user.jpg' alt='' height='40' width='40'></img>

    <div
      className={ `CommentInput__input-container ${ props.focused && 'CommentInput__input-container--active' }` }
    >
      <Input
        value={ props.value }
        focused={ props.focused }
        placeholder='Write a comment'
        toggleInputFocus={ props.toggleInputFocus }
        handleChange={ props.handleChange }
      />
    </div>

  </div>
);

export default CommentInput;