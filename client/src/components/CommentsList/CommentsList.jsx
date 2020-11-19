import React from 'react';
import './CommentsList.css';
import {
  Comment,
} from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

const CommentsList = props => {

  const { comments } = props.comments;

  return (
    <div className='CommentsList'>

      <div className='CommentsList__heading'>
        <FontAwesomeIcon
          icon={ faCommentAlt }
          className='CommentsList__comment-icon'
        />

        <h4>7,160 comments</h4>
      </div>

      <div className='CommentsList__comments'>

        {
          comments &&
            comments.map((comment, index) => {

              const { replies } = comment;

              return (
                <div key={ index }>
                  <Comment { ...comment } isReply={ false } />
                  {
                    replies &&
                      replies.map((reply, i) => (
                        <Comment { ...reply } isReply={ true } key={ i } />
                      ))
                  }
                </div>
              );
            })
        }

      </div>

    </div>
  );
};

export default CommentsList;
