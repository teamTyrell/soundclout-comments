import React from 'react';
import './CommentsList.css';
import {
  Comment,
} from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  formatNumber,
} from '../../lib/utils';

const CommentsList = props => {

  const { comments } = props.comments;

  return (
    <div className='CommentsList'>

      <div className='CommentsList__heading'>
        <FontAwesomeIcon
          icon={ faCommentAlt }
          className='CommentsList__comment-icon'
        />

        <h4>{ props.comments.total && formatNumber(props.comments.total) } comments</h4>
      </div>

      <div className='CommentsList__comments'>

        {
          comments &&
            comments.map((comment, index) => {

              const { replies } = comment;

              return (
                <div key={ index }>
                  <Comment
                    collapseButtons={ props.collapseButtons }
                    { ...comment }
                    isReply={ false }
                    id={ `comment-${ index }` }
                  />
                  {
                    replies &&
                      replies.map((reply, i) => (
                        <Comment
                          collapseButtons={ props.collapseButtons }
                          { ...reply }
                          replyTo={ comment.user.name }
                          isReply={ true }
                          key={ i }
                          id={ `reply-${ i }` }
                        />
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
