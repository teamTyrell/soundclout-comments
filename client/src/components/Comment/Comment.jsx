import React from 'react';
import Moment from 'react-moment';
import './Comment.css';
import {
  formatSongTime,
} from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReply,
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
} from '../components';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.commentContainer = null;

    this.setHoverState = this.setHoverState.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  };

  setHoverState(hover) {
    this.setState({ hover });
  }

  onMouseOver(e) {
    this.setHoverState(true);
  }

  onMouseOut(e) {
    this.setHoverState(false);
  }

  componentDidMount() {



    this.commentContainer = document.querySelector(`#comment-container-${ this.props.id && this.props.id }`);
    const replyButton = document.querySelector(`#comment-reply-button-${ this.props.id && this.props.id }`);

    const addAndRunListener = e => {
      this.onMouseOut(e);
      this.commentContainer.removeEventListener('mouseout', addAndRunListener);
      this.commentContainer.addEventListener('mouseover', removeAndRunListener);
    };

    const removeAndRunListener = e => {
      this.onMouseOver(e);
      this.commentContainer.removeEventListener('mouseover', removeAndRunListener);
      this.commentContainer.addEventListener('mouseout', addAndRunListener);
    };

    this.commentContainer.addEventListener('mouseover', removeAndRunListener);




    // replyButton.addEventListener('mouseover', () => {
    //   this.commentContainer.removeEventListener('mouseover', addAndRunListener);
    // });

    // const replyButton = document.querySelector(`#comment-reply-button-${ this.props.id && this.props.id }`);

    // this.commentContainer.addEventListener('mouseover', this.onMouseOver);
    // this.commentContainer.addEventListener('mouseout', this.onMouseOut);

    // replyButton.addEventListener('mouseover', e => {
    //   commentContainer.removeEventListener('mouseover', this.onMouseOver);
    //   commentContainer.removeEventListener('mouseout', this.onMouseOut);
    // });

    // replyButton.addEventListener('mouseout', e => {
    //   commentContainer.addEventListener('mouseover', this.onMouseOver);
    //   commentContainer.addEventListener('mouseout', this.onMouseOut);
    // });

  }

  componentDidUpdate() {

    // if (this.state.hover) {

    //   const replyButton = document.querySelector(`#comment-reply-button`);

    //   replyButton.addEventListener('mouseover', e => {
    //     this.commentContainer.removeEventListener('mouseover', this.onMouseOver);
    //     this.commentContainer.removeEventListener('mouseout', this.onMouseOut);
    //   });

    //   replyButton.addEventListener('mouseout', e => {
    //     // this.commentContainer.addEventListener('mouseover', this.onMouseOver);
    //     // this.commentContainer.addEventListener('mouseout', this.onMouseOut);
    //   });

    // }

  }

  render() {

    return (
      <div
        id={ `comment-container-${ this.props.id !== undefined && this.props.id }` }
        className={ `Comment ${ this.props.isReply && `Comment--reply`}` }
      >

        <div className='Comment__left-container'>
          <img className='Comment__user-photo' src={ this.props.user && `https://soundclout-images.s3.ca-central-1.amazonaws.com/${ this.props.user.image_url }`} alt='' width='40' height='40'></img>
        </div>

        <div className='Comment__mid-container'>

          <h6 className='Comment__comment-info'>
            <span>{ this.props.user.name }</span> at <span>{ this.props.song_at && formatSongTime(this.props.song_at) }</span></h6>

          <p className='Comment__comment-text'>
            {
              this.props.replyTo
                ? <>@<a className='Comment__user-mention' href='#'>{ this.props.replyTo }</a> { this.props.text }</>
                : this.props.text
            }
          </p>
        </div>

        <div className='Comment__right-container'>

          <h5 className='Comment__timestamp'><Moment fromNow>{ this.props.created_at }</Moment></h5>

          { this.state.hover && (
              <Button
                id={ `comment-reply-button` }
                type='default'
                size='small'
              >

                <div className='Comment__button-content'>
                  <FontAwesomeIcon
                    icon={ faReply }
                    className='Comment__reply-icon'
                  />
                  {
                    !this.props.collapseButtons && <span>Reply</span>
                  }
                </div>

              </Button>
          ) }

        </div>

      </div>
    );
  }
}

export default Comment;