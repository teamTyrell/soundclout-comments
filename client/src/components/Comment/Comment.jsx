import React from 'react';
import './Comment.css';

const Comment = props => (
  <div className={ `Comment ${ props.isReply && `Comment--reply`}` }>

    <div className='Comment__left-container'>
      <img className='Comment__user-photo' src='#' alt='' width='40' height='40'></img>
    </div>

    <div className='Comment__mid-container'>

      <h6 className='Comment__comment-info'>
        <span>{ props.user.name }</span> at <span>{ props.song_at }</span></h6>

      <p className='Comment__comment-text'>{ props.text }</p>
    </div>

    <div className='Comment__right-container'>

    </div>

  </div>
);

export default Comment;